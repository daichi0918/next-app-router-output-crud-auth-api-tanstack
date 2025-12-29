'use client';
import { FC, ComponentProps, ReactNode } from 'react';

type CommonButtonProps = ComponentProps<'button'> & {
  children: ReactNode;
};

export const CommonButton: FC<CommonButtonProps> = ({ type, children, onClick }) => (
  <button
    className="block w-full bg-[#ff9900] border-0 cursor-pointer outline-none p-5 text-2xl font-bold text-white appearance-none rounded-[10px] transition duration-300 hover:bg-[#d87e00]"
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);
