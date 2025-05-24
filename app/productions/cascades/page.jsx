import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


import CascadeImage from '../../components/Cascade.jpg';
import CascadeStyles from '../../styles/Products.module.css';

export default function Cascades() {
  return (
    <main>

      <nav className={CascadeStyles.cascade}>
        <h>محصولات شرکت امیرسام</h> 
        <p>  کسکید های دستگاه رنگ پودری </p> 

        <Link href="/productins/cascades">
          <Image 
            src={CascadeImage}
            alt='amirsam-companys Cascade Image'
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

