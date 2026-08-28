import { log } from "console"
import http, { request } from "http"

const server = http.createServer((request, response) =>  {
    console.log(request.method, request.url)
    const content = {"content-type": "text/plain; charset=utf-8"}

     if (request.url == "/login") {
        response.writeHead(200, {"content-type": "text/plain; charset=utf-8"})
        reponse.end("Está na rota de login")
    }

    else if (request.url == "/") {
        response.writeHead(200, {"content-type": "text/plain; charset=utf-8"})
        reponse.end("Hello Word!")
    }

    else if (request.url == "/register") {
    response.writeHead (200, {"content-type": "text/plain: charset=ut-8"})
    response.end("Está na rota de registro")
}


   else {
    response.writeHead( 404, )
    response.end("Não existe essa rota!")
   } 

})
server.listen(3000, () => {
console.log(`Servidor rodando em https://localhost:$ {3000}`);
})