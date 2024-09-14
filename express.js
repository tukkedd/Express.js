const express = require('express')
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')   // para quitar en la respuesta de un endpoint el 'X-Powered-By: Express'

//middleware 

// app.use((req, res, next) => {
//     if (req.method !== 'POST') return next()
//     if (req.headers['content-type' !== 'application/json']) return next()

//     //solo llegan request que son POST y que tienen el header content-type: Application/json

//     let body = ''

//     // escuchar el evento data
//     req.on('data', chunk => {
//         body += chunk.toString()
//     })

//     req.on('end', () => {
//         const data = JSON.parse(body)
//         //mutar la request y meter la informacion en el req.body
//         req.body = data
//         next()
//     })
// })

// express puede hacer ese middleware automaticamente con:
app.use(express.json())



app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto)    //para mandar jsons ===>  res.json({menssage: "hola"}) 
})


app.post('/pokemon', (req, res) => {
    //req.body deberiamos guardar en  bbdd
    res.status(201).json(req.body)



    //sin el middleware:

    // let body = ''
    // // escuchar el evento data
    // req.on('data', chunk => {
    //     body += chunk.toString()
    // })

    // req.on('end', () => {
    //     const data = JSON.parse(body)
    //     res.status(201).json(data)
    // })


})


//la ultima que va a llegar, siempre va de ultima ya que es un 404 y se maneja de manera global || se usa .use ya que es como un *, es para que todas las opciones, get, post etc va a pasar por aqui

app.use((req, res) => {
    res.status(404).send('<h1>404</h1>')
})



app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})