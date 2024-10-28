import { verify } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const success = false
  const jwtSecret = process.env.JWT_SECRET

  // if env missing
  if (!jwtSecret)
    return res
      .status(500)
      .json({ success, message: 'Server configuration error' })

  // if header missing
  const authHeader = req.headers.authorization
  if (!authHeader)
    return res.status(401).json({ success, message: 'Token is not provided' })

  const token = authHeader.split(' ')[1] // Bearer <token>

  verify(token, jwtSecret, (err, payload) => {
    // on error
    if (err) return res.status(403).json({ success, message: 'Invalid token' })

    // append  user in request
    // @ts-ignore
    req.user = payload
    next()
  })
}

export default validateToken
