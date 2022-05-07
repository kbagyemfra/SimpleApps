import { v4 as uuidv4 } from "uuid";

export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          authour: action.book.author,
          id: uuidv4(),
        },
      ];

    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// { title: "book of Genesis", author: "Moses", id: 1 },
// { title: "book of Exodus", author: "Moses", id: 2 },
// { title: "book of Leviticus", author: "Moses", id: 3 },
// { title: "book of Numbers", author: "Moses", id: 4 },
// { title: "book of Duetoronomy", author: "Moses", id: 5 },
// { title: "book of Joshua", author: "Joshua", id: 6 },
// { title: "book of Judges", author: "Samuel", id: 7 },
// { title: "book of Ruth", author: "Samuel", id: 8 },

//   const addBook = (title, author) => {
//     setBooks([...books, { title: title, author: author, id: uuidv4() }]);
//   };

//   const removeBook = (id) => {
//     setBooks(books.filter((book) => book.id !== id));
//   };
