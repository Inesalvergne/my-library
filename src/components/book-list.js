import { Book } from "./book"

export function BookList() {
  const books = ["On the Road", "The Steppenwolf", "The Picture of Dorian Gray", "L'Étranger"]
  return (
    <ul>
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </ul>
  )
}
