import {createConnection} from 'typeorm'
import {User} from "./entities/User";


export default async function connectToDB() {
    await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        database: "simpleTypeScriptProject",
        username: "postgres",
        password: "admin",
        entities: [User],
        migrations: ['./migrations/*.js'],
        synchronize: true
    })
}






