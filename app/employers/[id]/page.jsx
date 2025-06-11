import React from 'react';
import {notFound} from "next/navigation";

/* static rendering(static parameters) in Next js, این پارامترها، مثلا: پارامتر استاتیک و ثابت  id, name, ... فقط با یک بار رکوئست زدن به سرور، داده های جیسون را گرفته و در داخل یک متغیر ثابتی به نام id, name,... می ریزیم و در هر جای وبسایتمان که نیاز باشد آنها را فراخوانی کرده و استفاده می کنیم و دیگر نیازی به درخواست دادن به سرور برای دریافت این داده ها نیست */
  //%%%%%%%%%% 1. import from API
  //%%%%%%%%%% 2. import from An ORM or database

//%%%%%%%%%% 1. import from API
  // export async function generateStaticParams() {
  //   const  res = await fetch('http://localhost:4000/employers');
  //   const  employers =  await res.json();
  //   return employers.map((employer)=>({
  //     id: employer.id,
  //   }));
  // }



// 'auto' | 'force-dynamic' | 'error' | 'force-static'
export const dynamic = 'auto';
// export const dynamicParams = true;
export async function generateStaticParams() {
  try{
    const  res = await fetch('http://localhost:4000/employers');
    const  employers =  await res.json();
    return employers.map((employer)=>({
      // id: employer.id.toString,
      id: employer.id,
    }));
  }catch(error){
    console.error('Failed to fetch employers:',error);
    return [];

  }

}




  //%%%%%%%%%% 2. import from An ORM or database
    // import { db, posts } from '@/lib/db'
    
    // export default async function Page() {
    //   const employers = await db.select().from(employers);
    //   return (
    //     <ul>
    //       {employers.map((employer) => (
    //         <li key={employers.id}>{employers.title}</li>
    //       ))}
    //     </ul>
    //   )
    // }



    // //import from database
    // import { db, posts } from '@/lib/db'
    
    // export async function id() {
    //   const employers = await db.select().from(employers);
    //   return employers.map((employer) => ({
    //     id: employer.id,
    //   }));
    // }



/* route parameter, این پارامترها، مثلا: پارامتر داینامیک :id, :name, ... به آخر آدرس روت، اضافه می شوند و کارخاصی را با استفاده از آنها می توانیم انجام دهیم این کار را توسط   
if(!res.ok){
    notFound();
  }
  
  انجام می دهیم */



async function getEmployers(id){
  //adding More Delay
    await new Promise(resolve=>setTimeout(resolve,3000));

  const  res = await fetch('http://localhost:4000/employers/' + id, {
   next:{
     revalidate: 2
   }
  });

  if(!res.ok){
    notFound();
  }
  return res.json();
}


export default async function EmployerDetails({params}) {
    const {id} = await params;
    const employer = await getEmployers(id);
  return (
    <main>

      <nav>
        <h1>EmployerDetails</h1> 
      </nav>

      <div key={employer.id} className='card my-5'>
          <h3>{employer.name}</h3>
          <small>Created By {employer.email}</small>
          <p>{employer.discription}</p>

          <div className={`pill ${employer.priority}`}>
            {employer.priority} priority
          </div>

      </div>
      
    </main>
  )
}