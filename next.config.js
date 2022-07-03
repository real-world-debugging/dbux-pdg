/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,

  /**
   * @see https://nextjs.org/docs/basic-features/eslint#linting-custom-directories-and-files
   */
  dirs: [
    "pages",
    "util",
    "components",
    "hooks"
  ],
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
