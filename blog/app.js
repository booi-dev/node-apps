const http = require('http');
const fs = require('fs')
const path = require('path');

const port = 3000;

console.log('node runnig')

const server = http.createServer((req, res) => {

    // home page
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'public', 'home.html')
        sendFile(res, filePath)
    }

    else if (req.url === '/blog') {
        const filePath = path.join(__dirname, 'public', 'blog.html')
        sendFile(res, filePath)
    }

    else if (req.url === '/contact') {
        const filePath = path.join(__dirname, 'public', 'contact.html')
        sendFile(res, filePath)
    }

    else {
        const filePath = path.join(__dirname, 'public', '404.html');
        sendFile(res, filePath, 404);
    }

})

server.listen(port, () => {
    console.log('server started')
})

function sendFile(res, filePath, statusCode = 200) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "Text/plain" });
            res.end('Internal Server Error')
        }
        else {
            res.writeHead(statusCode, { "Content-Type": "Text/html" });
            res.end(data)
        }
    })
}