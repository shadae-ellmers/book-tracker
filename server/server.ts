import express from 'express'
import path from 'path'
import books from './routes/read'
import toread from './routes/toread'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/books', books)
server.use('/api/v1/toread', toread)

// Wildcard route
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

export default server
