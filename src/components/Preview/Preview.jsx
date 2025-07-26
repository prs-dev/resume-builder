import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const Preview = ({data}) => {
  console.log("test",data)
  console.log("test",Object.values(data).every(i => i === ''))
  return (
    <div className='p-2 flex gap-4 flex-col '>
      {Object.values(data).every(i => i === '') && <h1 className='text-gray-400'>Preview</h1>}
      <h1 className='text-4xl'>{data?.name}</h1>
      <p className='text-sm'>{data?.title}</p>
      <div className='flex items-center justify-between shadow-sm p-2 rounded-sm'>
        <div className="flex gap-2 items-center">
          {data.email && <MdEmail />}
          <p className='text-sm'>{data?.email}</p>
        </div>
        <div className="flex gap-2 items-center">
          {data.phone && <MdLocalPhone />}
          <p className='text-sm font-bold'>{data?.phone}</p>
        </div>
      </div>
      <div>
        <h2 className="text-xl my-2 underline py-2">Education</h2>
        <ul>
          {data?.education?.map(item => <li className="list-disc flex flex-col text-sm gap-2">
            <div>School: {item.school}</div>
            <div>Degree: {item.degree}</div>
            <div>Duration: {item.start} - {item.end}</div>
            <hr className="my-2"/>
          </li>)}
        </ul>
      </div>
      <div>
        <h2 className="text-xl my-2 underline py-2">Skills</h2>
        <ul className="p-2 text-sm">
          {data?.skills?.map(item => <li className="list-decimal">{item}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Preview