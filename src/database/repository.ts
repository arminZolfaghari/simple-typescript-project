import {getRepository} from 'typeorm'
import {User} from "./entities/User";
import connectToDB from "./index";



export const userRepository = getRepository(User)



