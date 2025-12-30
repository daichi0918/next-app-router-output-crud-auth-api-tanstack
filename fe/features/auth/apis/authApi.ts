'use server';

import { StatusCodes } from 'http-status-codes';

import { signOut } from '@/features/auth/config/auth';

import { AuthType, SignInRequest, SignUpRequest } from '@/features/auth/types';
import { ResponseType, IErrorResponse } from '@/shared/types/ApiResponse';
import { postFetch } from '../../../shared/apis/fetch';

export const signin = async (req: SignInRequest) => {
  try {
    const response = await postFetch({
      path: 'auth/signin',
      body: req,
    });

    const data = await response.json();
    const status = response.status;

    // treat 2xx as success
    // if (status === StatusCodes.OK) {
    if (response.ok) {
      const res: ResponseType<AuthType> = {
        status: status,
        data: data,
      };
      return res;
    }

    const res: ResponseType = {
      status: status,
      errorCode: data.code,
      errorMessage: data.message,
    };
    return res;
  } catch (error) {
    const res: ResponseType = {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      errorCode: `${StatusCodes.INTERNAL_SERVER_ERROR}`,
      errorMessage: `Internet Server Error: ${error}`,
    };
    const fetchError = error as IErrorResponse;
    res.errorCode = fetchError?.status?.toString();
    res.errorMessage = fetchError?.statusText;
    return res;
  }
};

export const register = async (req: SignUpRequest) => {
  try {
    const response = await postFetch({
      path: 'auth/signup',
      body: req,
    });

    const data = await response.json();
    const status = response.status;
    if (status === StatusCodes.CREATED) {
      const res: ResponseType<AuthType> = {
        status: status,
        data: data,
      };
      return res;
    }

    const res: ResponseType = {
      status: status,
      errorCode: data.code,
      errorMessage: data.message,
    };
    return res;
  } catch (error) {
    const res: ResponseType = {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      errorCode: `${StatusCodes.INTERNAL_SERVER_ERROR}`,
      errorMessage: `Internet Server Error: ${error}`,
    };
    const fetchError = error as IErrorResponse;
    res.errorCode = fetchError?.status?.toString();
    res.errorMessage = fetchError?.statusText;
    return res;
  }
};

export const logout = async () => {
  await signOut({ redirect: false });
};
