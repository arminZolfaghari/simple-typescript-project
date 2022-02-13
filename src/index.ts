import {config} from './utils/config';
import connectToDB from './database/index'




async function init() {
    connectToDB().then(async() => {
        const {startServer} = await import("./api/httpServer");
        startServer(config.WEB_PORT)
    })
}

init().then(async () => {})