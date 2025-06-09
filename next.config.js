/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // for static export
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true, // required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
  // You can add other configurations here
  trailingSlash: true, // optional, if you want trailing slashes
  distDir: 'out', // optional, change the output directory
}

module.exports = nextConfig