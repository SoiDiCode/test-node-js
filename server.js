const http = require('http');
const server = http.createServer((req, res) => {
    console.log('run request ...');
    res.setHeader('Content_Type', 'text/html');
    res.write('<h3> Hello mn !!!!');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('Node.js server is ruuning on port : 3000');
}
)