import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  Line,
} from 'recharts';
import { financialChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const Financial = () => {
  const { currentMode } = useStateContext();

  const date1 = new Date('2017-01-01');
  const filteredData = financialChartData.filter(item => new Date(item.x) >= date1);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Financial" title="AAPLE Historical (Hilo Chart)" />
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="x"
            tickFormatter={(tick) => new Date(tick).toLocaleDateString()}
          />
          <YAxis domain={['dataMin - 10', 'dataMax + 10']} />
          <Tooltip
            labelFormatter={(value) => `Date: ${new Date(value).toLocaleDateString()}`}
            formatter={(value, name) => [`${value}`, name]}
          />

          <Bar
            dataKey="high"
            fill="#82ca9d"
            name="High"
            barSize={2}
          />
          <Bar
            dataKey="low"
            fill="#8884d8"
            name="Low"
            barSize={2}
          />

          <Line
            type="monotone"
            dataKey={(data) => (data.high + data.low) / 2}
            stroke="#ff7300"
            name="Mid Price"
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Financial;
