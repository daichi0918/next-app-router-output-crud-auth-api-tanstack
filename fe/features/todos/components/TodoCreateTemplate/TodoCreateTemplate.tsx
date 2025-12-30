'use client';
import { Controller } from 'react-hook-form';

import { InputFormSection, TextAreaSection, CommonButton } from '@/shared/components/ui';

import { useTodoCreateTemplate } from './useTodoCreateTemplate';

export const TodoCreateTemplate = () => {
  const { control, errors, handleAddSubmit } = useTodoCreateTemplate();

  return (
    <form className="w-[80%] my-10 mx-auto" onSubmit={handleAddSubmit}>
      <div className="mt-10">
        <Controller
          name="title"
          render={({ field }) => (
            <InputFormSection
              placeholder={'Title'}
              errorMessage={errors.title?.message}
              {...field}
            />
          )}
          control={control}
        />
      </div>
      <div className="mt-10">
        <Controller
          name="content"
          render={({ field }) => (
            <TextAreaSection
              placeholder={'Content'}
              errorMessage={errors.content?.message}
              {...field}
            />
          )}
          control={control}
        />
      </div>
      <div className="mt-10">
        <CommonButton type="submit">{'Create Todo'}</CommonButton>
      </div>
    </form>
  );
};
