import React from 'react'

const Addusers = ({onAdd}) => {
  const handleOnSubmit = (e) =>{
    e.preventDefault();
    onAdd(e.target.name.value,e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = ""
    
  }

    return (

    <div className='items-center flex justify-between w-[600px] text-center mx-auto mt-4'>
        <form onSubmit={handleOnSubmit} className='mb-4'>
            <h3 className='font-bold text-3xl mb-4'>Add user</h3>
            <input type="text" placeholder='Name' name='name' />
            <input type="text" placeholder='Email' name='email' />
            <button className='bg-green-600 px-4 py-2 rounded-lg' onSubmit={handleOnSubmit}> Add </button>
        </form>
    </div>
  )
}

export default Addusers