'use client';
import { FC, ComponentProps } from 'react';

type InputFormProps = ComponentProps<'input'>;

export const InputForm: FC<InputFormProps> = ({
  disabled = false,
  type = 'text',
  value,
  placeholder,
  onChange,
  onKeyDown,
}) => (
  <input
    disabled={disabled}
    className="h-12.5 w-full rounded-[5px] border-0 bg-black/20 p-4 text-[20px] text-white placeholder:text-[#c0c0c0] font-['Times_New_Roman',Times,serif] box-border"
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
  />
);
