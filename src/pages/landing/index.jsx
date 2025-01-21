import { Link } from "react-router-dom";
import Container from "../../components/container";
import Features from "../../components/feature";
import Layout from "../../layout";
import { HiPuzzlePiece}  from "react-icons/hi2";
export default function Home() {
    return (
        <Layout>
            <div className=" flex justify-center animate-fadeIn">

            <Container>
                <p className=" px-3 py-1 text-soft border border-soft rounded-full">On Private Beta</p>
                <h2 className="text-4xl md:text-5xl font-bold text-center">A New level of Anonymity</h2>
                <p className="text-[18px] inter">Communicate Behind The VeilCommunicate Behind The VeilCommunicate Behind The Veil</p>
                <Link to='/register' className="animate-fadeInLate transition-all duration-500 ease-in-out px-12 py-3 rounded-lg bg-gradient-to-b from-primary to-accent hover:from-soft hover:to-primary transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-soft">
                    Get Ac-tive
                </Link>


            </Container>
            </div>
            <div className="bg-[#00393345] animate px-12 py-10 flex gap-4 flex-col items-center">
                <h2 className="text-3xl md:text-4xl text-center">Why Join ShroudedNote?</h2>
                <p className="text-[18px] inter">We have tons of reasons why you should use ShroudedNotes and not Kubbol or NGL</p>
                <div className="flex mt-5 flex-wrap gap-4 justify-center">
                <Features
                    title="Easy To Use"
                    description="Our anonymous messaging app is designed with simplicity in mind. No complicated sign-ups"
                    icons={<HiPuzzlePiece />}
                />
                <Features
                    title="Easy To Use"
                    description="Our anonymous messaging app is designed with simplicity in mind. No complicated sign-ups"
                    icons={<HiPuzzlePiece />}
                />
                <Features
                    title="Easy To Use"
                    description="Our anonymous messaging app is designed with simplicity in mind. No complicated sign-ups"
                    icons={<HiPuzzlePiece />}
                />
                <Features
                    title="Easy To Use"
                    description="Our anonymous messaging app is designed with simplicity in mind. No complicated sign-ups"
                    icons={<HiPuzzlePiece />}
                />
                <Features
                    title="Easy To Use"
                    description="Our anonymous messaging app is designed with simplicity in mind. No complicated sign-ups"
                    icons={<HiPuzzlePiece />}
                />
                </div>
            </div>
        </Layout>
    )
}