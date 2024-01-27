/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/order',
                destination: '/',
                permanent: true,
            },
        ]
    },

}

module.exports = nextConfig
