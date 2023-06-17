import { Link } from "react-router-dom";
import { useBooks } from "../context/BooksProvider";
import Category from "../components/Category";

export default function Home() {
  const {
    booksData: { categories },
  } = useBooks();

  return (
    <section className="">
      <header className="border-b p-4">
        <nav className="mx-auto flex w-[90vw] justify-between">
          <h1 className="text-2xl font-bold">📚BookShelf</h1>
          <button className="rounded-md border border-gray-500 px-2 py-1 active:bg-gray-100">
            <Link to="/search">Search</Link>
          </button>
        </nav>
      </header>
      <main className="mx-auto my-8 flex max-w-[80vw] flex-col gap-4">
        {categories.map((cat) => (
          <Category key={cat.id} bookCategory={cat} />
        ))}
      </main>
    </section>
  );
}
