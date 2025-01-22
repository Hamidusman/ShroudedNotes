import { useState } from "react"

export default function Sidebar() {
    const [active, setActive] = useState(false)
    
    return (
        <aside>
            
            <div className="w-60 p-5 h-screen flex flex-col gap-4 bg-gray">
                <h3 className="text-2xl">Welcome User</h3>
                <ul className="flex flex-col gap-3">
                    <li className="px-5 py-2 hover:bg-accent rounded-xl transition duration-500 ease-in-out">Dashboard</li>
                    <li className="px-5 py-2 hover:bg-accent rounded-xl transition duration-500 ease-in-out">Messages</li>
                </ul>
            </div>
        </aside>
    )
}