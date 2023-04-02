import connection from './connection'
import { Read, ReadInfo } from '../../common/Read'

// get all books

export function getAllBooks(db = connection): Promise<Read[]> {
  return db('read').select('*')
}
