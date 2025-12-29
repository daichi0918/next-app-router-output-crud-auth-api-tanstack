import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
  name: z.string().min(1, '1文字以上で入力してください'),
  email: z.string().email('メールアドレスの形式で入力してください'),
  password: z.string().min(8, '8文字以上で入力してください'),
  password_confirmation: z.string().min(8, '8文字以上で入力してください'),
});

export const useSignUpTemplate = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.input<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  });

  return {
    control,
    errors,
    handleSubmit,
  };
};
