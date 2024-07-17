'use client';
import Form from '@/components/animal-form'
import { ContentLayout } from '@/components/content-layout'
import React from 'react'


export default function Animals () {
  return (
    <ContentLayout title="Animales">
      <Form/>
    </ContentLayout>
  )
}