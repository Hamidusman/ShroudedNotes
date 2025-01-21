import Logo from './assets/logo.png'
export default function Layout() {
    return (
        <header className="mx-14 px-6 py-3 rounded-full bg-primary
            flex justify-between items-center">
            <img src={Logo} className='w-60'
            sizes='sm'/>
            <ul className="flex gap-14">
                <li>kkkk</li>
                <li>kkkk</li>
                <li>kkkk</li>
            </ul>

            <button className="bg-accent hover:bg-soft transition duration-500 px-3 py-2 rounded-lg">
                Get Started
            </button>

        
        </header>
    )
}