import React from 'react';
import Head from 'next/head';
import InstructorLayout from '../components/InstructorLayout';

export default function Survey1() {
  return (
    <InstructorLayout CurrentPage="Survey 1">
      <Head>
        <title>Survey 1</title>
      </Head>
      <div>Welcome to the survey 1 page!</div>
    </InstructorLayout>
  );
}