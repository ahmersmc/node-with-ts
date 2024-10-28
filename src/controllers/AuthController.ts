import { Request, Response } from 'express'

import AuthModal from '../modals/AuthModal'

class AuthController {
  static loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body

    if (!(email && password)) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }

    const user = await AuthModal.getUserByEmail(email)

    if (user.length)
      return res.status(200).json({
        data: user,
        success: true,
        message: 'User found',
      })
    else
      return res.status(404).json({
        data: user,
        success: false,
        message: 'User not found',
      })
  }

  static registerUser = async (req: Request, res: Response) => {
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
    const user = await AuthModal.getUserByEmail(email)
    if (user.length)
      return res.status(400).json({
        success: false,
        message: 'User already exist',
      })

    const newUser = await AuthModal.createUser({
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

    console.log({ newUser })
    // console.log({ newUser:newUser.config.values[0].name })
    return res.status(200).json({
      success: true,
      message: 'User created',
    })
  }
}

export default AuthController
