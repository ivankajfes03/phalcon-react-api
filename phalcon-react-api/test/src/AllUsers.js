import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
const AllUsers = (props) => {
    return(
        <div>
            {console.log(props)}
            {props.data.map((item)=>{
                return(       
                    <p key={item.id}>
                        Id: {item.id}, 
                        Name: {item.name}, 
                        Email: {item.email},
                        <button type="submit" 
                        onClick={()=>{props.handleDelete(item.id)}}>Delete
                        </button>   
                        <Link to={`/edit/${item.id}`}>
                            <button>Edit</button>
                        </Link>
                    </p>            
                                
                )                
            })}
        </div>
    )
}

export default AllUsers;