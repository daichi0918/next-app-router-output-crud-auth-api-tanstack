'use client';

import { useMutation } from '@tanstack/react-query';
import { signin } from '../apis/authApi';
import { LoginRequest } from '../types';

export const useSignInMutation = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (data: LoginRequest) => signin(data),
  });
};
