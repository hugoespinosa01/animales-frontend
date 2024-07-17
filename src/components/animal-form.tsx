"use client";
import React from 'react'
import { z } from "zod";
import AutoForm, { AutoFormSubmit } from '@/auto-form';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { usePostAnimals } from '@/services';

export default function Form() {

  const animalSchema = z.object({
    nombre: z.string({ required_error: "Nombre es requerido" }).min(1, { message: "El nombre debe tener al menos un caracter" }),
    numero_patas: z.coerce.number({ invalid_type_error: "Debe ser un número" }).gt(0, { message: "Al menos debe el animal debe tener 0 patas" }),
    altura_maxima: z.coerce.number({ invalid_type_error: "Debe ser un número" }).gt(0, { message: "La altura debe ser mayor que 0" })
  })

  const saveData = (data: z.infer<typeof animalSchema>) => {
    usePostAnimals(data).then((response:any)=>{
      console.log(response);
    })
  }

  return (

    <Card className="rounded-lg border-none mt-6">
      <CardHeader className='gap-y-2 lg:flex-row lg:items-center lg:justify-between'>
        <CardTitle className='text-xl line-clamp-1'>
          Formulario de animales
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <AutoForm formSchema={animalSchema} onSubmit={saveData}>
          <AutoFormSubmit>Confirmar</AutoFormSubmit>
        </AutoForm>
      </CardContent>
    </Card>



  )
}