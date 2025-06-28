import React from 'react';
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const SparkLine = ({ id, height, width, color, data, currentColor }) => {
  return (
    <div id={id} style={{ width: width || '100%', height: height || '80px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="yval"
            stroke={color}
            strokeWidth={2}
            dot={false}   
            activeDot={{ r: 3, fill: currentColor }}  
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#f5f5f5',
              border: '1px solid #ccc',
              color: '#000',
              fontSize: '12px',
            }}
            formatter={(value, name, props) => [`${value}`, `Y`]}  
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SparkLine;
