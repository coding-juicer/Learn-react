import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState("")
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/coding-juicer')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center text-5xl m-4 bg-gray-600 text-white p-5'>
      Github follower:{data.followers}
      <img className = "mx-auto my-8 rounded-full" src={data.avatar_url} alt="git picture" />
    </div>
  )
}

export default Github

export const githubInfopLoader= async () =>{
    const response = await fetch('https://api.github.com/users/coding-juicer')
    return response.json()
} 