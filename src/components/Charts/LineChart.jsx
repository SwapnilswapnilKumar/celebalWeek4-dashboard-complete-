import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer,
} from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';
import { lineCustomSeries } from '../../data/dummy'; 

const LineChartComponent = () => {
  const { currentMode } = useStateContext();

  const chartData = lineCustomSeries[0]?.dataSource || [];

  return (
    <div
      style={{
        background: currentMode === 'Dark' ? '#33373E' : '#fff',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <ResponsiveContainer width="100%" height={420}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" tick={{ fill: currentMode === 'Dark' ? '#fff' : '#000' }} />
          <YAxis tick={{ fill: currentMode === 'Dark' ? '#fff' : '#000' }} />
          <Tooltip contentStyle={{ backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff', border: '1px solid #ccc' }} />
          <Legend />

        
          {lineCustomSeries.map((series, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey="y"
              name={series.name}
              stroke={series.fill}
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
