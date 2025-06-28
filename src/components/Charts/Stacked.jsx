import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = ({ width = '100%', height = 420 }) => {
  const { currentMode } = useStateContext();

  const chartData = stackedCustomSeries[0]?.dataSource || [];

  const dataKeys = stackedCustomSeries.map((series) => ({
    name: series.name,
    color: series.fill,
    dataKey: series.yName,
  }));

  return (
    <div
      style={{
        background: currentMode === 'Dark' ? '#33373E' : '#fff',
        padding: '20px',
        borderRadius: '8px',
        width: width,
        height: height,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={stackedPrimaryXAxis.valueType === 'Category' ? 'x' : 'category'} tick={{ fill: currentMode === 'Dark' ? '#fff' : '#000' }} />
          <YAxis tick={{ fill: currentMode === 'Dark' ? '#fff' : '#000' }} />

          <Tooltip
            contentStyle={{
              backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff',
              border: '1px solid #ccc',
              fontSize: '12px',
            }}
          />

          <Legend />

          {dataKeys.map((bar, index) => (
            <Bar
              key={index}
              dataKey={bar.dataKey}
              name={bar.name}
              stackId="a" 
              fill={bar.color}
              barSize={20}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stacked;
