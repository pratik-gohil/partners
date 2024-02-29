const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.miraeassetpartners.com',
                port: '',
            },
        ]
    },
    experimental: {
        webVitalsAttribution: ['CLS', 'LCP'],
        optimizeCss: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack(config, { dev, isServer }) {

        // Code splitting
        config.optimization.splitChunks.cacheGroups = {
            default: false,
            vendors: false,
        };

        config.optimization.splitChunks.chunks = 'async';
        config.optimization.splitChunks.minSize = 20000;
        config.optimization.splitChunks.maxAsyncRequests = 5;
        config.optimization.splitChunks.maxInitialRequests = 3;

        //Only minimize the bundle in production
        if (!dev && !isServer) {
            config.optimization.minimize = true;
            config.optimization.concatenateModules = true;
            config.optimization.usedExports = true;
        }
        return config;
    },
};


