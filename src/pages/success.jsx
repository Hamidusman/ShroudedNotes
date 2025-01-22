import { Link } from "react-router-dom";

export default function Success() {
    return (
        <section className="my-10 w-[100%] flex justify-center">
            <form className="px-6 bg-gray rounded-2xl bg- flex flex-col gap-5 py-5">
                <div className="flex w-full flex-col gap-5 justify-center items-center">
                    <h2 className="text-2xl font-semibold">Message Has Been Sent To Nito</h2>
                    <p>Get in on the action as well</p>
                    
                    <Link to='/login' className="bg-accent text-white font-semibold py-2 px-16 rounded-md">Login</Link>
                </div>
            </form>
        </section>
        
    )
}