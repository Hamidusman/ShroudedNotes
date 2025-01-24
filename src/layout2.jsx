import { FaHamburger } from 'react-icons/fa'
import Logo from './imgs/logo.png'
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
                <Image src={Logo} alt="Logo" className="w-[180px] md:w-[220px]" />
                

                {/* Mobile Menu Icon */}
                <IoMdMenu size={40} 
                onClick={handleMenu}/>
                
            </header>
            {menuOpen && (
                <nav className="font-bold text-lg mt-16 fixed top-0 left-0 w-full h-screen bg-gray text-white flex flex-col items-start p-8 gap-6 z-40">
                
                    <Link
                        to="/"
                        onClick={handleMenu}
                        className="p-2 w-full"
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/messages"
                        onClick={handleMenu}
                        className=" p-2 w-full"
                    >
                        Messages
                    </Link>
                    <button
                        onClick={handleMenu}
                        className="p-2 w-full"
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