import Auth from "./Auth";

export class Device{
    constructor(private readonly authService:Auth) {
    }

    async addDevice(token:string, unitName:string){
        await this.authService.hasAccess(token)

    }

}