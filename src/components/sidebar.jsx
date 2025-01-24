import { useState } from "react"
import Layout from "../layout"
import Layout2 from "../layout2"

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
                    <ul className="flex flex-col gap-3">
                        <li className="px-5 py-2 hover:bg-accent rounded-xl transition duration-500 ease-in-out">Dashboard</li>
                        <li className="px-5 py-2 hover:bg-accent rounded-xl transition duration-500 ease-in-out">Messages</li>
                    </ul>
                </div>
            </aside>
        </section>
    )
}