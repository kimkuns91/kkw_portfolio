/**
 * Contact 관련 타입 정의
 */

export interface IContactForm {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  /** 개인정보 수집 및 이용 동의 여부 (필수) */
  consent: boolean;
}

/** 문의 폼이 서버로 전송하는 요청 본문 */
export interface IContactRequest extends IContactForm {
  /** Cloudflare Turnstile 토큰. 사이트 키가 없으면 비어 있다. */
  turnstileToken?: string;
}

export interface IContactInfo {
  email: string;
  phone: string;
  location: string;
}

