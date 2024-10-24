import { Request, Response } from 'express'

const User = require('../models/User')

class AuthController {
  registerUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.render('register', {
        name,
        email,
        password,
        error: 'fields are missing',
      })
    }

    const user = await User.findOne({ email })

    // if user exists
    if (user) {
      return res.render('register', {
        name,
        email,
        password,
        error: 'User already exists',
      })
    }

    const newUser = new User({
      name,
      email,
      password,
    })

    try {
      await newUser.save()
    } catch (error) {
      console.log({ errorWhileCreatingUser: error })
    }

    return res.render('register', {
      name: '',
      email: '',
      password: '',
      error: '',
    })
  }
}

export default AuthController
