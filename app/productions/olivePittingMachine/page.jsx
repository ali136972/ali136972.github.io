import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import olivePittingMachineStyles from '../../styles/Products.module.css';

// import OlivePittingMachineImage from '../../../public/Olive pitting Machine.jpg';

export default function OlivePittingMachine() {
  return (
    <main>
      <h2>محصولات شرکت امیرسام</h2> 
      <p> دستگاه های هسته گیر و اسلایس زن زیتون </p> 

      <nav className={olivePittingMachineStyles.pitting}>
        <Link href="/Products" className='bg-blue-100 p-3 flex justify-center items-center'>
          <Image 
            src={'/Olive pitting Machine.jpg'}
            alt='amirsam-companys OlivePittingMachine Image'
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

