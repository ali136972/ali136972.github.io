//%%%%%%%%%%%%%*****************  این فایل page.jsx یا page.tsx, فایل Entry Point, یا فایل اصلی پروژه ی اپلیکیشن Next js, در داخل هر دایرکتوری یا هر روت یا هر url, ما می باشد که در داخل پوشه ی مربوط به همان روت قرار می گیرد  %%%%%%%%%%%%%%%%
  //%%%%%%%%%%%%% ما دو نوع روت داریم: 1. روت استاتیک 2. روت داینامیک که در این روت می توانیم داده ها را از جاهای مختلف مثلا از پایگاه داده و یا از فایل های دیگر خوانده و نشان دهیم مثلا محصولات با id, های مختلف را نمایش دهیم 
    //%%%%%%%%%%%%% برای ایجاد روت های استاتیک فقط کافی است فایل page.jsx, آن را در داخل پوشه ای با همین نام مخصوص خود آن روت مورد نظر قرار دهیم و در داخل این فایل اطلاعاتی که باید نمایش دهیم را بنویسیم
    //%%%%%%%%%%%%% برای ایجاد روت های داینامیک باید نام پوشه یا روت مورد نظر را در داخل [], همانند روت داینامیک [employers],[id],... قرار دهیم و فایل page.jsx, آن را در داخل پوشه ای با همین نام مخصوص خود آن روت مورد نظر قرار دهیم و در داخل این فایل اطلاعاتی که باید نمایش دهیم را بنویسیم

//%%%%%%%%%%  NEXT JS, یک فریمورک با امکانات بیشتر برای کتابخانه ی React Js, که خودش یک کتابخانه برای سورس یا زبان برنامه نویسی javascript, می باشد*************%%%%%%%%%%%%%%%%
  //%%%%%%%%%%  NEXT JS is FrameWork for React js javascript Library %%%%%%%%
//%%%%%%%%%%  NEXT JS,  دو تا هدف اصلی دارد: 1. کاربرد راحت تر آن 2. قدرت بالایی که در رندر کردن اپلیکیشن ها دارد%%%%%%%%%%
//%%%%%%%%%%  NEXT JS,  از سه بخش تشکیل شده است: 1.Compiler, for interprating javascripn code or for Bunddling  or breaking great  javascript code to smaller than of that  2.CLI(Command Line Inerface), for Building my application  3.Nodejs Runtime, for existance javascript in outside of browser via c++ programming %%%%%%%%%%
//%%%%%%%%%%  دو نوع رندر کردن برای اپلیکیشن ها وجود دارد: 1.CSR(Client Side Rendering) 2.SSR(Server Side Rendering) %%%%%%%%%%
//%%%%%%%%%% Search Engine, یکسری crawler, دارد و وقتی که کاربر چیزی را  در داخل مرورگر جستجو می کند در اینصورت crawler, ها با دریافت کلیدواژه های جستجوی کاربر، موضوع را درک کرده و متناسب با موضوع جستجوی کاربر، پیج ها یا صفحات مختلف وبسایت های مختلف که در مورد این موضوع مطالبی را داررند را به کاربر از طرف سروردر پاسخ به درخواست کاربر، ارسال می کنند
  //%%%%%%%%%%  CSR(Client Side Rendering), یعنی وقتی کاربر چیزی را در داخل مرورگر جستجو می کند ، اول یک درخواست به سرور ارسال می شود و تمامی پیج های وبسایت ما از سرور دریافت شده و مقداری محاسبات در پشت صحنه ی مرورگر بر روی نها انجام می شود و ارتباط بین کامپوننت های مختلف صفحات مختلف وبسایت ما به خوبی برقرار است ولی وبسایت هایی که از CSR, استفاده می کنند در SEO(Search Engine Optimazation), خیلی کند عمل می کنند .و Search Engine, این نوع وبسایت ها را بعنوان تبایایای بحساب نمی آورد تا بهآن رنکینگ بدهد پس در جستجوی نام این وبسایت ها مثلا در گوگل و ... خیلی دیر بالا می آیند و ناشناخته باقی می مانند%%%%%%%%%%
  //%%%%%%%%%%  SSR(Server Side Rendering), , یعنی وقتی کاربر چیزی را در داخل مرورگر جستجو می کند ، اول یک درخواست به سرور ارسال می شود و تمامی پیج های وبسایت ما در داخل سرور، رندر شده و قسمت هایی که به جاواسکریپت نیاز دارد را در حجم بسیار کوچکی به سمت کاربر ارسال می کند تا محاسبات آنها در پشت صحنه ی مرورگر در سمت کلاینت انجام شود و روی آنها hydration , یعنی وقتی ما یک وبسایت بزرگی را داریم Javascript Bunddle, به قسمت هایی از این کامپوننت ها یا پیج های وبسایت می چسبد تا بتواند محاسبات آنها را سریعتر انجام دهد   انجام می شود و ارتباط بین کامپوننت های مختلف صفحات مختلف وبسایت ما به خوبی برقرار نیست ولی وبسایت هایی که از SSR, استفاده می کنند در SEO(Search Engine Optimazation), خیلی سریع عمل می کنند .و Search Engine, این نوع وبسایت ها را بعنوان تبایایای بحساب نمی آورد تا به آن رنکینگ بدهد پس در جستجوی نام این وبسایت ها مثلا در گوگل و ... خیلی زود بالا می آیند و ناشناخته باقی نمی مانند%%%%%%%%%%
  //%%%%%%%%%% همه ی موارد بالا برای NEXT JS, قبل از NEXT JS 13, بود. ولی NEXT JS 13, با معرفی Client Component, Server Component, کار را برای جستجوی Search Engine, های وبسایت ها، خیلی راحت تر کرده است
  //%%%%%%%%%% Client Component, قسمت بزرگی از وبسایت ما را در سمت سرور، رندر می کند و فقط قسمت کوچکی از این وبسایت را که به کدهای جاواسکریپت نیاز دارد را در سمت کابر با در داخل مرورگر، Hydration, یا هیدراته می کند
    //%%%%%%%%%% Client Component: Rendered on the Server and Hydrated On the Browser

  //%%%%%%%%%% Server Component, تمامی وبسایت ما را در سمت سرور، رندر می کند وهیچ قسمتی از وبسایت ما(قسمتهای متغیر یا داینامیک وبسایت) در سمت کابر یا در داخل مرورگر، Hydration, یا هیدراته نیاز پیدا نمی کند چون قسمت های داینامیک وبسایت ما را با استفاده از Client Component, جبران می کند و اینکار را انجام می دهد
    //%%%%%%%%%% Server Component: Rendered on the Server and No Hydrated On the Browser needed

  //%%%%%%%%%%  ما هر کامپوننتی را که در NEXT JS, ایجاد می کنیم بصورتServer Component, در نظر گرفته می شود و برای تبدیل انها به Client Component, باید بعنوان client component, عنوان کنیم تا سمت مرورگر اجرا شود 

  //%%%%%%%%%%************   Routing, یا نحوه ی اضافه کردن صفحات مختلف به وبسایت خودمان در NEXT JS   ***********%%%%%%%%%%%%%%
    //%%%%%%%%%% در NEXT JS 13, با کامپوننت ها جوری رفتار می کند که هر جایی از وبسایت ما که به ارتباط با بخش ها یا المنت های دیگر وبسایت ان نیاز دارد(وبسایت داینامیک) را با استفاده از  Client Component, می نویسیم و بخش های ثابت و بدون تغییر وبسایتمان(وبسایت استاتیک) را با استفاده از Server Component, می نویسیم
    //%%%%%%%%%% برای ایجاد روت های مختلف باید در داخل پوشه ی app, در داخل next js, یک پوشه به نام همین روت ایجاد کرده و در داخل این پوشه یک فایل جاواسکریپتی با پسوند .JSX, و یا یک فایل تایپ اسکریپتی با پسوند .TSX, ایجاد کنیم و در داخل آن پیج یا روت خودمان را ایجاد کنیم مثلا برای ایجاد روتی به نام های USERS, EMPLOYERS, ... باید پوشه هایی به نام های USERS, EMPLOYERS, ... داخل پوشه ی app, ایجاد کرده و در داخل هر کدام از آنها فایلی جاواسکریپتی یا تایپ اسکریپتی با نام page.jsx , page.tsx, ایجاد کنیم

  //%%%%%%%%%%    نحوه ی استفاده از تصاویر، فونت ها و استایل ها در NEXT JS %%%%%%%%%%%%%%%%
  import Image from 'next/image';

  //%%%%%%%%%%*********    نحوه ی دریافت داده های JSON, که در یک فایل با پسوند db.json, NEXT JS  ********* %%%%%%%%%%%%%%%%
    //%%%%%%%%%%    نحوه ی دریافت داده های JSON, که در یک فایل با پسوند db.json, در داخل پوشه ی _data, در داخل پروژه ی ما قرار دارند در NEXT JS,باید ما ابتدا یک end point(url), داشته باشیم تا با requist, زدن به آن url, بتوانیم داده های داخل فایل db.json, را از طریق این url, دریافت کرده و در داخل فایل  باپسوند .jsx, مثلا در داخل فایل page.jsx, دریافت کنیم , ولی برای ایجاد این url, ما نیاز به نصب پکیج json-server, با استفاده از دستور npm install json-server, در داخل ترمینال vs code, را داریم تا برای ما url, ایجاد کند تا توسط این url, داده های داخل db.json, را در داخل page.jsx, استفاده کنیم %%%%%%%%%%%%%%%%
    //%%%%%%%%%%  بعد از نصب پکیج json-server, برای راه اندازی این پکیج باید در داخل ترمینال vs code, کد  npx json-server --watch --port 4000 ./_data/db.json, را بنویسیم تا بر روی پورت 4000 json-server, ما اجرا شود و داده های داخل فایل db.json, را که در داخل آدرس ./_data/db.json, می باشند را دریافت کرده و بر ای آنها یک url, ایجاد کند و م با استفاده از این url, می توانیم از داخل هر فایلی همانند فایل page.jsx, ..., به این url,requist, زده و داده ها را از داخل فایل db.json, با استفاده از متد fetch('url addresses'), یا fetch('http://localhost:4000/employers'), گرفته و در داخل فایل page.jsx, ..., استفاده کنیم و از قبل می دانیم که، برنامه ی ما نیز بر روی پورت 3000 از قبل  با استفاده از کدهای npm run dev,  در داخل  ترمینال vs code, اجرا می شد 


    // import Head from 'next/head';

  //%%%%%%%%%%*********    نحوه ی دریافت داده یا Data Fetching, در داخل , NEXT JS  ********* %%%%%%%%%%%%%%%%
    //%%%%%%%%%% در ابتدا باید به یاد بیاوریم که از قبل می دانیم که در Next js, ما دو نوع روتر داریم 
      //%%%%%%%%%% 1. page Router, در نسخه های قبل از نسخه ی 13 Next js, از این نوع روت گذاری استفاده می شد بصورتی که ما باید برای ایجاد روت های مختلف یک وبسایت، ابتدا یک پوشه ای به نام pages, ایجاد کنیم و روت های مختلف وبسایت را در داخل پوشه هایی به همین نام هایی که می خواهیم روت ایجاد کنیم ، ایجاد کرده و در داخل هر کدام از این روت ها کدهای مربوزط به هر روت را در داخل فایلی به نام index.js یا index.ts, بصورت کامپوننت ری اکتی، ایجاد کنیم 
        //%%%%%******** مثلا برای ایجاد روت '/employers', باید یک پووشه ای به نام pages, ایجاد کنیم و در داخل این پوشه، پوشه ای به ام employers, ایجاد کرده و در داخل این پوشه کامپوننت Employers, را در داخل فالی به نام index.js, یا index.ts, بسازیم
      //%%%%%%%%%% . app Router, در نسخه های بعد از نسخه ی 13 Next js, از این نوع روت گذاری استفاده می شد بصورتی که ما باید برای ایجاد روت های مختلف یک وبسایت، ابتدا یک پوشه ای به نام app, ایجاد کنیم و روت های مختلف وبسایت را در داخل پوشه هایی به همین نام هایی که می خواهیم روت ایجاد کنیم ، ایجاد کرده و در داخل هر کدام از این روت ها کدهای مربوط به هر روت را در داخل فایلی به نام page.js یا page.ts, بصورت کامپوننت ری اکتی، ایجاد کنیم 
        //%%%%%%******** مثلا برای ایجاد روت '/employers', باید یک پووشه ای به نام app, ایجاد کنیم و در داخل این پوشه، پوشه ای به ام employers, ایجاد کرده و در داخل این پوشه کامپوننت Employers, را در داخل فالی به نام page.js, یا page.ts, بسازیم

    //%%%%%%%%%%*********    متدهای مختلفی برای  دریافت داده یا Data Fetching, در داخل , NEXT JS وجود دارند که از جمله ی آنها  می توان به متدهای export const getStaticProps = async()=>{}, export const getServerSideProps = async()=>{}, export const getStaticPath = async()=>{},... اشاره کرد که به صورت های زیر در داخل فایل <html></html>, استفاده می شوند ********* %%%%%%%%%%%%%%%%
    //%%%%%%%%%%%%%%% دو راه مختلف برای ایجاد گرفتن وبسایت ها یا داده های استاتیک، داینامیک و گرفتن داده یا پیج یک وبسایت از مسیرهای یا روت های مختلف  در داخل next js, وجود دارد%%%%%%%%%%%
      //%%%%%%% 1. اگر فایل اصلی وبسایت یعنی index.js یا index.ts,  در داخل پوشه ی pages, در داخل next js, ایجاد شده باشد که به آن اصطلاحا page directory, می گویند در اینصورت برای گرفتن داده یا صفحات داینامیک یا استاتیک وبسایت باید به شکل زیر به سه روش زیر اقدام کرد

        //%%%%%%%%%%%%%%%%%%%%%%%%%%%******* Static Site Generation (getStaticProps) in page directory in Next js******%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
          // این متد getStaticProps(),در زمانی که کل پیج ساخته می شود یا زمان build time, درخواست را اجرا می کند و بعد از اجرای آن، ما می توانیم از این متد بعنوان props, در داخل  آرگومان تابع اصلی یا کامپوننت Home(), از آن استفاده کنیم 
          //%%%% ما در اینجا با استفاده از یک داده ی api, json, که در داخل لینک وبسایت https://jsonplaceholder.typicode.com/posts, قرار دارد و یک متد post(), برای سرور ایجاد می کنیم و با استفاده از متد getInitialProps(), در داخل next js, این داده ها را به سمت سرور می فرستیم و با استفاده از متد fetch(), آن را دریافت کرده و در پاسخ به کابر ارسال می کنیم و چون تعدادآرایه های فایل json, خیلی زیاد است پس ما با استفاده ز ?_limit=6, فقط 6 تا از آرایه های داخل فایل json, مورد نظر را در پاسخ به درخواست کاربر ارسال می کنیم 
            // export const getStaticProps = async()=>{
            //   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
            //   const articles = await response.json();
            //   return{
            //     props:{articles}
            //   }
            // }

          //%%%%%%%%%%%%%%%%%%%%%%%%%%%******* every requist (getServerSideProps) in page directory in Next js******%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            // این متد در هر درخواستی که فرانت اند به سرور می دهد یا زمان every requist, درخواست را اجرا می کند و بعد از اجرای آن، ما می توانیم از این متد بعنوان props, در داخل  آرگومان تابع اصلی یا کامپوننت Home(), از آن استفاده کنیم 
              // export const getServerSideProps = async()=>{
              //   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);

              // };

          //%%%%%%%%%%%%%%%%%%%%%%%%%%%******* (getStaticPaths) in page directory in Next js******%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
            // این متد بصورت داینامیک یا پویا، مسیرها یا یو آر ال ، ما را زمانی که ساخت اپلیکیشن ما تمام شده است تولید می کند یا dynamicaly generate paths, درخواست را اجرا می کند و بعد از اجرای آن، ما می توانیم از این متد بعنوان props, در داخل  آرگومان تابع اصلی یا کامپوننت Home(), از آن استفاده کنیم 
              // export const getStaticPaths = async()=>{
              //   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);

              // };

      //%%%%%%% 2. اگر فایل اصلی وبسایت یعنی page.js یا page.ts,  در داخل پوشه ی app, در داخل next js, ایجاد شده باشد که به آن اصطلاحا app directory(Next application), می گویند در اینصورت برای گرفتن داده یا صفحات داینامیک یا استاتیک وبسایت باید به شکل زیر به سه روش زیر اقدام کرد          
        //%%%%%%% in `app` directory in page.jsx or each other files
          // This function can be named anything
          async function getProjects() {
            //adding More Delay
            await new Promise(resolve=>setTimeout(resolve,3000));

            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
            const projects = await res.json()   
            return projects
          }


        //%%%%%%%%%%%%%%%%%%%%%%%%%%%******* (generateStaticParams) in page directory in Next js******%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
          //%%%%%%%%%  generateStaticParams, in app/blog/[slug]/page.js directory, خیلی شبیه به getStaticPaths, در داخل page directory, می باشد 
          //%%%%%%%%% The generateStaticParams function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.
          // Return a list of `params` to populate the [slug] dynamic segment
              // export async function generateStaticParams() {
              //   const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
              
              //   return posts.map((post) => ({
              //     slug: post.slug,
              //   }))
              // }



          //%%%%%% (generateStaticParams) in `app` directory, گرفتن داده ها یا اطلاعات از داخل فایلی به نام post-layout.js, که در داخل پوشه ی components قرار دارد
            import PostLayout from './components/post-layout';         
              export async function generateStaticParams() {
                return [{ id: '1' }, { id: '2' }]
              }
              
              async function getPost(params) {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${params.id}`)
                const post = await res.json();
              
                return post;
              }            



          //%%%%%% <Head> components in Nextjs websites Description in browsers search box 
          export const metadata ={
              title:'AMIRSAM-COMPANY Pages',
              description:'AMIRSAM-COMPANY Pages description'
          }



export default async function Home({ params }) {
  const projects = await getProjects();

  // Multiple versions of this page will be statically generated
  // using the `params` returned by `generateStaticParams`
  const { slug } = params;

  //%%%%%% (generateStaticParams) in `app` directory,
  const post = await getPost(params);


  return (
    <div>
      
      {/* <Head>
        <title>AMIRSAM_COMPANY-Home</title>
        <meta name="keywords" content="AMIRSAM_COMPANY, Iranian, persian, InductrialCompany, Full Automatic Welding& Winding machine, Olove Pitting & Slicing Machine, Cascade, Linear Particle Accelator" />
      </Head> */}

      <h1>Welcome to AMIRSAM_COMPANY Guys!</h1> 
      <h2>Home</h2> 
      <p>AMIRSAM-COMPANY is once of hightech company in made of the industerial full automatic Robots</p> 

      {
        projects.map((project) => <div key={project.id}>{project.title}</div>)
      }

      {
        <PostLayout post={post} />
      }

    </div>
  )
}


