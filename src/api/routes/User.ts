import express from "express"
import {userService} from "../../services";
const router = express.Router()


router.post('/', async (req, res) => {
    try {
        const userInfo = req.body
        const addedUser = await userService.addUser(userInfo)
        if (addedUser)
            return res.status(200).json(
                {
                    success: true
                }
            )
        return res.status(400).json(
            {
                success: false
            }
        )
    }
    catch (err) {
        console.log(err)
        return res.status(404).json(
            {
                success: false,
                message:`Failed to add user: ${err}`
            }
        )
    }
})



router.get('/', async (req, res) => {
    try {
        const {pageNum} = req.body
        const users = await userService.getUsers(pageNum)
        if (users)
            return res.status(200).json(
                {
                    success: true,
                    users
                }
            )
        else
            return res.status(400).json(
                {
                    success: false
                }
            )
    }
    catch (err) {
        console.log(err)
        return res.status(404).json(
            {
                success: false,
                message:`Failed to get users: ${err}`
            }
        )
    }
})


export default router