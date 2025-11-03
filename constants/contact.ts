/**
 * Contact 페이지 관련 상수 정의
 */

import { IContactInfo } from '@/types/contact';

// 연락처 정보
export const CONTACT_INFO: IContactInfo = {
  email: 'kimkuns98@gmail.com',
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
} as const;

// 폼 플레이스홀더
export const FORM_PLACEHOLDERS = {
  name: '홍길동',
  email: 'email@email.com',
  phone: '010-1111-2222',
  service: '서비스를 선택해주세요',
  message: '내용을 입력해주세요.',
} as const;

// 폼 검증 메시지
export const FORM_VALIDATION_MESSAGES = {
  nameRequired: '이름은 필수 항목입니다.',
  emailRequired: '이메일은 필수 항목입니다.',
  emailInvalid: '올바른 이메일 주소를 입력하세요.',
  messageRequired: '메시지는 필수 항목입니다.',
  allFieldsRequired: '필수 항목들을 모두 입력해주세요.',
} as const;

// 토스트 메시지
export const TOAST_MESSAGES = {
  success: '이메일 전송에 성공했습니다.',
  error: '이메일 전송에 실패했습니다.',
  networkError: '네트워크 오류가 발생했습니다.',
} as const;

// 페이지 텍스트
export const CONTACT_PAGE_TEXT = {
  title: "Let's work together",
  description:
    '저와 함께 멋진 프로젝트를 시작하고 싶으시거나, 더 궁금한 점이 있으시다면 언제든 편하게 연락주세요. 새로운 인연과 멋진 기회를 기다리고 있습니다!',
} as const;

// 이메일 정규식
export const EMAIL_REGEX = /^\S+@\S+\.\S+$/i;

