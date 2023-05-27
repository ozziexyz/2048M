import express from "express";
import expressWs from "express-ws";
import open from "open";

const app = express();

var wss = expressWs(app);

app.ws("/ws", (ws, req)=>{

});

app.use(express.static(process.cwd() + "/web"));

// var PORT = Math.floor(Math.random() * 10000)

var PORT = 8080;

app.listen(PORT, ()=>{
    // open(`http://localhost:${PORT}`);
});