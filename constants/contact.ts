/**
 * Contact 페이지 관련 상수 정의
 */

import { IContactInfo } from '@/types/contact';

// 연락처 정보
export const CONTACT_INFO: IContactInfo = {
  email: 'whitemousedev@gmail.com',
  phone: '(+82) 010 8595 9869',
  location: 'Seoul, Korea',
};

// 서비스 옵션
export const SERVICE_OPTIONS = [
  { value: 'Web Development', label: '웹 개발' },
  { value: 'UI/UX Design', label: 'UI/UX 디자인' },
  { value: 'Mobile Development', label: '모바일 개발' },
  { value: 'Consulting', label: '컨설팅' },
  { value: 'etc', label: '기타' },
] as const;

// 폼 라벨
export const FORM_LABELS = {
  name: '성함',
  email: '이메일',
  phone: '전화번호',
  service: '서비스',
  message: '내용',
  submit: '보내기',
  submitting: '전송 중...',
  consent: '개인정보 수집 및 이용에 동의합니다.',
  consentLink: '자세히 보기',
} as const;

// 폼 플레이스홀더
export const FORM_PLACEHOLDERS = {
  name: '홍길동',
  email: 'email@email.com',
  phone: '010-1111-2222',
  service: '서비스를 선택해주세요',
  message: '내용을 입력해주세요.',
} as const;

// 입력 길이 제한 (클라이언트·서버 공통 기준)
export const FIELD_LIMITS = {
  name: 50,
  email: 100,
  phone: 20,
  service: 50,
  messageMin: 5,
  messageMax: 2000,
} as const;

// 전화번호 형식: 숫자, +, -, (), 공백만 허용 (7~20자)
export const PHONE_REGEX = /^[0-9+\-()\s]{7,20}$/;

/**
 * 한국 휴대폰 번호일 때만 하이픈을 붙여 정리한다.
 *
 * @description
 * 01로 시작하는 숫자 10~11자리(휴대폰)만 대상으로 하며,
 * 국제번호(+..)나 지역번호 등 그 외 형식은 원본을 그대로 반환한다.
 * blur 시점에 한 번만 호출하는 용도로, 입력 중 커서 이동은 발생하지 않는다.
 *
 * @example
 * formatKoreanMobile('01085959869') // '010-8595-9869'
 * formatKoreanMobile('+1 415 555 0100') // '+1 415 555 0100' (그대로)
 */
export const formatKoreanMobile = (value: string): string => {
  const trimmed = value.trim();

  // +로 시작하면 국제번호로 간주하고 손대지 않는다.
  if (trimmed.startsWith('+')) return trimmed;

  const digits = trimmed.replace(/\D/g, '');

  // 01로 시작하는 휴대폰 번호만 포맷
  if (!digits.startsWith('01')) return trimmed;

  if (digits.length === 11) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  return trimmed;
};

// 폼 검증 메시지
export const FORM_VALIDATION_MESSAGES = {
  nameRequired: '이름은 필수 항목입니다.',
  nameTooLong: `이름은 ${FIELD_LIMITS.name}자 이내로 입력해주세요.`,
  emailRequired: '이메일은 필수 항목입니다.',
  emailInvalid: '올바른 이메일 주소를 입력하세요.',
  emailTooLong: `이메일은 ${FIELD_LIMITS.email}자 이내로 입력해주세요.`,
  phoneInvalid: '올바른 전화번호 형식이 아닙니다. (숫자, +, -, 공백만 가능)',
  messageRequired: '메시지는 필수 항목입니다.',
  messageTooShort: `메시지는 최소 ${FIELD_LIMITS.messageMin}자 이상 입력해주세요.`,
  messageTooLong: `메시지는 ${FIELD_LIMITS.messageMax}자 이내로 입력해주세요.`,
  allFieldsRequired: '필수 항목들을 모두 입력해주세요.',
  consentRequired: '개인정보 수집 및 이용에 동의해주세요.',
} as const;

// 토스트 메시지
export const TOAST_MESSAGES = {
  success: '이메일 전송에 성공했습니다.',
  error: '이메일 전송에 실패했습니다.',
  networkError: '네트워크 오류가 발생했습니다.',
  captchaRequired: '자동 입력 방지 확인을 완료해주세요.',
} as const;

// 페이지 텍스트
export const CONTACT_PAGE_TEXT = {
  title: "Let's work together",
  description:
    '저와 함께 멋진 프로젝트를 시작하고 싶으시거나, 더 궁금한 점이 있으시다면 언제든 편하게 연락주세요. 새로운 인연과 멋진 기회를 기다리고 있습니다!',
} as const;

// 이메일 정규식
export const EMAIL_REGEX = /^\S+@\S+\.\S+$/i;

