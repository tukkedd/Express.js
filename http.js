const http = require('node:http') // protocolo HTTP


const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log('request received', req.url)
    res.end('Hola mundo')
})


    server.listen(desiredPort, () => {
        console.log(`server listening on port http://localhost:${desiredPort}`)
    })
