import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { Navigate, useNavigate } from 'react-router-dom';

const GraphPage = () => {
  const [chartData, setChartData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/aggregate-data');
        const data = response.data;

        // Process Electricity Data
        const totalElectricityCO2 = data.electricity.reduce(
          (acc, curr) => acc + (curr.result?.CO2?.value || 0), 
          0
        );

        // Process the data for Pie Chart
        const pieData = {
          labels: ['Electricity', 'Fuel', 'Shipping', 'Explosion'],
          datasets: [
            {
              label: 'Total Emissions',
              data: [
                totalElectricityCO2,
                data.fuel.reduce((acc, curr) => acc + (curr.result?.totalDirectCO2e?.value || 0), 0),
                data.shipping.reduce((acc, curr) => acc + parseFloat(curr.result?.carbonEmissions?.kilograms || 0), 0),
                data.explosion.reduce((acc, curr) => acc + parseFloat(curr.emissions?.CO2 || 0), 0)
              ],
              backgroundColor: ['#d12a2a', '#36A2EB', '#ccbc2d', '#31c423'],
            }
          ]
        };

        // Process the data for Bar Chart
        const barData = {
          labels: ['Electricity', 'Fuel', 'Shipping', 'Explosion'],
          datasets: [
            {
              label: 'Total Emissions in kg',
              data: [
                totalElectricityCO2,
                data.fuel.reduce((acc, curr) => acc + (curr.result?.totalDirectCO2e?.value || 0), 0),
                data.shipping.reduce((acc, curr) => acc + parseFloat(curr.result?.carbonEmissions?.kilograms || 0), 0),
                data.explosion.reduce((acc, curr) => acc + parseFloat(curr.emissions?.CO2 || 0), 0)
              ],
              backgroundColor: '#36A2EB',
            }
          ]
        };

        setChartData({ pieData, barData });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-r from-[#2B263F] to-[#4B5563] p-6">
      {/* Increased the width of the outer container */}
      <div className="w-full max-w-5xl p-8 bg-[#342F49] rounded-lg shadow-lg border border-[#66C5CC]">
        {/* Main container for the page content */}
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-8 text-center">
          Carbon Emissions Data Visualization
        </h2>
        {chartData ? (
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Separate div for the bar graph */}
          <div className="flex-1 p-4 lg:p-6 bg-[#2B263F] rounded-lg mb-6 lg:mb-0">
  <h3 className="text-xl lg:text-2xl font-bold text-white text-center mb-4">Bar Graph</h3>
  <div className="w-full" style={{ position: 'relative', paddingTop: '75%' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Bar 
        data={chartData.barData} 
        options={{ 
          plugins: {
            legend: {
              labels: {
                color: 'white' // Make legend text white
              }
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: { color: 'white' }, // Make x-axis labels white
              grid: { 
                color: 'rgba(255, 255, 255, 0.2)', // Make x-axis grid lines more visible
                lineWidth: 1 // Increase line width for x-axis grid lines
              },
              barPercentage: 0.9, // Increase bar width to fill more of the grid
              categoryPercentage: 1.0 // Reduce spacing between bars
            },
            y: {
              ticks: { 
                color: 'white', // Make y-axis labels white
                padding: 10, // Increase padding for better readability
                callback: function(value) { // Format tick labels with commas
                  return value.toLocaleString();
                }
              },
              grid: { 
                color: 'rgba(255, 255, 255, 0.3)', // Make y-axis grid lines more visible
                lineWidth: 1 // Adjust line width for y-axis grid lines
              },
              beginAtZero: true, // Start y-axis at zero
              min: 0, // Set minimum value to zero
              stepSize: 50000, // Set step size for each grid line to 50,000
              max: Math.max(...chartData.barData.datasets[0].data) * 1.2 // Dynamic max with 20% buffer
            }
          }
        }} 
      />
    </div>
  </div>
</div>
            {/* Separate div for the pie chart */}
            <div className="flex-1 p-4 lg:p-6 bg-[#2B263F] rounded-lg">
              <h3 className="text-xl lg:text-2xl font-bold text-white text-center mb-4">Pie Chart</h3>
              <div className="w-full h-72 lg:h-96">
                <Pie data={chartData.pieData} options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      labels: {
                        color: 'white' // Make legend text white
                      }
                    }
                  }
                }} />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-white text-center">Loading data...</p>
        )}
         {/* Button to return to the homepage */}
      <div className="flex justify-center mt-8">
          <button 
            className="px-6 py-3 text-lg mt-2 mb-2 bg-[#66C5CC] text-black font-bold rounded-lg shadow-lg hover:bg-[#55B2B6] hover:text-white transform hover:scale-105 active:scale-95 transition duration-300 ease-in-out"
            onClick={() => navigate('/')}
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphPage;
{/*http://localhost:5000/api/aggregate-data*/}