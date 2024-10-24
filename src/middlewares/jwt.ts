import { verify } from 'jsonwebtoken'

const validateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization

  if (authHeader) {
    const token = authHeader.split(' ')[1] // Bearer <token>

    verify(token, 'yourSecretKey', (err: any, payload: any) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: 'Invalid token',
        })
      } else {
        req.user = payload
        next()
      }
    })
  } else {
    res.status(401).json({
      success: false,
      message: 'Token is not provided',
    })
  }
}

export default validateToken
