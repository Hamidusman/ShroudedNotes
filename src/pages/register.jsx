import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="sm:w-fit h-screen overflow-hidden flex justify-center items-center">
            <div className="hidden sm:block w-[50vw] h-[100vh] bg-accent">
d
            </div>
            <div className=" sm:w-[40vw] flex justify-center items-center">
                
                <form className="px-auto w-[340px] h-[480px] shadow-lg flex flex-col px-3">
                    <div className="flex">
                        
                        <h1 className="text-2xl font-bold mt-8">Register</h1>
                        <div></div>
                    </div>
                    <div className="flex flex-col mt-8">
                    <label>Username</label>
                        <input type="text" placeholder="Not_Hamid :)" className="border-2 rounded-md border-accent bg-primary focus:outline-none focus:bg-primary p-2" />
                    </div>
                    <div className="flex flex-col mt-8">
                        <label>Password</label>
                        <input type="password" placeholder="Password" className="border-2 rounded-md border-accent bg-primary focus:outline-none focus:bg-primary p-2" />
                        
                    </div>
                    <button className="bg-accent font-bold hover:bg-soft transition duration-500 ease-in-out text-white p-2 mt-8 rounded-md">Register</button>
                    <p className="text-center mt-8">Already have an account? <Link to="/" className="text-accent">Login</Link></p>
                </form>
            </div>

        </div>
    )
}