'use client';

import {
  EMAIL_REGEX,
  FORM_LABELS,
  FORM_PLACEHOLDERS,
  FORM_VALIDATION_MESSAGES,
  SERVICE_OPTIONS,
  TOAST_MESSAGES,
} from '@/constants/contact';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '../ui/button';
import Grid from './Grid';
import { IContactForm } from '@/types/contact';
import { Input } from '../ui/input';
import Spinner from '../Spinner';
import { Textarea } from '../ui/textarea';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

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
 */
export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<IContactForm>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const serviceValue = watch('service');

  const onSubmit = async (data: IContactForm) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
          {...register('name', {
            required: FORM_VALIDATION_MESSAGES.nameRequired,
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
          {...register('email', {
            required: FORM_VALIDATION_MESSAGES.emailRequired,
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
          {...register('phone')}
        />
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
              <SelectLabel>{FORM_PLACEHOLDERS.service}</SelectLabel>
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
          {...register('message', {
            required: FORM_VALIDATION_MESSAGES.messageRequired,
          })}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <span className="text-red-600 text-sm" role="alert">
            {errors.message.message}
          </span>
        )}
      </div>

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
