import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


import weldingRobotImage from '../../components/Cascade.jpg';
import weldingRobotStyles from '../../styles/Products.module.css';

export default function WeldingRobot() {
  return (
    <main>
      <h1>محصولات شرکت امیرسام</h1> 
      <p>  ربات صنعتی تمام اتوماتیک جوشکاری </p> 

      
      <nav className={weldingRobotStyles.weldingRobot}>
      
        <Link href="/productins">
          <Image 
            src={weldingRobotImage}
            alt='amirsam-companys weldingRobot Image'
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

