const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (req.url === '/') {
        res.end('Bienvenido a mi pagina de inicio')
    }
    else if (req.url === '/imagen-pika') {
        fs.readFile('./pika.png', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('<h1>500 Internal Server Error</h1>')
            } else {
                res.setHeader('Content-Type', 'pika/png')
                res.end(data)
            }
        })
    }
    else if (req.url === '/contacto') {
        res.end('<h1>Contacto</h1>')
    }
    else {
        res.statusCode = 400
        res.end('<h1>404</h1>')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
})
