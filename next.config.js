/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'i.pinimg.com']
    },
    experimental: {
        appDir: true
    }
}

module.exports = nextConfig
