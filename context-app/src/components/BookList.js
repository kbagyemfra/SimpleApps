import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

// Functional Component
const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext); // translated to fuctional 1
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);

  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books
          ? books.map((book) => {
              return (
                <li key={book.id} style={{ background: theme.ui }}>
                  {book.title}
                </li>
              );
            })
          : "Loading....."}
      </ul>
    </div>
  );
};

export default BookList;
// {
//   /* <li style={{ background: theme.ui }}>The book of Romans</li>
//         <li style={{ background: theme.ui }}>the book of Hebrews</li>
//         <li style={{ background: theme.ui }}>The book of Acts</li> */
// }
