'use client';
import { FC, ComponentProps } from 'react';
import { InputForm } from '@/shared/components/ui/InputForm';

type InputFormSectionProps = ComponentProps<'input'> & {
  errorMessage?: string;
};

export const InputFormSection: FC<InputFormSectionProps> = (props) => (
  <>
    <InputForm placeholder={'Title'} {...props} />
    {props?.errorMessage && (
      <p className="text-red-500 text-[0.8rem] font-bold mt-[0.2rem]">
        {props.errorMessage}
      </p>
    )}
  </>
);
