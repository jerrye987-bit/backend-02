const fs = require('fs');
const path = require('path');

const USERS_FILE = path.join(__dirname, '..', 'data', 'users.json');

function getUsers() {
    return fs.readFileSync(USERS_FILE, 'utf-8');
}

module.exports = { getUsers };