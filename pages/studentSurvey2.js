import React from 'react';
import Head from 'next/head';
import StudentLayout from '../components/StudentLayout';

export default function StudentSurvey2() {
  return (
    <StudentLayout CurrentPage="Survey 2">
      <Head>
        <title>Survey 2</title>
      </Head>
      <div>Welcome to the survey 2 page!</div>
    </StudentLayout>
  );
}