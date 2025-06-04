import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


// import CascadeImage from '../../../public/images/Cascade.jpg';
import CascadeStyles from '../../styles/Products.module.css';

export default function Cascades() {
  return (
    <main>

      <nav className={CascadeStyles.cascade}>
        <h1>محصولات شرکت امیرسام</h1> 
        <p>  کسکید های دستگاه رنگ پودری </p> 

        <Link href="/productins" className='bg-blue-100 p-3 flex justify-center items-center'>
          <Image 
            src={'/Cascade.jpg'}
            alt='amirsam-companys Cascade Image'
            width={500}
            height={500}
            quality={100}
            className='rounded-xl'
          />
        </Link>
            
      </nav>
    </main>
  )
}

