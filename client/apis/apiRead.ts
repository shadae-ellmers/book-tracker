import request from 'superagent'
import { Read } from '../../common/Read'

export function getBooks(): Promise<Read[]> {
  return request.get('/api/v1/read').then((res) => res.body)
}
