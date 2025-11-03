import ContactPage from '@/components/Contact/ContactPage';
import { contactMetadata } from './metadata';

export const metadata = contactMetadata;

/**
 * Contact 페이지
 *
 * @description
 * 문의 폼과 연락처 정보를 표시하는 페이지
 *
 * @features
 * - 문의 폼 (이름, 이메일, 전화번호, 서비스, 메시지)
 * - 연락처 정보 (이메일, 전화번호, 위치)
 * - 이메일 전송 기능 (nodemailer)
 */
export default function ContactPageRoute() {
  return <ContactPage />;
}
