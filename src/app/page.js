'use client'; // Ensure client-side rendering

import { useEffect, useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement, Filler } from 'chart.js';
import Card from './components/Card';
import { statisticsData } from './data';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Filler, Title, Tooltip, Legend, PointElement, ArcElement);

export default function HomePage() {
  const [data, setData] = useState({});
  const [pieChartData, setPieChartData] = useState({});
  const [lineChartData, setLineChartData] = useState({});
  const [stackedBarChartData, setStackedBarChartData] = useState({});
  const [areaChartData, setAreaChartData] = useState({});
  const [stats, setStats] = useState({});
  const [timeWindow, setTimeWindow] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Simulate fetching data from a local dummy API or import directly
        setData(statisticsData);
        setPieChartData(statisticsData[timeWindow].pieChart);
        setLineChartData(statisticsData[timeWindow].lineChart);
        setStackedBarChartData(statisticsData[timeWindow].stackedBarChart);
        setAreaChartData(statisticsData[timeWindow].areaChart);
        setStats(statisticsData[timeWindow].stats);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, [timeWindow]);

  if (loading) {
    return (
      <div class="flex items-center justify-center min-h-screen p-5 bg-blue-50 min-w-screen">
        <div class="flex space-x-2 animate-pulse">
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div class="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center bg-[#12131C] text-white p-4">CRM Statistics Dashboard</h1>
      <div className='flex flex-col lg:flex-row gap-10 min-h-screen'>
        <div className='bg-gray-100 p-8'>
          <h1 className='text-2xl font-semibold mb-10'>Overview</h1>
          <div className="mb-8">
            <label htmlFor="time-selector" className="mr-2 text-lg font-medium">Filter by Time Window:</label>
            <select
              value={timeWindow}
              onChange={(e) => setTimeWindow(e.target.value)}
              className="p-2 border rounded-lg"
            >
              <option value="all">All Time</option>
              <option value="1day">Last 1 Day</option>
              <option value="1week">Last 1 Week</option>
              <option value="1month">Last 1 Month</option>
            </select>
          </div>
          <div className="flex flex-col flex-wrap justify-center gap-6 mb-8">
            <Card title="Total Sales" value={`$${stats.totalSales}`} icon="💰" />
            <Card title="New Users" value={stats.newUsers} icon="👤" />
            <Card title="Active Users" value={stats.activeUsers} icon="📊" />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full p-8'>
          <div className="w-full max-w-xl">
            <h2 className="text-2xl font-semibold mb-4">Pie Chart</h2>
            <Pie data={pieChartData} />
          </div>
          <div className="w-full max-w-xl mb-8">
            <h2 className="text-2xl font-semibold mb-4">Line Chart</h2>
            <Line data={lineChartData} />
          </div>
          <div className="w-full max-w-xl mb-8">
            <h2 className="text-2xl font-semibold mb-4">Stacked Bar Chart</h2>
            <Bar data={stackedBarChartData} />
          </div>
          <div className="w-full max-w-xl mb-8">
            <h2 className="text-2xl font-semibold mb-4">Area Chart</h2>
            <Line data={areaChartData} />
          </div>
        </div>
      </div>
    </div>
  );
}
