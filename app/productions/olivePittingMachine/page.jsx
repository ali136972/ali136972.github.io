import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import olivePittingMachineStyles from '../../styles/Products.module.css';

import OlivePittingMachineImage from '../../components/Olive pitting Machine.png';

export default function OlivePittingMachine() {
  return (
    <main>
      <h2>محصولات شرکت امیرسام</h2> 
      <p> دستگاه های هسته گیر و اسلایس زن زیتون </p> 

      <nav className={olivePittingMachineStyles.pitting}>
        <Link href="/Products">
          <Image 
            src={OlivePittingMachineImage}
            alt='amirsam-companys OlivePittingMachine Image'
            width={500}
            height={500}
            quality={100}
            placeholder='blur'
          />
        </Link>
                    
      </nav>

    </main>
  )
}

