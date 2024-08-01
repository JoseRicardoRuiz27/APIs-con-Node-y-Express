const http = require(`node:http`)
const fs = require(`node:fs`)

const puertoDisponible = process.env.PORT ?? 3001
const processRequest = (req, res) =>{
        res.setHeader(`Content-type`, `text/html; charset=utf-8`)
    if(req.url === "/"){
        res.status = 200
        res.end(`<h1>Hola página de inicio</h1>`)
    }else if (req.url === `/imagen.png`){
        res.setHeader(`Content-type`, `image/png`)
        fs.readFile(`foto-6.png`, (err, data) =>{
            if(err){
                res.statusCode = 500
                res.end(`<h1>Internal Server Error</h1>`)
            }else{
                res.setHeader(`Content-type`, `image/png`) 
                res.end(data)
            }
        })
    }else if (req.url === `/contacto`){
        res.status = 200
        res.end(`<h1>Hola página de contacto</h1>`)
    } else{
        res.status = 404
        res.end(`<h1>Error 404</h1>`)
    }
}

const server = http.createServer(processRequest)

server.listen(puertoDisponible, () =>{
    console.log(`El puerto esta en http://localhost:${puertoDisponible}`)
})