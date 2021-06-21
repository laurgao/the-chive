module.exports = {
    async rewrites() {
        return [{
            source: '/api/post',
            destination: 'https://postulate.us/api/post',
        }, ]
    },
};