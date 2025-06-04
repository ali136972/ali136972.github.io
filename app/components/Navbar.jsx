import Link from 'next/link';

//%%%%%%%%%%    نحوه ی استفاده از تصاویر در NEXT JS %%%%%%%%%%%%%%%%
//%%%%%%%%%%    برای استفاده از تصاویر در NEXT JS, باید تصاویر را در داخل پوشه ی components, و یا پوشه ی public, قرار دهیم و با فراخوانی کردن آن ها در داخل فایل های مختلف با  از import,  آنها را در فایل های مختلف استفاده کنیم %%%%%%%%%%%%%%%%
import Image from 'next/image';
// import AdministerImage from '../../public/Accelators.jpg';

import navbarStyles from '../styles/Navbar.module.css';





export default function Navbar() {
  return (
    <main>

      <nav className={navbarStyles.nav}>

        <ul>
          <li>
            <Link href="/Administer">
              <Image 
                src={'/ali.jpg'}
                alt='amirsam-companys Administer Image'
                width={28}
                height={28}
                priority={"high"}
                className='rounded-xl'
              />
            </Link>  
          </li>

          <li>
            <Link href="/">home</Link>            
          </li>   

          <li>
            <Link href="/news">AmirsamCompanyNews</Link>      
            <ul>
              <li>
                <Link href="/news/latestNews">AmirsamCompanylatestNews</Link>            
              </li>  
            </ul>
          </li>  


          <li><Link href="/productions">productions</Link>   

            <ul>
              <li>
                <Link href="/productions/cascades">Cascades of Powder Coating Machine</Link>            
              </li>  

              <li>
                <Link href="/productions/olivePittingMachine">Olive Pitting and Slicing Machine</Link>            
              </li>                  
                
              <li>
                <Link href="/productions/particleLinearAccolator">Particle Linear Accolator</Link>            
              </li>                  
                
              <li>
                <Link href="/productions/weldingRobot"> Full Automatic Welding Robot</Link>            
              </li>                  
                
              <li>
                <Link href="/productions/windingRobot"> Full Automatic Winding Robot</Link>            
              </li>  

                
              <li>
                <Link href="/productions/olivePittingMachine"> Olive Pitting And Slicing Machinet</Link>            
              </li>  


            </ul>
       
          </li>          
          


          <li>
            <Link href="/users">users</Link>            
          </li>                  

          <li>
            <Link href="/employers">employers</Link>           
          </li>

          <li>
            <Link href="/create">CreateEmployer</Link>           
          </li>

          <li>
            <Link href="/about">about</Link>           
          </li>          

        </ul>

      </nav>


    </main>
  )
}


