import * as R from '../../common/Book'

export default function Read(book: R.Book) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  )
}
