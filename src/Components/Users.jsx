import React from 'react'

const Users = ({id, email, name}) => {
  return (
    <div className=' items-center flex justify-between w-[600px] text-center mx-auto mt-4'>
        <span className='mr-4 bg-gray-300 rounded-lg p-4 '>{name}</span>
        <span className='mr-4 bg-gray-300 rounded-lg p-4'>{email}</span>
        <span className=''>
            <button className='mr-4 bg-teal-300 rounded-lg p-4'>Edit</button>
            <button className='mr-4 bg-teal-300 rounded-lg p-4'>Delate</button>
        </span>
    </div>
  )
}

export default Users