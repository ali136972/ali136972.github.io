// const { DESTRUCTION } = require('dns')

// /** @type {import('next').NextConfig} */
// const nextConfig = {


//   // output: 'export', // Outputs a Single-Page Application (SPA).
//   // distDir: './dist', // Changes the build output directory to `./dist/
//   images: { unoptimized: true },
//   compiler: {
//     styledComponents: true,
//   },



//     // rewrites: ()=>{
//     //     return[
//     //         {
//     //         source: "/api/:path*",
//     //         destination: "http://localhost:3000/api/:path*"
//     //         }
//     //     ]

//     // },

//     crossOrigin: 'anonymous',
//     experimental: {
//       serverActions: {
//         // allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
//         allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
//       },
//     },

// }

//   // config.module.rules.push(
//   //       {test: /\.(png|jpeg)$/, loader: 'url-loader?limit=8192'}
//   //   );
// module.exports = nextConfig


// // module.exports = {
// //   allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
// // }


module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.jpg$/, /\.png$/],
      loader: require.resolve("url-loader")
    });

    return config;
  },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};
