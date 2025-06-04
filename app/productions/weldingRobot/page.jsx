import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


// import weldingRobotImage from '../../../public/weldingRobot.jpg';
import weldingRobotStyles from '../../styles/Products.module.css';

export default function WeldingRobot() {
  return (
    <main>
      <h1>محصولات شرکت امیرسام</h1> 
      <p>  ربات صنعتی تمام اتوماتیک جوشکاری </p> 

      
      <nav className={weldingRobotStyles.weldingRobot}>
      
        <Link href="/productins" className='bg-blue-100 p-3 flex justify-center items-center'>
          <Image 
            src={'/weldingRobot.jpg'}
            alt='amirsam-companys weldingRobot Image'
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

