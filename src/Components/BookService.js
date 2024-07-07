import axios  from "axios";

const baseUrl="https://localhost:44366/api/Books";
    const searchBooks = async ()=>{
        const response= await axios.get(baseUrl);
        return response.data;
    }

    const searchBookById= async (term)=>{
        const response=await axios.get(baseUrl+'/'+term);
        return response.data;
    }

    const addBook= async(details)=>{
        const response = await axios.post(baseUrl + '/', {
            params :{
                details
            }
        });
        return response.data;
    }

   const editBookById =async(details) => {
     const response = await axios.put(baseUrl +'/',details,{
        headers: {
            'Content-Type': 'application/json'
          }
     });
     return response.data;
   }

   const deleteBookById = async(id)=>{
    let response;
    try{
    response = await axios.delete(baseUrl+'/', {
        params:{
            id
        }
    });
    }catch(err){
       console.log(err.message,"is the actual error");
    }
    return response.data;
   }

export { searchBooks, searchBookById, addBook, editBookById, deleteBookById};