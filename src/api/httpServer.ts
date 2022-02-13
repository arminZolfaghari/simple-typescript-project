import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import routes from './routes/index';

const app = express()
const httpServer = http.createServer(app)

export const startServer = (port) => {
    httpServer.listen(port,  () => {
        console.log(`Listening on ${port}`)
    })
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use('/', routes)



