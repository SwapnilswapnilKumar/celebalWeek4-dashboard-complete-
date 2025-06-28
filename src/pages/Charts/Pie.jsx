import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartsHeader } from '../../components';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF4560', '#00E396'];

const PiePage = () => {
  const { currentMode } = useStateContext();

  const backgroundColor = currentMode === 'Dark' ? '#33373E' : '#fff';
  const textColor = currentMode === 'Dark' ? '#fff' : '#000';

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full" style={{ height: 400, backgroundColor: backgroundColor, borderRadius: '1rem' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieChartData}
              dataKey="y"
              nameKey="x"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label={({ x, y }) => `${x}: ${y}%`}
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PiePage;
