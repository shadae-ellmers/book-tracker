import express from 'express'
import { getAllCurrentRead } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getAllCurrentRead()
    .then((books) => {
      res.json(books)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
