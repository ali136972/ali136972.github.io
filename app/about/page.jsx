import Link from 'next/link';

//%%%%%%%%%%    نحوه ی استفاده از تصاویر در NEXT JS %%%%%%%%%%%%%%%%
//%%%%%%%%%%    برای استفاده از تصاویر در NEXT JS, باید تصاویر را در داخل پوشه ی components, و یا پوشه ی public, قرار دهیم و با فراخوانی کردن آن ها در داخل فایل های مختلف با  از import,  آنها را در فایل های مختلف استفاده کنیم %%%%%%%%%%%%%%%%
import Image from 'next/image';

import AdministerImage from '../././components/ali.jpg';


export default function About() {
  return (
    <main>
      <h>درباره ی شرکت امیرسام</h> 
      <p>  درباره ی  مدیرعامل شرکت امیرسام </p> 
      
      <ul>
          <li>

            <Link href="/about">
              <Image 
                  src={AdministerImage}
                  alt='amirsam-companys Administer Image'
                  width={60}
                  quality={100}
                  placeholder='blur'
              />
            </Link>
            
          </li>

      </ul>


    </main>
  )
}

