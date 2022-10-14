import React from 'react';
import Head from 'next/head';
import InstructorLayout from '../components/InstructorLayout';

export default function InstructorSurvey2() {
  return (
    <InstructorLayout CurrentPage="Survey 2">
      <Head>
        <title>Survey 2</title>
      </Head>
      <div>Welcome to the survey 2 page!</div>
    </InstructorLayout>
  );
}