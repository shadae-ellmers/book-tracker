import * as R from '../../common/Read'

export default function Read(book: R.Read) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.rating}</p>
    </div>
  )
}
