import request from 'superagent'
import { Book } from '../../common/Book'

const currentreadUrl = 'api/v1/current'

export function getCurrentReadBooks(): Promise<Book[]> {
  return request.get(currentreadUrl).then((res) => res.body)
}
