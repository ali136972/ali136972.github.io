"use client";
/* خط بالا برای این اضافه شده است که به اپلیکیشن ری اکتی ما بفهماند که این کامپوننت CreateForm, یک client componnent, می باشد*/

import {useRouter } from "next/navigation";
import {useState } from "react";

export default function CreateForm() {

  const router = useRouter();
  const [name, setName] = useState('');
  const [discription, setDiscription] = useState('');
  const [priority, setPriority] = useState('low');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setIsLoading(true);

    const employer = {
      name,
      discription,
      priority,
      email: 'employer@gmail.com',
    }

    const  res = await fetch('http://localhost:4000/employers', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(employer),
      next:{
        revalidate: 0
      }

     });


      if(res.status === 201){
        router.push('/employers');
        router.refresh();
      }
      

  }


  return (
    <form className="w-1/2" onSubmit={handleSubmit}>
      <label>
        <span>Name:</span>
        <input 
          required
          type = "text"
          onChange={(e)=>setName(e.target.value)}
          value = {name}      
        
        />
      </label>


      <label>
        <span>Discription:</span>
        <textarea 
          required
          onChange={(e)=>setDiscription(e.target.value)}
          value = {discription}      
        
        />
      </label>



      <label>
        <span>Priority:</span>
        <select 
          onChange={(e)=>setPriority(e.target.value)}
          value = {priority}      
        >

          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>

        </select>    
      </label>    



      <button
        className="btn-primary"
        disabled={isLoading}
      
      >

        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Employer</span>}

      </button>        

    </form>
  )
}
