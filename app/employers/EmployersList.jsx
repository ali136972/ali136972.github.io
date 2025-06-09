import Link from "next/link";

async function getEmployers(){
  //adding More Delay
   await new Promise(resolve=>setTimeout(resolve,3000));
      
   const  res = await fetch('http://localhost:4000/employers', {
    next:{
      revalidate: 2
    }
   });
   return res.json();
}

export default async function EmployersList() {
    const employers = await getEmployers();
  return (
    <>
      {
        employers.map((employer)=>(
          <div key={employer.id} className='card my-5'>
            <Link href={`/employers/${employer.id}`} >
              <h3>{employer.name}</h3>
              <p>{employer.discription.slice(0, 60)}...</p>
              <div className={`pill ${employer.priority}`}>
                {employer.priority} priority
              </div>
            </Link>
          </div> 
        ))
      }

      {
          employers.length === 0 && (
            <p className='text-center'> There are No Employers</p>
          )
      }
    </>
  )
}

