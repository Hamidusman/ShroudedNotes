import Container from "../../components/container";
import Layout from "../../layout";

export default function Home() {
    return (
        <Layout>
            <div className="h-[80vh] flex justify-center">

            <Container>
                <p className=" px-3 py-1 text-soft border border-soft rounded-full">On Private Beta</p>
                <h2 className="text-4xl md:text-5xl text-center">All New Anonymous Messaging<br /><span>With ShroudedNote</span></h2>
                <p className="">Communicate Behind The VeilCommunicate Behind The VeilCommunicate Behind The Veil</p>
                <button className="bg-accent hover:bg-soft transition duration-500 ease-in-out px-3 py-2 rounded-lg">
                    Get Ac-tive
                </button>
            </Container>
            </div>

            <Container className="px-12 py-10 flex gap-4 flex-col items-center">
                <h2 className="text-4xl md:text-5xl text-center">Why Join ShroudedNote?</h2>
                <p className="text-[14px] md:text-[16px]">We have tons of reasons why you should use ShroudedNotes and not Kubbol or NGL</p>
            </Container>
        </Layout>
    )
}