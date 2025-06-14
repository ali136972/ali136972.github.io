import React, { Suspense } from 'react';
import UsersList from './UsersList';
import Loading from '../content/loading';

export default function Users({searchParams}) {
  return (
    <main>
      <h1>Users</h1> 
      <h2>کاربران شرکت امیرسام</h2> 
      <p> کاربران شرکت امیرسام ، عموم مردم از کشور ایران و کشورهای دیگر که در حوزه های مختلفی از جمله کشاورزی، باغداری، جوشکاری و سیم پیچی صنعتی و پزشکی و ... می باشند</p> 
      <Suspense fallback={<Loading />}>
        <UsersList  searchParams={searchParams} />
      </Suspense>
    </main>

  )
}

