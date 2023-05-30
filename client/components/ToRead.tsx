import * as R from '../../common/Book'

export default function ToRead(book: R.Book) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.rating}</p>
    </div>
  )
}
