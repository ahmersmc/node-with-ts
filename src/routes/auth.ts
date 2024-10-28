import { Router } from 'express'

const authRouter = Router()

import AuthController from '../controllers/AuthController'

authRouter.post('/', (req, res) => {
  AuthController.registerUser(req, res)

  // {
  //   "sid": "sid",
  //   "name": "name",
  //   "image": "image",
  //   "email": "email",
  //   "contact": "contact",
  //   "role_id": "5291db8a-561e-492d-bba6-fd7535077409",
  //   "password": "password",
  //   "emergency_name": "emergency_name",
  //   "emergency_contact": "emergency_contact"
  // }
})

export default authRouter
