import React from 'react';
import Head from 'next/head';
import StudentLayout from '../components/StudentLayout';

export default function StudentSurvey1() {
  return (
    <StudentLayout CurrentPage="Survey 1">
      <Head>
        <title>Survey 1</title>
      </Head>
      <div>Welcome to the survey 1 page!</div>
    </StudentLayout>
  );
}