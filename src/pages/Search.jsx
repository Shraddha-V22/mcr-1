import { Link } from "react-router-dom";
import { useBooks } from "../context/BooksProvider";
import Book from "../components/Book";

export default function Search() {
  const {
    booksData: { filteredBooks, searchText },
    booksDispatch,
  } = useBooks();

  return (
    <section>
      <header className="mx-auto flex w-[80vw] gap-4 border-b p-4">
        <Link to="/" className="mx-auto flex w-[200px] justify-between">
          <h1 className="text-2xl font-bold">📚BookShelf</h1>
        </Link>
        <input
          type="text"
          placeholder="Search Book or Author"
          className="w-full flex-grow rounded-md border p-2 indent-1 outline-none"
          value={searchText}
          onChange={(e) =>
            booksDispatch({ type: "SEARCH_BOOKS", payload: e.target.value })
          }
        />
      </header>
      {searchText.length > 0 ? (
        <section className="mx-auto flex w-[80vw] flex-wrap justify-center gap-8 p-4">
          {filteredBooks?.length > 0 ? (
            filteredBooks?.map((book) => <Book key={book.id} book={book} />)
          ) : (
            <p className="mx-auto w-[fit-content] text-2xl">
              No book with title/author {searchText} found.
            </p>
          )}
        </section>
      ) : (
        <section className="mx-auto grid h-[70vh] w-[80vw] place-items-center p-4">
          <p className="text-2xl">Find your book here</p>
        </section>
      )}
    </section>
  );
}
