import express from 'express';
const Router = express.Router()
import userRoutes from "./User"


Router.use('/user', userRoutes)


export default Router