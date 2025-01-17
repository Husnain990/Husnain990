
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      formats: ["image/avif", "image/webp"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
          port: "",
          pathname: "/photos/**",
        },
      ],
    },
  };
   export default nextConfig;
 