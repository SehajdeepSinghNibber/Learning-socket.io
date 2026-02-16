// 1. Importing necessary modules

import express from 'express';
import http from 'http';
import { fileURLToPath } from 'node:url';
import { Server } from 'socket.io';
import {dirname, join} from 'node:path';

// 2. Setting up Instances

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 3. Serving HTML file

const __dirname = dirname(fileURLToPath(import.meta.url));
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

// 4. Define a connection event handler
io.on('connection', (socket) => {
    console.log('A user connected: ' + socket.id);
});

//5. Start the server
const PORT = 3000;
server.listen(PORT || 3000, () => {
    console.log('Server is running on http://localhost:' + (PORT || 3000));
});