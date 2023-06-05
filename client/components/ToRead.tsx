import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Book } from '../../common/Book'
import { useEffect } from 'react'
import { fetchToRead } from '../actions/toread'
import { addToCurrent } from '../actions/currentread'

export default function ToRead() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const toread = useAppSelector((state) => state.toread as Book[])

  useEffect(() => {
    dispatch(fetchToRead())
  }, [dispatch])

  const clickHandler = (book: Book) => {
    dispatch(addToCurrent(book))
    navigate('/')
  }

  return (
    <div>
      <Link to="/addtoread">Add Books</Link>
      <div>
        {toread.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={() => clickHandler(book)}>
              Currently Reading
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
