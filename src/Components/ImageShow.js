import {  useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BookContext from "../context/BookContext";

function ImageShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookByIdAsync} = useContext(BookContext);

    const handleEditClick = ()=>{
        setShowEdit(!showEdit);
    }

    const handleSubmit = ()=>{
        setShowEdit(false);
    }
    let content = <><p className="title is-4">@{book.bookName}</p><p className="subtitle is-6">@{book.price}</p><p> {book.description} </p></>;
    if(showEdit){
        content = <BookEdit onSubmit={handleSubmit} book={book}/>
    }

    const handleDeleteClick = ()=>{
      deleteBookByIdAsync(book.id);
    }
  return (
    <div className="book-show" style={{ minHeight: "100%" }}>
      <img src={book.imageData} alt="Placeholder book data" />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default ImageShow;
