import React, { useEffect,useState } from "react";
import { useLoaderData } from 'react-router-dom'

function GitHub()
{
    const data=useLoaderData()
    /*const [data,setData]=useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/vrajvyas11')
  
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        setData(data)
    })
  },[])
  */
    return (
        <div className="text-center m-4 bg-gray-700 p-3 py-3">
           GitHub followers:{data.followers}
           <center>
<img  src={data.avatar_url} alt="git picture" width={300}/>
</center>
        </div>
        
    )
}

export default GitHub

export const  githubInfoLoader =async()=>{
    const response =await fetch('https://api.github.com/users/vrajvyas11')
    return response.json()
}