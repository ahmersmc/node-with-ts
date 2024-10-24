import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'

import validateToken from './middlewares/jwt'
import generateToken from './utils/jwtUtils'

const PORT = 3005
const app = express()

// Middleware
app.use(bodyParser.json())
// Middleware for JWT Token Validation

// Define a route for the root path ('/')
app.get('/', (req: Request, res: Response) => {
  // Send a response to the client
  res.send('Hello, TypeScript + Node.js + Express!')
})

// Hardcoded User Data (In a real-world scenario, this would be retrieved from a database)
const user = {
  id: 1,
  username: 'johnDoe',
  password: 'password',
}

// Login Route
app.post('/login', (req, res) => {
  console.log({req})
  const { username, password } = req.body

  // console.log({ username, password })

  // Check if username and password match
  if (username === user.username && password === user.password) {
    // Generate JWT token
    const token = generateToken({ id: user.id, username: user.username })

    res.json({
      success: true,
      message: 'Authentication successful!',
      token: token,
    })
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid username or password',
    })
  }
})

// Protected Route
app.get('/protected', validateToken, (req: any, res: any) => {
  res.json({
    success: true,
    message: 'Welcome to the protected route!',
    user: req.user,
  })
})

// Start the server and listen on the specified PORT
app.listen(PORT, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${PORT}`)
})
