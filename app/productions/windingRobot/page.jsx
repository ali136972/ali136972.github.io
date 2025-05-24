import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


import windingRobotImage from '../../components/Cascade.jpg';
import windingRobotStyles from '../../styles/Products.module.css';


export default function Productions() {
  return (
    <main>
      <h1>محصولات شرکت امیرسام</h1> 
      <p>  ربات صنعتی تمام اتوماتیک سیم پیچی</p> 


      <nav className={windingRobotStyles.windingRobot}>
      
        <Link href="/productins">
          <Image 
            src={windingRobotImage}
            alt='amirsam-companys windingRobot Image'
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

