/**
 * Contact 관련 타입 정의
 */

export interface IContactForm {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface IContactInfo {
  email: string;
  phone: string;
  location: string;
}

