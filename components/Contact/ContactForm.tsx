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
import { ContactFormType } from '@/interface';
import Grid from './Grid';
import { Input } from '../ui/input';
import Spinner from '../Spinner';
import { Textarea } from '../ui/textarea';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const initialContactFormState: ContactFormType = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export const ContactForm = () => {
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
  const [formData, setFormData] = useState<ContactFormType>(
    initialContactFormState
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormType>({
    defaultValues: formData,
  });

  const onSubmit = async (data: ContactFormType) => {
    if (data.name === '' || data.email === '' || data.message === '') {
      toast.error('필수 항목들을 모두 입력해주세요.');
      return;
    }

    setDisableSubmit(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('이메일 전송에 성공했습니다.');
        setFormData(initialContactFormState);
        reset(initialContactFormState);
      } else {
        throw new Error('이메일 전송에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('이메일 전송에 실패했습니다.');
    } finally {
      setDisableSubmit(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof ContactFormType
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
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
          성함 <span className="text-error">*</span>
        </label>
        <Input
          id="name"
          type="text"
          placeholder="홍길동"
          className="w-full"
          {...register('name', { required: true })}
          value={formData.name}
          onChange={(e) => handleInputChange(e, 'name')}
        />
        {errors.name && (
          <span className="text-red-600 text-sm">필수 항목입니다.</span>
        )}
      </div>

      {/* Email Field */}
      <div className="relative z-20 w-full">
        <label
          className="pl-1 mb-4 inline-block text-sm font-medium text-neutral-light"
          htmlFor="email"
        >
          이메일 <span className="text-error">*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder="email@email.com"
          className="w-full"
          {...register('email', {
            required: '이메일은 필수 항목입니다.',
            pattern: {
              value: /^\S+@\S+$/i,
              message: '올바른 이메일 주소를 입력하세요.',
            },
          })}
          value={formData.email}
          onChange={(e) => handleInputChange(e, 'email')}
        />
        {errors.email && errors.email.type === 'required' && (
          <div className="text-red-600 text-sm">필수 항목입니다.</div>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <div className="text-red-600 text-sm">
            올바른 이메일 주소를 입력하세요.
          </div>
        )}
      </div>

      {/* Phone Field */}
      <div className="relative z-20 w-full">
        <label
          className="pl-1 mb-4 inline-block text-sm font-medium text-neutral-light"
          htmlFor="phone"
        >
          전화번호
        </label>
        <Input
          id="phone"
          type="text"
          placeholder="010-1111-2222"
          {...register('phone')}
          value={formData.phone}
          className="w-full"
          onChange={(e) => handleInputChange(e, 'phone')}
        />
      </div>

      {/* Service Field */}
      <div className="relative z-20 w-full">
        <label
          className="pl-1 mb-4 inline-block text-sm font-medium text-neutral-light"
          htmlFor="service"
        >
          서비스
        </label>
        <Select value={formData.service} onValueChange={handleServiceChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="서비스를 선택해주세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>서비스를 선택해주세요</SelectLabel>
              <SelectItem value="Web Development">웹 개발</SelectItem>
              <SelectItem value="UI/UX Design">UI/UX 디자인</SelectItem>
              <SelectItem value="etc">기타</SelectItem>
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
          내용 <span className="text-error">*</span>
        </label>
        <Textarea
          id="message"
          className="h-[200px]"
          placeholder="내용을 입력해주세요."
          {...register('message', { required: true })}
          value={formData.message}
          onChange={(e) => handleInputChange(e, 'message')}
        />
        {errors.message && (
          <span className="text-red-600 text-sm">필수 항목입니다.</span>
        )}
      </div>

      {/* Submit Button */}
      <Button
        size="md"
        className="w-full hover:bg-accent-hover"
        type="submit"
        disabled={isSubmitting || disableSubmit}
      >
        {!disableSubmit ? '보내기' : <Spinner />}
      </Button>
    </form>
  );
};
