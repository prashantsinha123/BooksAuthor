import { useState } from "react";

function AddBook({ onCreate }) {
  const [details, setDetails] = useState(
    {
        bookName:"",
        price: "",
        description: ""
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
    onCreate(details);
  }

 
  return (
    <div className="container">
      <form onSubmit={handleOnSubmit}>
        <div className="field">
          <label className="label">Book Name</label>
          <div className="control">
            <input className="input" onChange={handleOnChange} name="bookName" type="text" placeholder="Text input" />
          </div>
        </div>

        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input className="input" type="text" name="price" onChange={handleOnChange} placeholder="Text input" />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea className="textarea" name="description" onChange={handleOnChange} placeholder="Textarea"></textarea>
          </div>
        </div>
        <div className="buttons">
          <button class="button is-primary">Add Book</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
