'use client';
import { FC, ComponentProps } from 'react';

type TextAreaProps = ComponentProps<'textarea'>;

export const TextArea: FC<TextAreaProps> = ({ disabled = false, value, placeholder, onChange }) => (
  <textarea
    disabled={disabled}
    className="text-white border-0 bg-[rgba(0,0,0,0.2)] w-full h-12.5 p-2.5 box-border text-[20px] font-['Times New Roman',Times,serif] rounded-[5px] resize-none min-h-25 placeholder:text-[#c0c0c0]"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);
