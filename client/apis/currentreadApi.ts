import request from 'superagent'
import { Book, BookInfo } from '../../common/Book'

const currentreadUrl = 'api/v1/current'

export function getCurrentReadBooks(): Promise<Book[]> {
  return request.get(currentreadUrl).then((res) => res.body)
}

export function postOneCurrent(book: BookInfo) {
  return request
    .post(currentreadUrl)
    .send(book)
    .then((res) => {
      return res.body
    })
}
