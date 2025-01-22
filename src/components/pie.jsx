import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    } from "chart.js";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
    
    const data = {
        labels: ['messages sent', 'messages received'],
        datasets: [
            {
                data: [300, 500],
                backgroundColor: ["#FF6384", "#36A2EB"],
                borderColor: 'black',
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
        <Pie data={data} options={options} />

    )
}