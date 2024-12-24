import { icons } from '@/constants/icons';
import Image from 'next/image';
import React from 'react';

type IconKeys = keyof typeof icons;

interface ActionsProps {
  icon: IconKeys;
  openModal: () => void;
}

export const ActionsTable: React.FC<ActionsProps> = ({ icon, openModal }) => {
  return (
    <Image
      src={icon}
      alt={icon}
      width={20}
      height={20}
      onClick={() => openModal()}
      className="cursor-pointer"
    />
  );
};
