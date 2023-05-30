import { Link } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'
import ToRead from './ToRead'

export default function ToReadList() {
  const toread = useAppSelector((state) => state.toread)

  return (
    <div>
      <Link to="/addbook">Add Books</Link>
      <div>
        {toread.map((book) => (
          <div key={book.id}>
            <ToRead {...book} />
          </div>
        ))}
      </div>
    </div>
  )
}
