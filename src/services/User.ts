import {userRepository} from '../database/repository'

interface user {
    firstName: string,
    lastName: string,
    password: string,
    username: string,
    phoneNumber: string,
    age: number
}

export default class User {
    async addUser(user: user) {
        const addedUser = await userRepository.insert({
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            username: user.username,
            phoneNumber: user.phoneNumber,
            age: user.age
        })
        return !!addedUser
    }

    async getUsers(pageNum: number) {
        return userRepository.find({
            order: {
                id: "DESC"
            },
            skip: pageNum * 7,
            take: 7
        })
    }
}







