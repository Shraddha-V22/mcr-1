import { useMemo } from "react";
import { useBooks } from "../context/BooksProvider";
import Book from "./Book";

export default function Category({ bookCategory }) {
  const {
    booksData: { books },
  } = useBooks();

  const categoryBooks = useMemo(() => {
    return books.filter(({ category }) => category === bookCategory.name);
  }, [books]);

  return (
    <section className="flex flex-col gap-4 rounded-md border p-4">
      <h1 className="border-b pb-2 text-xl font-semibold uppercase">
        {bookCategory.name}
      </h1>
      <section className="flex flex-wrap gap-8 p-2 px-4">
        {categoryBooks?.length > 0 ? (
          categoryBooks?.map((book) => <Book key={book.id} book={book} />)
        ) : (
          <p>No books in {bookCategory.name} category</p>
        )}
      </section>
    </section>
  );
}
