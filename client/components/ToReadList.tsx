import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Book } from '../../common/Book'
import { useEffect } from 'react'
import { fetchToRead } from '../actions/toread'

export default function ToReadList() {
  const dispatch = useAppDispatch()
  const toread = useAppSelector((state) => state.toread as Book[])

  useEffect(() => {
    dispatch(fetchToRead())
  }, [dispatch])

  return (
    <div>
      <Link to="/addbook">Add Books</Link>
      <div>
        {toread.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.rating}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
