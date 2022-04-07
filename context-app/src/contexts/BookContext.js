import React, { useState, createContext } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "book of Genesis", id: 1 },
    { title: "book of Exodus", id: 2 },
    { title: "book of Leviticus", id: 3 },
    { title: "book of Numbers", id: 4 },
    { title: "book of Duetoronomy", id: 5 },
    { title: "book of Joshua", id: 6 },
    { title: "book of Judges", id: 7 },
    { title: "book of Ruth", id: 8 },
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
