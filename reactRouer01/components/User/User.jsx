import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}= useParams()
  return (
    <div className='bg-gray-700 text-center text-white text-5xl py-5'>
      User: {userid}
    </div>
  )
}

export default User
