import React from 'react'

const Form = ({data, setData}) => {
  const handleChange = (e) => {
    setData(prev => ({...prev, 
      [e.target.name] : e.target.value
    }))
  }
  console.log(data)
  return (
    <form action="" className='flex flex-col gap-4'>
        <label htmlFor="">Name</label>
        <input className='shadow-sm p-2' placeholder='Enter your name' type="text" name="name" id="" value={data?.name} onChange={handleChange}/>
        <label htmlFor="">Title</label>
        <input  className="shadow-sm p-2" type="text" name="title" id="" value={data?.title} onChange={handleChange}/>
        <label htmlFor="">Email</label>
        <input className='shadow-sm p-2' type="email" name="email" id="" value={data?.email} onChange={handleChange}/>
        <label htmlFor="">Phone</label>
        <input className='shadow-sm p-2' type="number" name="phone" id="" value={data?.phone} onChange={handleChange}/>
    </form>
  )
}

export default Form