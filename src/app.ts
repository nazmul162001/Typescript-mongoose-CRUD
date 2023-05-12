import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()

//application route
import userRoutes from './app/modules/user/user.route'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// route
app.use('/api/v1/users', userRoutes)
export default app
