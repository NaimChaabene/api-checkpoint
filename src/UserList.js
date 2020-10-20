import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Userlist (){
 const [listOfUSer,setlistOfUSer]=useState(null);
   useEffect(()=>{
               axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{console.log(res)
                   setlistOfUSer(res.data)});
                 }
            )


    return(
        <div className='container'>
            {listOfUSer  && <div className='container1'>
                           {listOfUSer.map(user=><div  className='card'>
                                                <h1>{user.name}</h1>
                                                <h2>{user.username}</h2>
                                                <h3>{user.email}</h3>
                                                </div>
                                                 )}  
                       </div>
         }
      
        </div>
         
    )
}

export default Userlist;