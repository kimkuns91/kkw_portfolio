'use client';

import {
  EMAIL_REGEX,
  FIELD_LIMITS,
  FORM_LABELS,
  FORM_PLACEHOLDERS,
  FORM_VALIDATION_MESSAGES,
  PHONE_REGEX,
  SERVICE_OPTIONS,
  TOAST_MESSAGES,
  formatKoreanMobile,
} from '@/constants/contact';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '../ui/button';
import Grid from './Grid';
import { IContactForm } from '@/types/contact';
import { Input } from '../ui/input';
import Link from 'next/link';
import { PRIVACY_CONSENT_SUMMARY } from '@/constants/privacy';
import Spinner from '../Spinner';
import { Textarea } from '../ui/textarea';
import Turnstile from './Turnstile';
import toast from 'react-hot-toast';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

/** 제출 값에서 앞뒤 공백을 제거한다. 공백만 입력한 경우 빈 문자열이 되어
 * required 검증에 걸린다. */
const trimValue = (value: string) =>
  typeof value === 'string' ? value.trim() : value;

/**
 * ContactForm 컴포넌트
 *
 * @description
 * 문의 폼을 표시하고 이메일 전송을 처리하는 컴포넌트
 *
 * @features
 * - React Hook Form으로 폼 상태 관리
 * - 유효성 검사 (이름, 이메일, 메시지 필수)
 * - 이메일 형식 검증
 * - 전송 상태 표시
 * - 성공/실패 토스트 메시지
 * - 개인정보 수집 및 이용 동의 (필수)
 * - Cloudflare Turnstile 캡챠
 */
export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');
  const [captchaResetSignal, setCaptchaResetSignal] = useState(0);

  // Turnstile 사이트 키가 없으면 캡챠를 요구하지 않는다 (Turnstile.tsx 참고).
  const isCaptchaEnabled = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<IContactForm>({
    // 필드를 처음 벗어날 때 검증하고, 이후에는 입력 즉시 재검증한다.
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      consent: false,
    },
  });

  const serviceValue = watch('service');

  // 전화번호 필드는 blur 시점에 한국 휴대폰이면 하이픈을 붙여 정리한다.
  const phoneField = register('phone', {
    setValueAs: trimValue,
    pattern: {
      value: PHONE_REGEX,
      message: FORM_VALIDATION_MESSAGES.phoneInvalid,
    },
  });

  const handlePhoneBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    phoneField.onBlur(event);
    const formatted = formatKoreanMobile(event.target.value);
    if (formatted !== event.target.value) {
      setValue('phone', formatted, { shouldValidate: true });
    }
  };

  const handleVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const onSubmit = async (data: IContactForm) => {
    if (isCaptchaEnabled && !turnstileToken) {
      toast.error(TOAST_MESSAGES.captchaRequired);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, turnstileToken }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast.success(TOAST_MESSAGES.success);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(TOAST_MESSAGES.error);
    } finally {
      // 토큰은 성공·실패 여부와 무관하게 1회용이므로 항상 새로 발급받는다.
      setCaptchaResetSignal((signal) => signal + 1);
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b p-4 from-[#27272c] to-[#27272c]/80 sm:p-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid size={20} />

      {/* Name Field */}
      <div className="relative z-20 w-full">
        <label
          className="pl-1 mb-4 inline-block text-sm font-medium text-neutral-light"
          htmlFor="name"
        >
          {FORM_LABELS.name} <span className="text-error">*</span>
        </label>
        <Input
          id="name"
          type="text"
          placeholder={FORM_PLACEHOLDERS.name}
          className="w-full"
          maxLength={FIELD_LIMITS.name}
          {...register('name', {
            setValueAs: trimValue,
            required: FORM_VALIDATION_MESSAGES.nameRequired,
            maxLength: {
              value: FIELD_LIMITS.name,
              message: FORM_VALIDATION_MESSAGES.nameTooLong,
            },
          })}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && (
          <span className="text-red-600 text-sm" role="alert">
            {errors.name.message}
          </span>
        )}
      </div>

      {/* Email Field */}
      <div className="relative z-20 w-full">
        <label
          className="pl-1 mb-4 inline-block text-sm font-medium text-neutral-light"
          htmlFor="email"
        >
          {FORM_LABELS.email} <span className="text-error">*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder={FORM_PLACEHOLDERS.email}
          className="w-full"
          maxLength={FIELD_LIMITS.email}
          {...register('email', {
            setValueAs: trimValue,
            required: FORM_VALIDATION_MESSAGES.emailRequired,
            maxLength: {
              value: FIELD_LIMITS.email,
              message: FORM_VALIDATION_MESSAGES.emailTooLong,
            },
            pattern: {
              value: EMAIL_REGEX,
              message: FORM_VALIDATION_MESSAGES.emailInvalid,
            },
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <span className="text-red-600 text-sm" role="alert">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Phone Field */}
      <div className="relative z-20 w-full">
        <label
          className="pl-1 mb-4 inline-block text-sm font-medium text-neutral-light"
          htmlFor="phone"
        >
          {FORM_LABELS.phone}
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder={FORM_PLACEHOLDERS.phone}
          className="w-full"
          maxLength={FIELD_LIMITS.phone}
          {...phoneField}
          onBlur={handlePhoneBlur}
          aria-invalid={errors.phone ? 'true' : 'false'}
        />
        {errors.phone && (
          <span className="text-red-600 text-sm" role="alert">
            {errors.phone.message}
          </span>
        )}
      </div>

      {/* Service Field */}
      <div className="relative z-20 w-full">
        <label
          className="pl-1 mb-4 inline-block text-sm font-medium text-neutral-light"
          htmlFor="service"
        >
          {FORM_LABELS.service}
        </label>
        <Select
          value={serviceValue}
          onValueChange={(value) => setValue('service', value)}
        >
          <SelectTrigger className="w-full" id="service">
            <SelectValue placeholder={FORM_PLACEHOLDERS.service} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {SERVICE_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Message Field */}
      <div className="relative z-20 mb-4 w-full">
        <label
          className="pl-1 mb-4 inline-block text-sm font-medium text-neutral-light"
          htmlFor="message"
        >
          {FORM_LABELS.message} <span className="text-error">*</span>
        </label>
        <Textarea
          id="message"
          className="h-[200px]"
          placeholder={FORM_PLACEHOLDERS.message}
          maxLength={FIELD_LIMITS.messageMax}
          {...register('message', {
            setValueAs: trimValue,
            required: FORM_VALIDATION_MESSAGES.messageRequired,
            minLength: {
              value: FIELD_LIMITS.messageMin,
              message: FORM_VALIDATION_MESSAGES.messageTooShort,
            },
            maxLength: {
              value: FIELD_LIMITS.messageMax,
              message: FORM_VALIDATION_MESSAGES.messageTooLong,
            },
          })}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <span className="text-red-600 text-sm" role="alert">
            {errors.message.message}
          </span>
        )}
      </div>

      {/* 개인정보 수집 및 이용 동의 */}
      <div className="relative z-20 w-full">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-accent"
            {...register('consent', {
              required: FORM_VALIDATION_MESSAGES.consentRequired,
            })}
            aria-invalid={errors.consent ? 'true' : 'false'}
          />
          <label
            className="cursor-pointer text-sm font-medium text-neutral-light"
            htmlFor="consent"
          >
            {FORM_LABELS.consent} <span className="text-error">*</span>{' '}
            <Link
              href="/privacy"
              target="_blank"
              className="text-accent underline underline-offset-2"
            >
              {FORM_LABELS.consentLink}
            </Link>
          </label>
        </div>

        <p className="mt-2 pl-7 text-xs leading-relaxed text-neutral-dark">
          수집 항목: {PRIVACY_CONSENT_SUMMARY.items} / 이용 목적:{' '}
          {PRIVACY_CONSENT_SUMMARY.purpose} / 보유 기간:{' '}
          {PRIVACY_CONSENT_SUMMARY.retention}
        </p>

        {errors.consent && (
          <span className="text-red-600 text-sm" role="alert">
            {errors.consent.message}
          </span>
        )}
      </div>

      {/* 자동 입력 방지 (Cloudflare Turnstile) */}
      <Turnstile onVerify={handleVerify} resetSignal={captchaResetSignal} />

      {/* Submit Button */}
      <Button
        size="md"
        className="w-full hover:bg-accent-hover"
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? <Spinner /> : FORM_LABELS.submit}
      </Button>
    </form>
  );
};
