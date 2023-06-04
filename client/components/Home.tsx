import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Book } from '../../common/Book'
import { useEffect } from 'react'
import { fetchCurrentRead } from '../actions/currentread'

export default function Home() {
  const dispatch = useAppDispatch()
  const currentread = useAppSelector((state) => state.currentread as Book[])

  useEffect(() => {
    dispatch(fetchCurrentRead())
  }, [dispatch])

  return (
    <section>
      <div>
        <Link to="/read">Read</Link>
      </div>
      <div>
        <Link to="/toread">To Read</Link>
      </div>
      <h3>Currently Reading:</h3>
      <div>
        {currentread.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
