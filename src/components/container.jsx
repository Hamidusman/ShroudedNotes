export default function Container({children}) {
    return (
        
        <section className="px-5 text-center py-10 flex gap-4 flex-col justify-center items-center">
            {children}
        </section>
    )
}