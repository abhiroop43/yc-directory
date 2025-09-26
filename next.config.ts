import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        dangerouslyAllowSVG: true, // to be removed later
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "*"
            }
        ]
    }
};

export default nextConfig;
