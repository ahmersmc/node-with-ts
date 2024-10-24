import { sign } from 'jsonwebtoken'

const generateToken = (payload: string | Buffer | object) => {
  const jwtSecret = process.env.JWT_SECRET

  // if env missing
  if (!jwtSecret) return ''

  const options = { expiresIn: '1h' }

  const token = sign(payload, jwtSecret, options)
  return token
}

export default generateToken
