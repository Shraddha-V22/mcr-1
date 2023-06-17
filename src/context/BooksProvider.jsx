import { createContext } from "react";
import { booksReducer } from "../reducers/booksReducer";
import { useReducer } from "react";
import { books } from "../data/booksData";
import { categories } from "../data/categories";
import { useContext } from "react";

const BooksContext = createContext();

const initialBooks = {
  books: [...books],
  categories: [...categories],
  searchText: "",
  filteredBooks: [],
};

export default function BooksProvider({ children }) {
  const [booksData, booksDispatch] = useReducer(booksReducer, initialBooks);
  return (
    <BooksContext.Provider value={{ booksData, booksDispatch }}>
      {children}
    </BooksContext.Provider>
  );
}

export const useBooks = () => useContext(BooksContext);
