'use client';

import { useEffect, useState } from 'react';

import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import MotionScrollSection from '../MotionSection';

const ContactPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

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