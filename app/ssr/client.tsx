'use client'

import React from 'react'

export default function Client({repo}:any) {
  return (
    <section>
        <h1 className='text-2xl font-semibold'>{ repo.name }</h1>
        <p className='text-gray-700 mt-4'>{ repo.stargazers_count }</p>
    </section>
  );
}
