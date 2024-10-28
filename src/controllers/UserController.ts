import UserModal from '@/modals/UserModal'
import { Request, Response } from 'express'

class UserController {
  static createUser = async (req: Request, res: Response) => {
    const {
      sid,
      name,
      image,
      email,
      contact,
      role_id,
      password,
      emergency_name,
      emergency_contact,
    } = req.body

    if (
      !sid ||
      !name ||
      !image ||
      !email ||
      !role_id ||
      !contact ||
      !password ||
      !emergency_name ||
      !emergency_contact
    ) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }

    // if user exists
    const user = await UserModal.getUserByEmail(email)
    if (user.length)
      return res.status(400).json({
        success: false,
        message: 'User already exist',
      })

    const newUser = await UserModal.createUser({
      sid,
      name,
      image,
      email,
      contact,
      role_id,
      password,
      emergency_name,
      emergency_contact,
    })

    return res.status(200).json({
      success: true,
      message: 'User created',
      data: newUser,
    })
  }

  static getUsers = async (req: Request, res: Response) => {
    const users = await UserModal.getUsers()

    return res.status(200).json({
      data: users,
      success: true,
    })
  }
}

export default UserController
