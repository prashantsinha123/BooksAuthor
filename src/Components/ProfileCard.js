import { useContext } from "react";
import ImageShow from "./ImageShow";
import BookContext from "../context/BookContext";
function ProfileCard() {
    const {books} = useContext(BookContext);
  if (!Array.isArray(books)) {
    const render = () => {
      return <ImageShow book={books} />;
    };
    return <div className="book-list">{render()}</div>;
  } else if (books.length === 0) {
    return <div>No data found</div>;
  } else {
    const renderedBooks = books.map((book) => {
      return <ImageShow book={book} />;
    });
    return <div className="book-list">{renderedBooks}</div>;
  }
}

export default ProfileCard;
