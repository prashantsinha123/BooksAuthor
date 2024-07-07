import "./App.css";
import SearchBar from "./Components/SearchBar";
import ProfileCard from "./Components/ProfileCard";
import { useEffect, useContext } from "react";
import AddBook from "./Components/AddBook";
import BookContext from "./context/BookContext";

function App() {
  const {fetchBooks, handleOnSubmit} = useContext(BookContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <>
      <div className="searchBar">
        <SearchBar onSubmit={handleOnSubmit} />
      </div>
      <div className="app">
        <ProfileCard  />
        <AddBook  />
      </div>
    </>
  );
}

export default App;
