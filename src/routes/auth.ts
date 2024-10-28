import { Router } from 'express'

const authRouter = Router()

import AuthController from '../controllers/AuthController'

authRouter.get('/', (req, res) => {
  AuthController.loginUser(req, res)
})

export default authRouter
