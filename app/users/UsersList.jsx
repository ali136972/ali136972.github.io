
import Link from "next/link";

async function getUsers(){
  //adding More Delay
   await new Promise(resolve=>setTimeout(resolve,3000));
      
   const  res = await fetch('http://localhost:4001/users', {
    next:{
      revalidate: 2
    }
   });
   return res.json();
}

export default async function UersList() {
    const users = await getUsers();
  return (
    <>
      {
        users.map((user)=>(
          <div key={user.id} className='card my-5'>
            <Link href={`/users/${user.id}`} >
              <h3>{user.title}</h3>
              <p>{user.body.slice(0, 60)}...</p>
              <div className={`pill ${user.priority}`}>
                {user.priority} priority
              </div>
            </Link>
          </div> 
        ))
      }

      {
          users.length === 0 && (
            <p className='text-center'> There are No Users</p>
          )
      }
    </>
  )
}

