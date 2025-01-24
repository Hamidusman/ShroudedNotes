
import { IoMdMenu } from 'react-icons/io'
import Logo from './imgs/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Layout({children}) {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <>
            
            <header className="mx-14 px-6 py-3 z-50 rounded-full bg-primary
                flex justify-between items-center">
                <img src={Logo} className='w-60'
                sizes='sm'/>
                <nav className="hidden mr-24 md:flex gap-14">
                    <Link
                        to="/"
                        onClick={handleMenu}
                        className="p-2 w-full"
                    >
                        TCA
                    </Link>
                    <Link
                        to="/messages"
                        onClick={handleMenu}
                        className=" p-2 w-full"
                    >
                        Contact
                    </Link>
                </nav>

                <button className="hidden md:block bg-accent hover:bg-soft transition duration-500 ease-in-out px-3 py-2 rounded-lg">
                    Get Started
                </button>
                
                <div className='md:hidden'>
                    <IoMdMenu size={40}
                    onClick={handleMenu}/>
                </div>
                
                {menuOpen && (
                    <nav className="font-bold text-lg mt-16 fixed top-0 left-0 w-full h-screen bg-gray text-white flex flex-col items-start p-8 gap-6 z-40">
                    
                        <Link
                            to="/"
                            onClick={handleMenu}
                            className="p-2 w-full"
                        >
                            TCA
                        </Link>
                        <Link
                            to="/messages"
                            onClick={handleMenu}
                            className=" p-2 w-full"
                        >
                            Contact
                        </Link>
                    </nav>
                )}

            
            </header>
            {children}
        </>
    )
}