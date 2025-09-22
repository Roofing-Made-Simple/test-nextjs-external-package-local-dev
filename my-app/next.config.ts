import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["@my-company/utils"],
  webpack: (config, { isServer }) => {
    config.resolve.alias["@my-company/utils"] = path.resolve(
      __dirname,
      "../utility-package/dist"
    );
    return config;
  },
};

export default nextConfig;
