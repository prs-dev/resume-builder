import React, { useState } from 'react'
import { inputStyles, headingStyle } from '../styles/input'
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete, MdUpdateDisabled } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { ImCross } from "react-icons/im";
import ExpForm from './ExpForm';

const Form = ({ data, setData }) => {
  const [skill, setSkill] = useState('')
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
    setData(prev => ({ ...prev, education: newArr }))
  }

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...data.education]
    updatedEducation[index][field] = value
    setData(prev => ({ ...prev, education: updatedEducation }))
  }

  // const handleSkillChange = e => {
  //     const updatedSkills = [...data?.skills, e.target.value]
  //     setData(prev => ({...prev, skills: updatedSkills}))
  // }

  console.log(inputStyles())
  console.log(data)
  return (
    <>
      <form action="" onSubmit={e => e.preventDefault()} className='flex flex-col gap-4'>
        <label htmlFor="">Name</label>
        <input className='shadow-sm p-2' placeholder='Enter Name' type="text" name="name" id="" value={data?.name} onChange={handleChange} />
        <label htmlFor="">Title</label>
        <input className="shadow-sm p-2" placeholder='Enter Title' type="text" name="title" id="" value={data?.title} onChange={handleChange} />
        <label htmlFor="">Email</label>
        <input className='shadow-sm p-2' type="email" placeholder='Enter Email' name="email" id="" value={data?.email} onChange={handleChange} />
        <label htmlFor="">Phone</label>
        <input className='shadow-sm p-2' type="number" placeholder='Enter phone number' name="phone" id="" value={data?.phone} onChange={handleChange} />
        <div className={headingStyle()}>
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
        <button type='button' onClick={addEducation}><IoIosAddCircleOutline size="2em" /></button>
      </form>
      <div>
        <form className='my-4 flex flex-col gap-2' onSubmit={e => e.preventDefault()}>
          <p className={headingStyle()}>Skills</p>
          <input type="text" name="" id="" className={`${inputStyles()} w-full`} value={skill} onChange={e => setSkill(e.target.value)} onKeyDown={e => {
            if (e.key === "Enter") {
              if(data?.skills?.includes(skill)) {
                window.alert("skill already added")
                return 
              }
              if (data?.skills?.length < 10 && skill.length !== 0) {
                const updatedSkills = [...data?.skills, skill]
                setData(prev => ({ ...prev, skills: updatedSkills }))
                setSkill('')
              } else if (skill.length === 0) {
                window.alert('not allowed')
                return 
              }
               else {
                window.alert("You can add only 10 skills !")
                return 
              }
            }
          }} />
        </form>
        <div className='flex gap-2 flex-wrap'>
          {data?.skills?.map(item => (
            <div className='flex items-center gap-2 p-1 rounded-sm shadow-md'>
              <span>{item}</span>
              <button className='text-red-400' onClick={() => setData(prev => ({ ...prev, skills: data?.skills?.filter(i => i !== item) }))
              }><ImCross /></button>
            </div>
          ))}
        </div>
      </div>
      <ExpForm {...{data, setData}}/>
    </>
  )
}

export default Form