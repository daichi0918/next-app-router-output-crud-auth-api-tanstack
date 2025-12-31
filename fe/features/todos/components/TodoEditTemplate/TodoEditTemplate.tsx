'use client';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { useTodoEditTemplate } from './useTodoEditTemplate';
import { InputFormSection, TextAreaSection, CommonButton } from '@/shared/components/ui';
import { TodoType } from '@/features/todos/types';

type TodoEditTemplateProps = {
  todo: TodoType;
};

export const TodoEditTemplate: FC<TodoEditTemplateProps> = ({ todo }) => {
  const { control, errors, handleEditSubmit } = useTodoEditTemplate({
    todo,
  });

  return (
    <>
      {!!todo && (
        <form className="w-4/5 mt-10 mx-auto" onSubmit={handleEditSubmit}>
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
            <CommonButton type="submit">{'Edit Todo'}</CommonButton>
          </div>
        </form>
      )}
    </>
  );
};
