const { DESTRUCTION } = require('dns');

/** @type {import('next').NextConfig} */
const nextConfig = {


  output: 'export', // Outputs a Single-Page Application (SPA).
  // distDir: './dist', // Changes the build output directory to `./dist/
  images: { unoptimized: true },
  //%%%%%%%%% اگر پروژه ی خود را در داخل مسیر اصلی گیت هاب یا همان main,دیپلوی کنیم باید کد زیر را اضافه کنیم %%%%%%%%
    //%%%%% basePath:'repository-name',
    basePath:'/https://github.com/ali136972/ali136972.github.io.git',
    assetPrefix:'/https://github.com/ali136972/ali136972.github.io.git/',



  //%%%%%%%%% اگر پروژه ی خود را در داخل زیر شاخه ی مسیر اصلی(subpath) گیت هاب یا همان branch(origin/main),دیپلوی کنیم باید کد زیر را اضافه کنیم %%%%%%%%
    // subPath:'/https://github.com/ali136972/ali136972.github.io.git',
    // assetPrefix:'/https://github.com/ali136972/ali136972.github.io.git',
    // subPath:'repository-name',
  compiler: {
    styledComponents: true,
  },



    // crossOrigin: 'anonymous',
    // experimental: {
    //   serverActions: {
    //     // allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
    //     allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
    //   },
    // },

}
  // config.module.rules.push(
  //       {test: /\.(png|jpeg)$/, loader: 'url-loader?limit=8192'}
  //   );
module.exports = nextConfig







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
