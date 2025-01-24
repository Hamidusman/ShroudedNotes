import { FaHamburger } from 'react-icons/fa'
import Logo from './assets/logo.png'
import { IoMdMenu } from 'react-icons/io'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Layout2({children}) {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div className='relative w-full'>
            <header className="fixed top-0 left-0 w-full px-4 py-3 bg-primary flex justify-between items-center z-50">
                {/* Logo */}
                <img src={Logo} alt="Logo" className="w-[180px] md:w-[220px]" />
                

                {/* Mobile Menu Icon */}
                <IoMdMenu size={40} 
                onClick={handleMenu}/>
                
            </header>
            {menuOpen && (
                <nav className="text-lg mt-16 fixed top-0 left-0 w-full h-screen bg-gray text-white flex flex-col items-start p-8 gap-6 z-40">
                
                    <Link
                        to="/"
                        onClick={handleMenu}
                        className="text-lg p-2 rounded hover:bg-gray-700 w-full"
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/messages"
                        onClick={handleMenu}
                        className="text-lg p-2 rounded hover:bg-gray-700 w-full"
                    >
                        Messages
                    </Link>
                    <button
                        onClick={handleMenu}
                        className="mt-5 bg-soft text-white py-3 pl-3 pr-60 rounded-lg hover:bg-red-600 transition"
                    >
                        Exit
                    </button>
                </nav>
            )}
            <main className='mt-10'>
                {children}
            </main>
        </div>
    )
}