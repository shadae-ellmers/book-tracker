import request from 'superagent'
import { GoogleBook } from '../../common/Book'

const googleUrl = 'https://www.googleapis.com/books/v1/volumes?q='

export function searchForBook(book: string): Promise<GoogleBook[]> {
  return (
    request
      .get(`${googleUrl}${book}+&key=${process.env.GOOGLE_KEY}&maxResults=5`)
      .set('Content-Type', 'application/json')
      // .set('Authorization', `Bearer ${process.env.GOOGLE_KEY}`)
      // .set('Authorization', `Bearer ${process.env.VERCEL_KEY}`)
      .then((res) => {
        return res.body
      })
  )
}
