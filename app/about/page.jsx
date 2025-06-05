import Link from 'next/link';

//%%%%%%%%%%    نحوه ی استفاده از تصاویر در NEXT JS %%%%%%%%%%%%%%%%
//%%%%%%%%%%    برای استفاده از تصاویر در NEXT JS, باید تصاویر را در داخل پوشه ی components, و یا پوشه ی public, قرار دهیم و با فراخوانی کردن آن ها در داخل فایل های مختلف با  از import,  آنها را در فایل های مختلف استفاده کنیم %%%%%%%%%%%%%%%%
import Image from 'next/image';

// import AdministerImage from '../../public/images/';


export default function About() {
  return (
    <main>
      <h1>درباره ی شرکت امیرسام</h1> 
      <p>  درباره ی  مدیرعامل شرکت امیرسام </p> 
      
      <ul>
          <li>
            <Link href="/about" className='bg-blue-500 p-3 flex justify-center items-center'>
              <Image 
                src={'/ali.jpg'}
                alt='amirsam-companys Administer Image'
                width={700}
                height= {700}
                priority= {"high"}
                className='rounded-xl'
              />
            </Link>            
          </li>
      </ul>
    </main>
  )
}

