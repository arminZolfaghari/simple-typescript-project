import startServer from "./api/httpServer";
import {config} from './utils/config';


async function init() {
    startServer(config.WEB_PORT)
}

init().then(async () => {})