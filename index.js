const express = require("express");
const http = require("http");
const ws = require("ws");
const port = 3000;
const app = express();
const server = http.createServer(app);

const wss = new ws.Server({ server });


wss.on("connection", (wsc) => {
    wsc.on("message", (msg) => {
        console.log(`RECEIVED ${msg}`);
        wsc.send(`Hello you sent ${msg}`);
    });
    wsc.send("Connection success!");

});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})