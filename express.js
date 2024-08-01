const express = require(`express`)
const dittoJSON = require(`./Pokemon/ditto.json`)

const app = express()

const PORT = process.env.PORT ?? 3001

app.use(express.json())

// app.use((res, req, next) => {
//     console.log(`Middleware`)
    
//     if(req.method != "POST") return next()
//     if(req.headers[`Content-Type`] != `application/json`) return next()

//     let body = ''
//     req.on(`data`, chunk => {
//         body += chunk.toString()
//     })
//     req.on(`end`, () => {
//         const data = JSON.parse(body)
//         req.body = data
//         next()
//     })
// })

app.get(`/`, (req, res) => {
    res.send(`<h1>Hola Node</h1>`)
})
app.get(`/pokemon/ditto`, (req, res) => {
    res.json(dittoJSON)
})


app.post(`/pokemon`, (req, res) => {
    res.status(201).json(req.body)
})


app.use((req, res) =>{
    res.status(404).send(`<h1>Not Found 404</h1>`)
})

app.listen(PORT, () => {
    console.log(`El puerto esta alojado en: http://localhost:${PORT}`)
})