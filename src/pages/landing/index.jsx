import { Link } from "react-router-dom";
import Container from "../../components/container";
import Features from "../../components/feature";
import Layout from "../../layout";
import { HiPuzzlePiece}  from "react-icons/hi2";
import { useEffect } from "react";
import BubbleText from "../../components/bubbleText";
import { motion } from "framer-motion";
import { IoAnalyticsOutline } from "react-icons/io5";
import { PiRankingDuotone } from "react-icons/pi";

export default function Home() {
    
    return (
        <Layout>
            <div className=" flex justify-center animate-fadeIn py-10">

            <Container>
                <p className=" px-3 py-1 text-soft border border-soft rounded-full">WIP: ShroudedNote</p>
                <div className=" hover-text text-center flex flex-wrap font-semibold md:px-28 text-soft">
                    <BubbleText>A Novel Approach Into Anonymous Messaging</BubbleText>
                </div>
                <p className="text-[18px] inter">Communicate Behind The Veil</p>
                <Link to='/register' className="animate-fadeInLate transition-all duration-500 ease-in-out px-12 py-3 rounded-lg bg-gradient-to-b from-primary to-accent hover:from-soft hover:to-primary transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-soft">
                    Get Ac-tive
                </Link>


            </Container>
            </div>
      
            <div className="bg-[#00393345] text-center animate px-4 md:px-12 py-10 flex gap-4 flex-col items-center">
                
    
                <h2 className="text-3xl md:text-4xl">Why Join ShroudedNote?</h2>
                <p className="text-[18px] px-5 inter">We have tons of reasons why you should use ShroudedNotes and not Kubbol or NGL</p>
                <div className=" flex mt-5 flex-wrap gap-6 justify-center">
                    <Features
                        title="Easy To Use"
                        description="Our anonymous messaging app is designed with simplicity in mind. No complicated sign-ups"
                        icons={<HiPuzzlePiece />}
                    />
                    <Features
                        title="Detailed analytics"
                        description="Our anonymous messaging app is designed with simplicity in mind. No complicated sign-ups"
                        icons={<IoAnalyticsOutline />}
                    />
                    <Features
                        title="Ranking System"
                        description="Our anonymous messaging app is designed with simplicity in mind. No complicated sign-ups"
                        icons={<PiRankingDuotone />}
                    />
                    <Features
                        title="Novelty"
                        description="Our anonymous messaging app is designed with simplicity in mind. No complicated sign-ups"
                        icons={<HiPuzzlePiece />}
                    />
                </div>
                
            </div>
        </Layout>
    )
}