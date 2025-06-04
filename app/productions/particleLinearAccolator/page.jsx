//%%%%%%%%%%    نحوه ی استفاده از تصاویر در NEXT JS %%%%%%%%%%%%%%%%
//%%%%%%%%%%    برای استفاده از تصاویر در NEXT JS, باید تصاویر را در داخل پوشه ی components, و یا پوشه ی public, قرار دهیم و با فراخوانی کردن آن ها در داخل فایل های مختلف با  از import,  آنها را در فایل های مختلف استفاده کنیم %%%%%%%%%%%%%%%%
import Image from 'next/image';
import Link from 'next/link';

import productsStyles from '../../styles/Products.module.css';

// import LinearAccelatorImage from '../../../public/Accelators.png';

export default function ParticleLinearAccolator() {
  return (
    <main>
      <h1>محصولات شرکت امیرسام</h1> 
      <p>  دستگاه شتابدهنده ی خطی ذرات </p> 
    
      
      <nav className={productsStyles.products}>
        <Link href="/Products" className='bg-blue-100 p-3 flex justify-center items-center'>
          <Image 
            src={'/Accelators.jpg'}
            alt='amirsam-companys LinearAccelator Image'
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

