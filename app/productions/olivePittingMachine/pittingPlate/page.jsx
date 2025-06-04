import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import pittingPlateImage from '../../../../public/pittingPlateImage.jpeg';
import pittingplateStyles from '../../../styles/Pittingplate.module.css'

export default function Pittingplate() {
  return (
    <main className='pittingplateStyles.main'>
        <h1>محصولات شرکت امیرسام</h1> 
        <h2>pittingplate</h2>
        <p>  صفحه پیتر دستگاه هسته گیر زیتون </p> 
      
        <nav className={pittingplateStyles.plate}>
          <Link href="/productions/olivePittingMachine/pittingPlate">
            <Image 
                    src={'/pittingPlateImage.jpg'}
                    alt='amirsam-companys olivePittingmachine pittingPlate Image'
                    width={500}
                    height={500}
                    quality={100}
            />
          </Link>
                   
        </nav>
    </main>
  )
}
