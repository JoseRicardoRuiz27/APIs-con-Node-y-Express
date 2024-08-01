const http = require(`node:http`)

//en commonJS --> puedes exportar el json automaticamente 
const dittoJSON = require(`./Pokemon/ditto.json`)

const processRequest = (req, res) =>{
    const {method, url} = req
    switch (method){
        case `GET`:
            switch (url){
                case `/pokemon/ditto`:
                    res.setHeader(`Content-Type`, `application/json; charset=utf-8`)
                    return res.end(JSON.stringify(dittoJSON))
                    default:
                        res.statusCode = 404
                        res.setHeader(`Content-Type`, `text/plain; charset=utf-8`)
                        return res.end(`Not Found 404`)
            }
            case `POST`:
                switch (url){
                    case `/pokemon`:{
                        let body = ''
                        
                        req.on(`data`, chunk =>{
                            body += chunk.toString()
                        })
                        req.on(`end`, () =>{
                            const data = JSON.parse(body)
                            res.writeHead(201, {'Content-Type': 'application/json; charset=utf-8' })
                            res.end(JSON.stringify(data))
                        })
                        break
                    }
                default:
                    res.statusCode = 404
                    res.setHeader(`Content-Type`, `text/plain; charset=utf-8`)
                    return res.end(`Not Found 404`)
                }
    }
}

const server = http.createServer(processRequest)

server.listen(3001, () =>{
    console.log(`El puerto esta en http://localhost:3001`)
})