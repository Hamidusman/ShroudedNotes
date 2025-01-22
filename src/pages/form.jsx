export default function Text() {
    return(
        <section className="my-10 w-[100%] flex justify-center">
            <form className="px-6 bg-gray rounded-2xl bg- flex flex-col gap-5 py-5">
                <div className="flex w-full flex-col gap-5 justify-center items-center">
                    <h2 className="text-2xl font-semibold">Send A Note To Nito</h2>
                    <textarea name="" 
                    className="text-lg w-full p-3 bg-inherit border-b-2 focus:outline-none border-b-accent"
                    placeholder="Leave a message here"></textarea>
                    <button className="bg-accent text-white font-semibold py-2 px-16 rounded-md">Send</button>
                </div>
                <p className="text-[14px]">say what you think about nito, whether good or bad.</p>
            </form>
        </section>

    )
}