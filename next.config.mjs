/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
    output: 'export',
    basePath: isDev ? '' : '/resume'

};

export default nextConfig;
