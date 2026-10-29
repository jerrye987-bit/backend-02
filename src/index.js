const http = require('http');

const { getUsers } = require('./modules/users');

const PORT = process.env.PORT || 3000;
const HOST = '127.0.0.1';

const server = http.createServer((request, response) => {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const params = url.searchParams;

    if (params.has('hello')) {
        const name = params.get('hello');

        if (!name) {
            response.writeHead(400, 'Bad Request', { 'Content-Type': 'text/plain' });
            response.end('Enter a name');
            return;
        }

        response.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
        response.end(`Hello, ${name}.`);
        return;
    }

    if (params.has('users')) {
        const data = getUsers();
        response.writeHead(200, 'OK', { 'Content-Type': 'application/json' });
        response.end(data);
        return;
    }

    if (params.size > 0) {
        response.writeHead(500, 'Internal Server Error');
        response.end();
        return;
    }

    response.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
    response.end('Hello, World!');
});

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен по адресу http://${HOST}:${PORT}`);
});
