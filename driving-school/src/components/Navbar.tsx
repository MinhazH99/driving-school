import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

function Navbar() {

    const [nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex justify-between items-center whitespace-nowrap h-24 max-w-[1240px] mx-auto px-4 s">
            <h1 className="w-full txt-3xl  text-white font-bold"> DrivePass</h1>
            <ul className="hidden md:flex text-slate-300 font-bold">
                <li className="p-4">Home</li>
                <li className="p-4">Book Lessons</li>
                <li className="p-4">Driving Tests</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className= {!nav ? ' md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 ease-in-out duration-500': 'fixed left-[-100%] '}>
                <ul className='pt-24 uppercase'>
                <li className="p-4">Home</li>
                <li className="p-4">Book Lessons</li>
                <li className="p-4">Driving Tests</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar