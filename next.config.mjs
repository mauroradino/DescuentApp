/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'static.cotodigital3.com.ar',
            'supera.com.ar',
            'adgoat-strapi-images-prod.s3.amazonaws.com',
            'images.weare365.io',
            'express.carrefour.com.ar'
        ],
    },
};

export default nextConfig;
