import React from 'react'

const Preview = ({data, setData}) => {
  console.log("test",data)
  console.log("test",Object.values(data).every(i => i === ''))
  return (
    <div className='p-2 flex gap-4 flex-col '>
      {Object.values(data).every(i => i === '') && <h1 className='text-gray-400'>Preview</h1>}
      <h1 className='text-4xl'>{data?.name}</h1>
      <p className='text-sm'>{data?.title}</p>
      <div className='flex items-center justify-between'>
        <p className='text-sm'>{data?.email}</p>
        <p className='text-sm font-bold'>{data?.phone}</p>
      </div>
    </div>
  )
}

export default Preview