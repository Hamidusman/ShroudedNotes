import { useState } from "react"
import MessageModal from "./animations/modal"
import { FaExpandArrowsAlt } from "react-icons/fa"
import { LuExpand } from "react-icons/lu"

export default function Messages({ message }) {
    const [modalOpen, setModalOpen] = useState(false)
    const handleModal = () =>{
        setModalOpen(true)
    }
    return (
        
        <div className="cursor-pointer flex gap-3 h-fit flex-wrap justify-center">
            <article onClick={handleModal} className="p-2 h-fit bg-gray sm:w-[390px] rounded-2xl">
                <div className="text-[15px] border-2 p-5 border-accent rounded-2xl flex flex-col gap-6">
                    <p>{message}</p>
                    <p>On 20th June 2024 11:20PM</p>
                    <LuExpand className=" text-accent" />

                </div>

            </article>
            {modalOpen && (
                <MessageModal
                    text={message}
                    date='sdw'
                    isOpen={modalOpen} setIsOpen={setModalOpen}/>
            )}
            
        </div>
    )
}