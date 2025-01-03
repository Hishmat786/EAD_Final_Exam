const http = require('http')

const PORT = 3000;

const server = http.createServer(PORT)

server.listen({
    port: PORT,
    host: '0.0.0.0',
    backlog: 10
    }, () => {
    console.log(`Connected with ${port}`)
})