import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mkdbvroibtvwyiilobhn.supabase.co", // o el dominio que uses
        pathname: "/storage/v1/object/public/**", // ajusta el path según tu URL
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
