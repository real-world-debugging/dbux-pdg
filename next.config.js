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

  /**
   * NOTE: Stupid next.js default settings neable experimental features by default.
   * Won't export, if this is not explicitly disabled.
   * 
   * @see https://nextjs.org/docs/api-reference/next/image#unoptimized
   */
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
