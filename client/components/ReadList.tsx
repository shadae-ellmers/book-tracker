import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'
import Read from './Read'

export default function ReadList() {
  const read = useAppSelector((state) => state.read)
  return (
    <div>
      <Link to="/addbook">Add Books</Link>
      <div>
        {read.map((book) => (
          <Read key={book.id} {...book} />
        ))}
      </div>
    </div>
  )
}
