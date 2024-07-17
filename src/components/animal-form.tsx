'use client';
import React from 'react'
import { z } from "zod";
import AutoForm from '@/auto-form';
import { AutoFormSubmit } from '@/auto-form';
import { Button } from './ui/button';


export default function Form() {

  const animalSchema = z.object({
    nombre: z.string({ required_error: "Nombre es requerido" }).min(1, { message: "El nombre debe tener al menos un caracter" }),
    numeroPatas: z.coerce.number({ invalid_type_error: "Debe ser un número" }).gt(0, { message: "Al menos debe el animal debe tener 0 patas" }),
    alturaMaxima: z.coerce.number({ invalid_type_error: "Debe ser un número" }).gt(0, { message: "La altura debe ser mayor que 0" })
  })

  const saveData = (data: z.infer<typeof animalSchema>) => {
    console.log(data);
  }

  return (
    <AutoForm formSchema={animalSchema} onSubmit={saveData}
    >
      <AutoFormSubmit />
    </AutoForm>
  )
}