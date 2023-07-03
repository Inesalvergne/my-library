export function Book({ book }) {
  return (
    <li>
      <p>{book.title}</p>
      <img src={`https://covers.openlibrary.org/b/id/${book .cover_i}-L.jpg`} alt={book.title}></img>
    </li>
  )
}
