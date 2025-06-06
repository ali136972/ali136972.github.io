import React from 'react';
import {notFound} from "next/navigation";

/* static rendering(static parameters) in Next js, این پارامترها، مثلا: پارامتر استاتیک و ثابت  id, name, ... فقط با یک بار رکوئست زدن به سرور، داده های جیسو را گرفته و در داخل یک متغیر ثابتی به نام id, name,... می ریزیم و در هر جی وبسایتمان که نیاز باشد آنها را فراخوانی کرده و استفاده می کنیم و دیر نیازی به درخواست دادن به سرور برای دریافت این داده ها نیست */

export async function generateStaticParams() {
  const  res = await fetch('http://localhost:4001/users/');
  const  users =  await res.json();
  return users.map((user)=>({
    id: user.id,
  }));
}



/* route parameter, این پارامترها، مثلا: پارامتر داینامیک :id, :name, ... به آخر آدرس روت، اضافه می شوند و کارخاصی را با استفاده از آنها می توانیم انجام دهیم این کار را توسط   
if(!res.ok){
    notFound();
  }
  
  انجام می دهیم */



async function getUsers(id){
  //adding More Delay
    await new Promise(resolve=>setTimeout(resolve,3000));

  const  res = await fetch('http://localhost:4001/users/' + id, {
   next:{
     revalidate: 2
   }
  });

  if(!res.ok){
    notFound();
  }
  return res.json();
}


export default async function usersDetails({params}) {

    const user = await getUsers(params.id);
  return (
    <main>

      <nav>
        <h1>UserDetails</h1> 
      </nav>

      <div Key={user.id} className='card my-5'>
          <h3>{user.name}</h3>
          <p>{user.body}</p>

          <div className={`pill ${user.priority}`}>
            {user.priority} priority
          </div>

      </div>
      
    </main>
  )
}