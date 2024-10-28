import { Router } from 'express'
import UserController from '../controllers/UserController'

const usersRouter = Router()

usersRouter.get('/', (req, res) => {
  UserController.getUsers(req, res)
})

export default usersRouter
