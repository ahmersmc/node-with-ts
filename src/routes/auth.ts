import { Router } from 'express'

const authRouter = Router()

import AuthController from '../controllers/AuthController'

// router.get('/register', registerView)
authRouter.post('/', (req, res) => {
  AuthController.registerUser(req, res)
})
// router.get('/login', loginView)

export default authRouter
