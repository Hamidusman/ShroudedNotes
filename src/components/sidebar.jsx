import { useState } from "react"
import Layout from "../layout"
import Layout2 from "../layout2"
import { Link } from "react-router-dom"
import { AiTwotoneDashboard } from "react-icons/ai"
import { IoIosText } from "react-icons/io"
import { BiLogOut } from "react-icons/bi"

export default function AlternateBar() {
    const [active, setActive] = useState(false)
    
    return (
        <section className="">
            <div className="lg:hidden">
                <Layout2 />
            </div>
            
            <aside className="hidden lg:block sticky top-0 left-0 h-screen">
                
                <div className="w-60 p-5 h-screen flex flex-col gap-4 bg-gray">
                    <h3 className="text-2xl">Welcome User</h3>
                    <nav className="flex flex-col items-start p-2 gap-6 z-40">
                        <Link
                            to="/"
                            className="p-2 flex gap-4 w-full hover:bg-accent_pade transition duration-500 ease-in-out rounded-lg"
                        >
                            <AiTwotoneDashboard size={24}
                                className="text-accent"/>
                            Dashboard
                        </Link>
                        <Link
                            to="/messages"
                            className="p-2 flex gap-4 w-full hover:bg-accent_pade transition duration-500 ease-in-out rounded-lg"
                        >
                            <IoIosText size={24}
                                className="text-accent"/>
                            Messages
                        </Link>

                        <button
                            className="p-2 flex gap-4 w-full hover:bg-accent_pade transition duration-500 ease-in-out rounded-lg"
                            >
                                <BiLogOut size={24}
                                    color="red"/>
                            Exit
                        </button>
                    </nav>
                </div>
            </aside>
        </section>
    )
}