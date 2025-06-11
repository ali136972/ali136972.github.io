/** @type {import('next').NextConfig} */
const nextConfig = {
  // dynamic :'force-static',//convert Dynamic Routes(SSR or Server-Side-Rendering) with using GenerateStaticParams, to Static-rendering
  output: 'export', // Outputs a Single-Page Application (SPA) or Static-pages without Dynamic Routes.
  // distDir: 'dist',
  images: { unoptimized: true },
  //%%%%%%%% خروجی پیش فرض پروژه ی مادر Nextjs 15, بصورت پیش فرض ،در داخل مسیر _next/static ,ذخیره می شود  %%%%%%%%
    //%%%%%%% path:'_next/static' 
  //%%%%%%%%% اگر بخواهیم پروژه ی خود را در داخل یک پوشه یا مسیر فرعی دیگری همانند ریپوزیتوری گیت هاب خودمان ذخیره کنیم باید (ali136972/ali136972.github.io),باید کد زیر را اضافه کنیم %%%%%%%%
    // basePath:'repository-name',    
    // basePath:'/https://github.com/ali136972/ali136972.github.io.git',
    // assetPrefix:'/https://github.com/ali136972/ali136972.github.io.git',
}
module.exports = nextConfig






////%%%%%%%%%%%***** import DataBase from 'http://localhost:4000' in './_api/db.json' via json-server fetching
// // const { DESTRUCTION } = require('dns');

// /** @type {import('next').NextConfig} */
// const nextConfig = {


//   output: 'export', // Outputs a Single-Page Application (SPA).
//   // distDir: './dist', // Changes the build output directory to `./dist/
//   images: { unoptimized: true },
//   //%%%%%%%%% اگر پروژه ی خود را در داخل مسیر اصلی گیت هاب یا همان main,دیپلوی کنیم باید کد زیر را اضافه کنیم %%%%%%%%
//     //%%%%% basePath:'repository-name',
//     basePath:'/https://github.com/ali136972/ali136972.github.io.git',
//     assetPrefix:'/https://github.com/ali136972/ali136972.github.io.git/',
  
//   //%%%%%%%%% اگر پروژه ی خود را در داخل زیر شاخه ی مسیر اصلی(subpath) گیت هاب یا همان branch(origin/main),دیپلوی کنیم باید کد زیر را اضافه کنیم %%%%%%%%
//     // basePath:'/https://github.com/ali136972/ali136972.github.io.git',
//     // assetPrefix:'/https://github.com/ali136972/ali136972.github.io.git',
//     // basePath:'repository-name',
//     compiler: {
//       styledComponents: true,
//     },



//     // crossOrigin: 'anonymous',
//     // experimental: {
//     //   serverActions: {
//     //     // allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
//     //     allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
//     //   },
//     // },

// }
//   // config.module.rules.push(
//   //       {test: /\.(png|jpeg)$/, loader: 'url-loader?limit=8192'}
//   //   );
// module.exports = nextConfig



// // module.exports = {
// //   allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
// // }


// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.module.rules.push({
//       output: 'export',
//       // test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.jpg$/, /\.png$/],
//       // loader: require.resolve("url-loader"),
//       // allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
//       distDir: 'dist',
//       images: { unoptimized: true },
//     });

//     return config;
//   }

// };
