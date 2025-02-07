import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graphs = () =>{
const [data, setData] = useState([]);

    useEffect(() =>{
        fetch('http://localhost/votingSystems/backend/fetchdata.php')
        .then(response =>{return response.json();})
        .then(data => setData(data))
        .catch(error => console.error("error in fetching of graph data: ", error));
},[])

// if(Loading) return <p>Loading...</p>
// if(error) return <p>Fetching data failed: {error.message}</p>

const chartData = {
    labels: data.map((item) => item.NAME),
    datasets: [
        {
            label: 'haha',
            data: data.map((item => item.ID)),
            fill: false,
            borderColor: 'rgb(75,192,192)',
            tension: 0.1
        }
    ]
}

const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'names'
            }
        } 
};

return (
    <Line data={chartData} options={options}/>
)
}

export default Graphs;