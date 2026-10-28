    // Написать обработчик запроса:
    // - Ответом на запрос `?hello=<name>` должна быть **строка** "Hello, <name>.", код ответа 200
    // - Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** "Enter a name", код ответа 400
    // - Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200
    // - Если никакие параметры не переданы, то ответ **строка** "Hello, World!", код ответа 200
    // - Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500


const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, 'OK', { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Сервер работает!');
});

server.listen(3003, '127.0.0.1', () => {
    console.log('Сервер запущен по адресу http://127.0.0.1:3003');
});