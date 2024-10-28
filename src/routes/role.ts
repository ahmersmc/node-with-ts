import { Router } from 'express'

const roleRouter = Router()

import RoleController from '../controllers/RoleController'

roleRouter.post('/', (req, res) => {
  RoleController.createRole(req, res)
})

export default roleRouter
