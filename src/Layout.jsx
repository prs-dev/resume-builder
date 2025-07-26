import { useState } from 'react'
import Form from './components/Form/Form'
import Preview from './components/Preview/Preview'

const Layout = () => {
    const [data, setData] = useState({
        name: '',
        title: "",
        email: "",
        phone: "",
        education: [
            {
                school: '',
                degree: '',
                start: '',
                end: ""
            }
        ],
        skills: [],
        experience: [
            {
                company: '',
                role: "",
                start: "",
                end: "",
                description: ''
            }
        ]
    })
  return (
    <div>
        <main className='flex p-4 h-screen'>
            <div className='w-1/2 pr-4'>
                <Form {...{data, setData}}/>
            </div>
            <div className='w-1/2 pl-4 bg-gray-100 shadow rounded'>
                <Preview {...{data}}/>
            </div>
        </main>
    </div>
  )
}

export default Layout