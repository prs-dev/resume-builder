import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { useRef } from "react";
import html2pdf from 'html2pdf.js/dist/html2pdf.min'
import { IoPrintSharp } from "react-icons/io5";

const Preview = ({ data }) => {
  // console.log("test",data)
  // console.log("test",Object.values(data).every(i => i === ''))
  const dateFormatter = (date) => {
    // const options = {month: "long", year: "numeric"}
    // const formatter = new Intl.DateTimeFormat('en-US', options)
    // return formatter.format(date)
    const month = new Date(date).toDateString().split(" ")[1]
    const year = new Date(date).toDateString().split(' ')[3]
    console.log(month, year)
    return `${month} ${year}`
  }
  const contentRef = useRef(null)
  console.log("ref", contentRef)
  const generatePdf = () => {
    if (contentRef.current) {
      console.log("i am here")
      const opt = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 }, // better quality
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(contentRef.current).save();
      console.log("everything run")
    }
  };

  // console.log(html2pdf)
  return (
    <div className="flex flex-col gap-2 justify-between">
      <div className="self-end"><button onClick={generatePdf}><IoPrintSharp size={30} /></button></div>
      {/* dont use bg-gray-100 it will not work with pdf */}
      <div id="printable-stuff" className='flex gap-4 flex-col shadow-sm rounded-md p-10' ref={contentRef}>
        {/* {Object.values(data).every(i => i === '') && <h1 className='text-gray-400'>Preview</h1>} */}

        <h1 className='text-4xl'>{data?.name}</h1>
        <p className='text-sm'>{data?.title}</p>
        <div className='flex items-center justify-between shadow-sm p-2 rounded-sm'>
          <div className="flex gap-2 items-center">
            {data.email && <MdEmail />}
            <div className='text-sm'>{data?.email}</div>
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
              <hr className="my-2" />
            </li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-xl my-2 underline py-2">Skills</h2>
          <ul className="text-sm">
            {data?.skills?.map(item => <li>{item}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-xl my-2 underline py-2">Experience</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {
              data?.experience?.map(item => (
                <li className="flex flex-col gap-2">
                  <div>
                    <span>{item?.role}</span> -- <span>{item?.company}</span>
                  </div>
                  <div>
                    <span>{dateFormatter(item?.start)}</span> - <span>{dateFormatter(item?.end)}</span>
                  </div>
                  <div>
                    <p>{item?.description}</p>
                  </div>
                  <hr className="my-2" />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Preview