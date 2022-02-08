import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';

const app = express()
const httpServer = http.createServer(app)

const startServer = (port) => {
    httpServer.listen(port, () => {
        console.log(`Listening on ${port}`)
    })
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());


export default startServer


