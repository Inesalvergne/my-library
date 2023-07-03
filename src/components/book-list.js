import { Book } from "./book"

export function BookList({ books }) {
  return (
    <ul>
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </ul>
  )
}
