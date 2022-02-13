export default class Auth{

    async login(username: string, password: string){
    }
    async hasAccess(token: string) : Promise<boolean>{
        return await new Promise<boolean>(()=>{})
    }
}