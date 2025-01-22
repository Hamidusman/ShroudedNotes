import Sidebar from "../components/navbar";
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
        <div className="flex gap-8">
            <Sidebar />
            <section className="flex ">
                <div>
                <PieChart /></div>
            <div>
            <PieChart /></div>
            </section>
            
        </div>
    )
}