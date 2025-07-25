import React, { useState } from 'react'
import { inputStyles } from '../styles/input'
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete, MdUpdateDisabled } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Form = ({ data, setData }) => {
  const handleChange = (e) => {
    setData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const addEducation = () => setData(prev => {
        return {
          ...prev,
          education: [
            ...prev.education,
            {
              school: '',
              degree: '',
              start: '',
              end: ""
            }
          ]
        }
      })

  const removeEducation = (index) => {
    // console.log(index)
    const newArr = data?.education.filter((item, i) => i !== index)
    // console.log("testum", newArr)
    setData(prev => ({...prev, education: newArr}))
  }

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...data.education]
    updatedEducation[index][field] = value
    setData(prev => ({...prev, education: updatedEducation}))
  }

  console.log(inputStyles())
  console.log(data)
  return (
    <>
      <form action="" className='flex flex-col gap-4'>
        <label htmlFor="">Name</label>
        <input className='shadow-sm p-2' placeholder='Enter Name' type="text" name="name" id="" value={data?.name} onChange={handleChange} />
        <label htmlFor="">Title</label>
        <input className="shadow-sm p-2" placeholder='Enter Title' type="text" name="title" id="" value={data?.title} onChange={handleChange} />
        <label htmlFor="">Email</label>
        <input className='shadow-sm p-2' type="email" placeholder='Enter Email' name="email" id="" value={data?.email} onChange={handleChange} />
        <label htmlFor="">Phone</label>
        <input className='shadow-sm p-2' type="number" placeholder='Enter phone number' name="phone" id="" value={data?.phone} onChange={handleChange} />
        <div className='text-lg font-semibold my-4'>
          <p>Education Details</p>
        </div>
        {data?.education?.map((item, i) => (
          <>
            <div className='flex gap-4 items-center justify-between'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="">School</label>
                <input value={item?.school} onChange={(e) => handleEducationChange(i, "school", e.target.value)} className={inputStyles()} placeholder='Enter School' type="text" name="school" id="" />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="">Degree</label>
                <input value={item?.degree} onChange={(e) => handleEducationChange(i, "degree", e.target.value)} className={inputStyles()} placeholder='Enter Degree' type="text" name="degree" id="" />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="">Start</label>
                <input onChange={(e) => handleEducationChange(i, "start", e.target.value)} value={item?.start} className={inputStyles()} type="date" name="start" id="" />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="">End</label>
                <input onChange={(e) => handleEducationChange(i, "end", e.target.value)} value={item?.end} className={inputStyles()} type="date" name="end" id="" />
              </div>
              <div className='flex items-center justify-center text-red-500 border-1 p-2 rounded-md'>
                <button type='button' onClick={() => removeEducation(i)}><MdDelete /></button>
              </div>
            </div>
            <div>
            </div>
          </>
        ))}
      </form>
      <button type='button' onClick={addEducation}><IoIosAddCircleOutline size="2em" /></button>
    </>
  )
}

export default Form