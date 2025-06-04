//%%%%%%%%%%%%%%%%%%%%%%%%%%%******* every requist (getServerSideProps) in page directory in Next js******%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // این متد در هر درخواستی که فرانت اند به سرور می دهد یا زمان every requist, درخواست را اجرا می کند و بعد از اجرای آن، ما می توانیم از این متد بعنوان props, در داخل  آرگومان تابع اصلی یا کامپوننت Home(), از آن استفاده کنیم 
        // export const getServerSideProps = async()=>{
        // const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);

import Client from "./client";

        // };


        type Repo = {
            name:string;
            stargazers_count: number;
        }
        async function getServerSideProps():Promise<Repo>{
        const res = await fetch(`https://api.github.com/repos/vercel/next.js`, {
            // cache: 'no-store',
            next: {revalidate: 10}
        });
        return res.json();

        };


        
        export default async function Page() {
            const repo = await getServerSideProps();
            return <Client repo={repo}/>
            }
