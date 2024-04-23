// module.exports = {
//   images: {
//     domains: ["image.tmdb.org"],
//   },
// };
/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["image.tmdb.org"],
  },
  swcMinify: true,
  eslint: {
    ignoreDuringBuild: true,
  },
};

export default withPlaiceholder(nextConfig);
