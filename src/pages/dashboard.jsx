import AlternateBar from "../components/sidebar";
import React from "react";
import { Line } from "react-chartjs-2";
import PieChart from "../components/pie";

import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    } from "chart.js";
import Messages from "../components/messages";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function Dashboard() {
    
    const data = {
        labels: ['messages sent', 'messages received'],
        datasets: [
            {
                data: [300, 500],
                backgroundColor: ["#FF6384", "#36A2EB"],
                borderColor: 'grey',
                borderAlign: 'inner',
                cutout: '0%'
            },
            ],
        };
    
    const options = {
    responsive: true,
    plugins: {
        legend: {
        position: "top",
        },
        title: {
        display: true,
        text: "Monthly Sales",
        },
      },
    };
    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <AlternateBar />
            
        <section className="flex flex-col h-fit flex-wrap justify-center py-10 px-3 gap-5">
            
        <h3 className="text-center lg:text-start text-2xl">Incoming notes... Look what we have here!</h3>
        <div className="flex gap-5 h-fit flex-wrap justify-center">
            <Messages 
                message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non maiores accusamus aliquam ex iusto temporibus nam officiis saepe praesentium, cumque quibusdam recusandae nemo fugiat autem facilis obcaecati ipsam omnis in.'/>
            
            <Messages 
                message='Non maiores accusamus aliquam ex iusto temporibus nam officiis saepe praesentium, cumque quibusdam recusandae nemo fugiat autem facilis obcaecati ipsam omnis in.'/>
        </div>
        </section>
        </div>
            
    )
}