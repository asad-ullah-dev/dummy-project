'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  phone: yup.string().required('Phone is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
}).required();

type FormData = yup.InferType<typeof schema>;

type UserFormProps = {
  initialData?: FormData;
};

export default function UserForm({ initialData }: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { name: '', email: '', phone: '', password: '' },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const onSubmit = (data: FormData) => {
    console.log('Edited/Submitted Data:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-7xl mx-auto px-4 py-6 rounded shadow space-y-4"
    >
      <div>
        <label htmlFor='name' className="block font-semibold">Name</label>
        <input
          {...register('name')}
          className="mt-1 w-full p-2 border rounded focus:outline-none"
          placeholder="Enter your name"
          id='name'
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor='email' className="block font-semibold">Email</label>
        <input
          {...register('email')}
          className="mt-1 w-full p-2 border rounded focus:outline-none"
          placeholder="Enter your email"
          id='email'
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor='password' className="block font-semibold">Password</label>
        <input
          {...register('password')}
          className="mt-1 w-full p-2 border rounded focus:outline-none"
          placeholder="Enter your password"
          id='password'
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor='phone' className="block font-semibold">Phone</label>
        <input
          {...register('phone')}
          className="mt-1 w-full p-2 border rounded focus:outline-none"
          placeholder="Enter your phone"
          id='phone'
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {initialData ? 'Update' : 'Submit'}
      </button>
    </form>
  );
}
