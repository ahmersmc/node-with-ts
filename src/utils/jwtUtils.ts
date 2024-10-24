import { sign } from 'jsonwebtoken'

const generateToken = (payload: string | Buffer | object) => {
  const secretKey = 'yourSecretKey' // Replace with your own secret key
  const options = {
    expiresIn: '1h', // Token expiration time
  }

  const token = sign(payload, secretKey, options)
  return token
}

export default generateToken
