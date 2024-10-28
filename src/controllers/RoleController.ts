import RoleModal from '@/modals/RoleModal'
import { Request, Response } from 'express'

class RoleController {
  static getRoles = async (req: Request, res: Response) => {
    const roles = await RoleModal.getRoles()

    return res.status(200).json({
      data: roles,
      success: true,
    })
  }

  static createRole = async (req: Request, res: Response) => {
    const { name } = req.body

    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'name is required',
      })
    }

    // if role exists
    const role = await RoleModal.getRoleByName(name)
    if (role.length)
      return res.status(400).json({
        success: false,
        message: 'role already exist',
      })

    const newRole = await RoleModal.createRole({
      name,
    })

    return res.status(200).json({
      success: true,
      message: 'role created',
      data: newRole,
    })
  }
}

export default RoleController
