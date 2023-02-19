import { yupResolver } from '@hookform/resolvers/yup';
import api from '@/Api/backend_sneakers';
import React from 'react';
import { useForm } from 'react-hook-form';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import * as yup from "yup";
import swal from 'sweetalert';

interface FormData {
  email: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Ingresa un Email válido").required("Debes agregar un email"),
});

const NewsLetter = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      let newMail = await api.post(`/mail/news`, data);
      swal({
        title: '¡Suscripción exitosa!',
        text: 'Gracias por suscribirte, tu email ha sido agregado a nuestra lista.',
        icon: 'success',
        buttons: ['Aceptar']
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-grow">
      <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
        <input
          id="email"
          type="text"
          placeholder="Suscríbete..."
          {...register("email")}
          className="p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4 w-36 text-black"
        />

        <button type='submit'>
          <EnvelopeIcon className="h-12 p-4 text-black" />
        </button>
      </div>
      {errors?.email && (
          <p className="text-red-500 text-xs italic">{errors.email.message}</p>
        )}
    </form>
  );
}

export default NewsLetter;
