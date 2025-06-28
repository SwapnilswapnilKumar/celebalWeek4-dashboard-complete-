import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';

const Doughnut = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A020F0', '#FF69B4'];

  return (
    <div
      id={id}
      style={{
        background: currentMode === 'Dark' ? '#33373E' : '#fff',
        padding: '20px',
        borderRadius: '8px',
        height: height || '420px',
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="y"
            nameKey="x"
            cx="50%"
            cy="50%"
            innerRadius="40%"      
            outerRadius="70%"
            label={({ x, y }) => `${x}: ${y}`}  
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          {legendVisiblity && <Legend verticalAlign="bottom" />}
          <Tooltip
            contentStyle={{
              backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff',
              border: '1px solid #ccc',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Doughnut;
