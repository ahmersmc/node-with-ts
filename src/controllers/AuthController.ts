import { Request, Response } from 'express'

import UserModal from '@/modals/UserModal'
import generateToken from '@/utils/jwtUtils'

class AuthController {
  static loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body

    if (!(email && password)) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }

    const user = await UserModal.getUserByEmail(email)

    const token = generateToken({ user })

    if (user.length)
      return res.status(200).json({
        data: { token },
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
}

export default AuthController
