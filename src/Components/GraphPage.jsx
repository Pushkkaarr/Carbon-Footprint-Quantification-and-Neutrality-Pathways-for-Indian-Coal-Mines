import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const GraphPage = () => {
  const [chartData, setChartData] = useState(null);

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
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#31c423'],
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
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">
          Carbon Emissions Data Visualization
        </h2>
        {chartData ? (
          <div className="flex justify-between space-x-8">
            {/* Separate div for the bar graph */}
            <div className="flex-1 p-6 bg-[#2B263F] rounded-lg">
              <h3 className="text-2xl font-bold text-white text-center mb-4">Bar Graph</h3>
              <div className="w-full h-96">
                <Bar data={chartData.barData} options={{ 
                  plugins: {
                    legend: {
                      labels: {
                        color: 'white' // Make legend text white
                      }
                    }
                  },
                  scales: {
                    x: {
                      ticks: { color: 'white' }, // Make x-axis labels white
                      grid: { color: 'rgba(255, 255, 255, 0.1)' } // Make x-axis grid lines slightly visible
                    },
                    y: {
                      ticks: { color: 'white' }, // Make y-axis labels white
                      grid: { color: 'rgba(255, 255, 255, 0.1)' } // Make y-axis grid lines slightly visible
                    }
                  }
                }} />
              </div>
            </div>
            {/* Separate div for the pie chart */}
            <div className="flex-1 p-6 bg-[#2B263F] rounded-lg">
              <h3 className="text-2xl font-bold text-white text-center mb-4">Pie Chart</h3>
              <div className="w-full h-96">
                <Pie data={chartData.pieData} options={{
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
          <p className="text-white">Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default GraphPage;
