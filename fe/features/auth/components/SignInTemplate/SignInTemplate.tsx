'use client';

import { FC } from 'react';
import { Controller } from 'react-hook-form';
import Link from 'next/link';

import { useSignInTemplate } from './useSignInTemplate';
import { CommonButton, InputFormSection } from '@/shared/components/ui';
import { NAVIGATION_LIST } from '@/shared/constants/navigation';

export const SignInTemplate: FC = () => {
  const { control, errors, handleSignInSubmit } = useSignInTemplate();
  return (
    <div className="w-[90%] mx-auto min-[960px]:w-1/2">
      <h1 className="text-center font-title text-white text-[48px]">SignIn</h1>
      <form className="w-[80%] mx-auto my-10" onSubmit={handleSignInSubmit}>
        <div className="mt-10">
          <Controller
            control={control}
            name={'email'}
            render={({ field }) => (
              <InputFormSection
                type="email"
                placeholder="email"
                errorMessage={errors.email?.message}
                {...field}
              />
            )}
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
          <CommonButton type="submit">{'SignIn'}</CommonButton>
        </div>
        <div className="mt-5">
          <Link
            className="no-underline text-white font-bold text-[18px] hover:text-[#d87e00]"
            href={NAVIGATION_LIST.SIGNUP}
          >
            &lt;&lt; to signup page
          </Link>
        </div>
      </form>
    </div>
  );
};
