import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import profileRoutes from './routes/profiles.route'
import clientRoutes from './routes/clients.route'
import productRoutes from './routes/products.route'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())



app.use(profileRoutes)
app.use(clientRoutes)
app.use(productRoutes)

export default app