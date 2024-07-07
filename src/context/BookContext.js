import { createContext, useCallback, useState } from "react";
import {
  searchBooks,
  searchBookById,
  addBook,
  editBookById,
  deleteBookById
} from "../Components/BookService";

const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const resultSet = await searchBooks();
    setBooks(resultSet);
  }, []);

  const handleOnSubmit = async (term) => {
    const resultSet = await searchBookById(term);
    setBooks(resultSet);
  };

  const onCreate = async (details) => {
    const result = await addBook(details);
    setBooks(result);
  };

  const editBookByIdAsync =async (details)=>{
    const response = await editBookById(details);
    const updatedBooks = books.map((book) =>{
        if(book.id === details.id){
            return {...book, ...response}
        }
        return book;
    });
    setBooks(updatedBooks);
  }

  const deleteBookByIdAsync = async (id)=>{
    const response = deleteBookById(id);
    if(response){
      const updatedBooks = books.filter((book)=>{
          return book.id !== id;
      });
      setBooks(updatedBooks);
    }
  }

// Module 8 & 9 of udemy course
  const valueToShare = {
    books,
    fetchBooks,
    handleOnSubmit,
    onCreate,
    editBookByIdAsync,
    deleteBookByIdAsync
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;
