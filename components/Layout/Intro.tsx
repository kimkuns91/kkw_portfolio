'use client';

import React, { useEffect, useState } from 'react';

import { EncryptedText } from '@/components/ui/encrypted-text';

export function Intro() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 3000);
  }, [isVisible]);


  return (
    <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-[#18181B] z-[9999]">
      <p className="mx-auto max-w-2xl py-10 text-left text-2xl">
        <EncryptedText
          text="Welcome to the WhiteMouse.Dev Portfolio!"
          encryptedClassName="text-neutral-500"
          revealedClassName="text-white"
          revealDelayMs={50}
        />
      </p>
    </div>
  );
}
