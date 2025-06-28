import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartsHeader } from '../../components';
import { barChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const BarPage = () => {
  const { currentMode } = useStateContext();

  const gridColor = currentMode === 'Dark' ? '#555' : '#ccc';
  const textColor = currentMode === 'Dark' ? '#fff' : '#000';
  const backgroundColor = currentMode === 'Dark' ? '#33373E' : '#fff';

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className="w-full" style={{ height: 400, backgroundColor: backgroundColor, borderRadius: '1rem' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
            <XAxis dataKey="country" stroke={textColor} />
            <YAxis stroke={textColor} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Gold" fill="#FFD700" />
            <Bar dataKey="Silver" fill="#C0C0C0" />
            <Bar dataKey="Bronze" fill="#CD7F32" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarPage;
