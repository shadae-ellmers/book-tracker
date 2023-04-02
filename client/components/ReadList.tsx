import { useAppSelector } from '../hooks/redux'
import Read from './Read'

export default function ReadList() {
  const read = useAppSelector((state) => state.read)
  return (
    <div>
      {read.map((book) => (
        <Read key={book.id} {...book} />
      ))}
    </div>
  )
}
