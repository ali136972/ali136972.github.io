'use client'

import React, { ReactNode } from 'react'
import {useState} from 'react'

export default function Counter({ children }:{ children?:ReactNode }) {
    const [count, setCount]= useState(0);
  return (
    <>
        <button
           className='bg-black text-white font-bold py-2 px-4 my-4' 
           onClick={()=>setCount(count + 1)}
        >
            Increment
        </button>
        <p className='text-gray-700 mt-4'>{count}</p>
        {children}
    </>
  )
}