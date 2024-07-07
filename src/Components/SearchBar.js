import { useState } from "react";

function SearchBar({onSubmit}){
    const [searchText, setSearchedText] =useState('');
    const  handleOnChange=(e)=>{
        setSearchedText(e.target.value);
    }
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onSubmit(searchText);
    }
    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={searchText} type="text" placeholder="Enter your text here..."  onChange={handleOnChange}/>
               
             </form>
        </div>
            
        
    );
}

export default SearchBar;