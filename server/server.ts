import express from 'express'
import path from 'path'
import read from './routes/read'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/read', read)

export default server
