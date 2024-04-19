/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "pokeapi.co",
                pathname: 'api/v2/pokemon/**',
            },
        ]
    }
}

module.exports = nextConfig
