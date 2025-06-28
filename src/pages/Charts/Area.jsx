import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartsHeader } from '../../components';
import { areaChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const AreaPage = () => {
  const { currentMode } = useStateContext();
  const gridColor = currentMode === 'Dark' ? '#555' : '#ccc';
  const textColor = currentMode === 'Dark' ? '#fff' : '#000';
  const backgroundColor = currentMode === 'Dark' ? '#33373E' : '#fff';

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Area" title="Inflation Rate in percentage" />
      <div className="w-full" style={{ height: 400, backgroundColor: backgroundColor, borderRadius: '1rem' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={areaChartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke={textColor} />
            <YAxis stroke={textColor} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="inflation" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaPage;
