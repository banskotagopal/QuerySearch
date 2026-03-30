import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../Redux/slice";

function Search()
{
    const dispatch = useDispatch()

    const [userText,setUserText] = useState('')
    function userInput(e)
    {
       e.preventDefault()
       if(!userText) return
       dispatch(setQuery(userText))
    }

    return (
       <div className="search">
       <form onSubmit={(e) =>{
         userInput(e)
       }}>
             <input value={userText} onChange={(e) =>{
                 setUserText(e.target.value)
                 
             }} type="text" placeholder="Search.." required></input>
            <button  className="btn3">Search</button>

       </form>
       </div>
    )
}

export default Search;