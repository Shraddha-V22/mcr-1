import { useState } from "react";
import { useBooks } from "../context/BooksProvider";
import CategoryInput from "./CategoryInput";

export default function Book({ book }) {
  const { booksDispatch } = useBooks();
  const [showCategories, setShowCategories] = useState(false);
  const { id, image, title, author, category } = book;

  const changeCategoryHandler = (e, id) => {
    const { value } = e.target;
    booksDispatch({ type: "CHANGE_CATEGORY", payload: { value, id } });
  };

  return (
    <section className="flex w-[200px] flex-col gap-1">
      <div className="relative shadow-lg">
        <img
          src={image}
          title={title}
          alt=""
          className="h-[300px] w-[200px] object-cover"
        />
        <div className="">
          <div
            onClick={() => setShowCategories((prev) => !prev)}
            className="absolute -bottom-3 -right-3 grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-green-700 text-sm text-white"
          >
            ▼
          </div>
          {showCategories && (
            <ul className="absolute -bottom-28 left-2 z-10 rounded-md bg-gray-200 p-2 shadow-md">
              <li className="flex gap-1 border-b border-gray-300 text-gray-500">
                <p className="invisible">✓</p>
                <p>move to...</p>
              </li>
              <CategoryInput
                category={category}
                cat="already read"
                catId="read"
                onChange={(e) => changeCategoryHandler(e, id)}
              />
              <CategoryInput
                category={category}
                cat="currently reading"
                catId="reading"
                onChange={(e) => changeCategoryHandler(e, id)}
              />
              <CategoryInput
                category={category}
                cat="want to read"
                catId="want-to"
                onChange={(e) => changeCategoryHandler(e, id)}
              />
              <CategoryInput
                category={category}
                cat="none"
                catId="none"
                onChange={(e) => changeCategoryHandler(e, id)}
              />
            </ul>
          )}
        </div>
      </div>
      <div className="px-2">
        <h3 className="line-clamp-2 text-lg">{title}</h3>
        <p className="text-gray-500">{author}</p>
      </div>
    </section>
  );
}
