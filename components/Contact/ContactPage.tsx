'use client';

import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import MotionScrollSection from '../MotionSection';

/**
 * ContactPage 컴포넌트
 *
 * @description
 * 연락처 정보와 문의 폼을 표시하는 메인 Contact 페이지
 *
 * @sections
 * - ContactInfo: 연락처 정보 및 지도
 * - ContactForm: 문의 폼
 */
const ContactPage: React.FC = () => {
  return (
    <MotionScrollSection>
      <div className="mx-auto grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </MotionScrollSection>
  );
};

export default ContactPage;