export const booksReducer = (state, { type, payload }) => {
  let tempState = state;
  switch (type) {
    case "CHANGE_CATEGORY":
      tempState = {
        ...tempState,
        books: tempState.books.map((book) =>
          book.id === payload.id ? { ...book, category: payload.value } : book
        ),
      };
      break;
    case "SEARCH_BOOKS":
      tempState = {
        ...tempState,
        searchText: payload,
      };
      break;
    default:
      break;
  }

  if (tempState.searchText.length) {
    tempState = {
      ...tempState,
      filteredBooks: tempState.books.filter(
        ({ title, author }) =>
          title.toLowerCase().includes(tempState.searchText.toLowerCase()) ||
          author.toLowerCase().includes(tempState.searchText.toLowerCase())
      ),
    };
  } else {
    tempState = {
      ...tempState,
      filteredBooks: [],
    };
  }

  return tempState;
};
