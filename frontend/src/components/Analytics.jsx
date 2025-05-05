// src/components/Analytics.jsx

import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Analytics = () => {
  const summary = [
    { label: 'New Accounts', value: 234, change: 58, color: 'text-blue-500' },
    { label: 'Open rates', value: '-71%', change: 62, color: 'text-red-500' },
    { label: 'Response rates', value: '+12%', change: 72, color: 'text-green-500' },
    { label: 'Total RSVPs', value: '+34 RSVP', change: 81, color: 'text-green-500' },
  ];

  const trafficChart = {
    labels: ['Jan 01', 'Jan 02', 'Jan 03', 'Jan 04', 'Jan 05', 'Jan 06'],
    datasets: [
      {
        label: 'Total Email sent',
        data: [300, 500, 800, 400, 700, 600],
        backgroundColor: '#3B82F6',
      },
      {
        label: 'Total Responses',
        data: [200, 400, 600, 300, 500, 450],
        backgroundColor: '#10B981',
      },
    ],
  };

  const incomeProgress = {
    labels: ['Achieved', 'Remaining'],
    datasets: [
      {
        data: [72, 28],
        backgroundColor: ['#10B981', '#E5E7EB'],
        borderWidth: 0,
      },
    ],
  };

  const targets = [
    { label: 'New Accounts target', value: 71, color: 'bg-red-500' },
    { label: 'Mail Target', value: 54, color: 'bg-green-500' },
    { label: 'Response Target', value: 32, color: 'bg-yellow-500' },
    { label: 'RSVP Target', value: 89, color: 'bg-blue-500' },
  ];

  return (
    <div className="p-6 bg-gray-100 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {summary.map((item, idx) => (
          <div key={idx} className="bg-white p-4 shadow rounded-lg">
            <div className="text-sm text-gray-500">{item.label}</div>
            <div className="text-2xl font-bold">{item.value}</div>
            <div className={`text-sm mt-1 ${item.color}`}>{item.change}%</div>
          </div>
        ))}
      </div>

      {/* Traffic Sources + Income Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2 bg-white p-4 shadow rounded-lg">
          <div className="font-semibold mb-4">Traffic Sources</div>
          <Bar data={trafficChart} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
        </div>
        <div className="bg-white p-4 shadow rounded-lg flex flex-col items-center justify-center">
          <h4 className="font-semibold mb-2">Response</h4>
          <div className="w-32 h-32">
            <Doughnut data={incomeProgress} options={{ cutout: '70%' }} />
          </div>
          <p className="text-sm mt-2 text-gray-500">Target</p>
          <span className="text-xl font-bold mt-1 text-green-500">75%</span>
        </div>
      </div>

      {/* Target Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {targets.map((target, idx) => (
          <div key={idx} className="bg-white p-4 shadow rounded-lg">
            <div className="mb-2 text-sm text-gray-700 font-medium">{target.label}</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div
                className={`h-2 rounded-full ${target.color}`}
                style={{ width: `${target.value}%` }}
              />
            </div>
            <p className="text-sm text-gray-500">{target.value}% Target</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
