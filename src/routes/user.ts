import { Router } from 'express'
import UserController from '../controllers/UserController'

const userRouter = Router()

userRouter.post('/', (req, res) => {
  UserController.createUser(req, res)
})

export default userRouter
