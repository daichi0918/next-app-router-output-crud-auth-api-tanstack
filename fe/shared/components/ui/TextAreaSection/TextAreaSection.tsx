'use client';
import { FC, ComponentProps } from 'react';
import { TextArea } from '@/shared/components/ui';

type TextAreaProps = ComponentProps<'textarea'> & {
  errorMessage?: string;
};

export const TextAreaSection: FC<TextAreaProps> = (props) => (
  <>
    <TextArea placeholder={'Content'} {...props} />
    {props?.errorMessage && (
      <p className="text-red-500 text-[0.8rem] font-bold mt-[0.2rem]">
        {props.errorMessage}
      </p>
    )}
  </>
);
