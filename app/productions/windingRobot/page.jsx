import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


// import windingRobotImage from '../../../public/Cascade.jpeg';
import windingRobotStyles from '../../styles/Products.module.css';


export default function Productions() {
  return (
    <main>
      <h1>محصولات شرکت امیرسام</h1> 
      <p>  ربات صنعتی تمام اتوماتیک سیم پیچی</p> 


      <nav className={windingRobotStyles.windingRobot}>
      
        <Link href="/productins" className='bg-blue-100 p-3 flex justify-center items-center'>
          <Image 
            src={'/windingRobotImage.jpg'}
            alt='amirsam-companys windingRobot Image'
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

