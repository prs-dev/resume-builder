import React from 'react'
import { inputStyles, headingStyle } from '../styles/input'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

const ExpForm = ({ data, setData }) => {

    const handleDelExp = index => {
        const updatedExp = data?.experience?.filter((item, i) => i !== index)
        // console.log("testo", updatedExp)
        setData(prev => ({...prev, experience: updatedExp}))
        // console.log(index)
    }

    const handleChange = (event, index) => {
        const updatedExp = data.experience.map((item, i) => {
            return i === index ? {
                ...item,
                [event.target.name] : event.target.value
            } : item
        })
        setData(prev => ({...prev, experience: updatedExp}))
    }

    return (
        <>
            <h2 className={`${headingStyle()} mt-8`}>Experience Details</h2>
            <form className='flex flex-col my-2 gap-2'>
                {data?.experience?.map((item, i)=> (
                    <>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="">Company</label>
                                <input value={item.company} onChange={(e) => handleChange(e, i)} className={inputStyles()} type="text" name="company" id="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="">Role</label>
                                <input value={item.role} onChange={(e) => handleChange(e, i)} className={inputStyles()} type="text" name="role" id="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="">Start</label>
                                <input value={item.start} onChange={(e) => handleChange(e, i)} className={inputStyles()} type="date" name="start" id="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="">End</label>
                                <input value={item.end} onChange={(e) => handleChange(e, i)} className={inputStyles()} type="date" name="end" id="" />
                            </div>
                            <div className='flex items-center justify-center text-red-500 border-1 p-2 rounded-md'>
                                <button onClick={() => handleDelExp(i)} type='button'><MdDelete /></button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Description</label>
                            <textarea value={item.description} onChange={(e) => handleChange(e, i)} className={inputStyles()} name="description" id="" />
                        </div>
                    </>
                ))}
                <button type='button' className='my-2'><IoIosAddCircleOutline size="2em" onClick={() => {
                    setData(prev => ({
                        ...prev, experience: [...prev.experience, {
                            company: '',
                            role: "",
                            start: "",
                            end: "",
                            description: ''
                        }]
                    }))
                }} /></button>
            </form>
        </>
    )
}

export default ExpForm