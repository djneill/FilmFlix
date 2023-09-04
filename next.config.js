/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// next.config.js
module.exports = {
  server: {
    https: {
      key: './localhost.key',
      cert: './localhost.crt',
    },
  },
};

module.exports = nextConfig
