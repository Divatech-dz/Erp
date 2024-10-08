import { FooterProps } from '@/types';
import Image from 'next/image';
import React from 'react';

export const Footer = ({ type = 'desktop' }: FooterProps) => {
  const fName = 'Mohamed Amine';
  return (
    <footer className="footer">
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">{fName[0]}</p>
      </div>
      <div
        className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}
      >
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {fName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          <span className="text-success-700">Role</span> Commercial
        </p>
      </div>
      <div className="footer_image">
        <Image src="/icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  );
};
