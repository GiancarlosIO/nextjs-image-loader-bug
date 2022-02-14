/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://my-imgix-cdn.imgix.net'
  },
  assetPrefix: 'https://my-custom-cdn.com',
}

module.exports = nextConfig
