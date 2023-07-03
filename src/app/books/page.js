import { BookList } from "@/components/book-list"

export default function BooksPage() {
  return (
    <>
      <h1>Search for your favorite books!</h1>
      <ShowBooks />
    </>
  )
}

async function ShowBooks() {
  const books = await FetchBooks()
  return <BookList books={books} />
}

async function FetchBooks() {
  const url = `https://openlibrary.org/search.json?author=jack+kerouac`

  const results = await fetch(url)
  const data = await results.json()
  return data.docs

  // fetch(url)
  //   .then(response => response.json())
  //   .then((data) =>
  //     data.docs.forEach((book) => {
  //       console.log(book.title)
  //     })
  //   )
}
