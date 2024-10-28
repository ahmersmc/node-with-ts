import { Router } from 'express'

const rolesRouter = Router()

import RoleController from '../controllers/RoleController'

rolesRouter.get('/', (req, res) => {
  RoleController.getRoles(req, res)
})

export default rolesRouter
