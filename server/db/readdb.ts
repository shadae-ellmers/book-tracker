import connection from './connection'
import { Read, ReadInfo } from '../../common/Read'

// get all books

export function getAllBooks(db = connection): Promise<Read[]> {
  return db('read').select('*')
}

// get a book

export function getBook(id: number, db = connection): Promise<Read> {
  return db('read').first().where({ id })
}

// add book

export function addBook(book: ReadInfo, db = connection): Promise<Read> {
  return db('read')
    .insert(book)
    .then(([id]) => ({ id, ...book }))
}
