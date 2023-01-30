/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.instagram.com/moveup.studio',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
