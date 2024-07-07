import { useContext, useState } from "react";
import BookContext from "../context/BookContext";


function BookEdit({book, onSubmit}) {
    const {editBookByIdAsync} =useContext(BookContext);
    const [details, setDetails] = useState(
        {
            id: book.id,
            bookName: book.bookName,
            price: book.price,
            description: book.description,
            imageData:book.imageData
        }
      );

      const handleOnChange=(e)=>{
        const {name, value}= e.target;
        setDetails((prev)=>{
            return {...prev, [name]:value};
        });
      };
    
      const handleOnSubmit=(event)=>{
        event.preventDefault();
        onSubmit();
        editBookByIdAsync(details);
      }
    
   
    return (
        <form onSubmit = {handleOnSubmit} className="book-edit">
            <input className="input" name="bookName" onChange={handleOnChange} type="text" value={details.bookName} />
            <input className="input" name="price" onChange={handleOnChange} value={details.price} type="text" />
            <textarea  className="input" name="description" onChange={handleOnChange} value={details.description} />
                <button className="button is-primary">Save</button>
    </form>
    );
}

export default BookEdit;