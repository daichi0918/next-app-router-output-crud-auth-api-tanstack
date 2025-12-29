'use client';
import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { InputFormSection, CommonButton } from '@/shared/components/ui';

import { useSignUpTemplate } from './useSignUpTemplate';

export const SignUpTemplate: FC = () => {
  const { control, errors } = useSignUpTemplate();

  return (
    <div className="w-[90%] mx-auto min-[960px]:w-1/2">
      <h1 className="text-center font-['Times New Roman',Times,serif] text-white text-[48px]">
        SignUp
      </h1>
      <form className="w-[80%] mx-auto my-10">
        <div className="mt-10">
          <Controller
            name="name"
            render={({ field }) => (
              <InputFormSection
                type="text"
                placeholder="user name"
                errorMessage={errors.name?.message}
                {...field}
              />
            )}
            control={control}
          />
        </div>

        <div className="mt-10">
          <Controller
            name="email"
            render={({ field }) => (
              <InputFormSection
                type="email"
                placeholder="email"
                errorMessage={errors.email?.message}
                {...field}
              />
            )}
            control={control}
          />
        </div>
        <div className="mt-10">
          <Controller
            name="password"
            render={({ field }) => (
              <InputFormSection
                type="password"
                placeholder="password"
                errorMessage={errors.password?.message}
                {...field}
              />
            )}
            control={control}
          />
        </div>
        <div className="mt-10">
          <Controller
            name="password_confirmation"
            render={({ field }) => (
              <InputFormSection
                type="password"
                placeholder="confirm password"
                errorMessage={errors.password_confirmation?.message}
                {...field}
              />
            )}
            control={control}
          />
        </div>
        <div className="mt-10">
          <CommonButton type="submit">{'Sign Up'}</CommonButton>
        </div>
      </form>
    </div>
  );
};
