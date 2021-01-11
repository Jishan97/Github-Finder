import React, { useState,useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/AlertContext'

 const Search = ()=> {
  
    const githubContext = useContext(GithubContext);

    const alertContext = useContext(AlertContext);

    const [text,setText]  = useState('');

    const onChange=(e)=>{
        setText(e.target.value)
    }

    const onSubmit =(e)=>{
        e.preventDefault();
        if(text === ''){
            alertContext.setAlert('Enter something','light')
        }
        else{
            githubContext.searchUsers(text)
            setText('');

        }
    } 

  
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input value={text} type="text" name="text" 
                     onChange={onChange}
                     placeholder="search user...."/>
                    <input type="submit" value="Submit" className="btn btn-dark btn-block"/>
        
                </form>    
                {githubContext.users.length > 0 && 
                    <button className="btn btn-light btn-block"
                    onClick={githubContext.clearUsers}>Clear</button>  
                }
            
            </div>
        )
    
}

export default Search
