
import Image from 'next/image';
import React from 'react';

const Footer = ({  type = 'desktop' }: FooterProps) => {


  return (
    <footer className="footer">
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">N</p>
      </div>
      <div
        className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}
      >
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          Name
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          <span className='text-success-700'>Role</span> name
        </p>
      </div>

      <div className="footer_image" >
        <Image src="icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  );
};

export default Footer;
