import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Chart = () => {
  const data = [
    {
      name: 'Page A', pv: 2400,
    },
    {
      name: 'Page B', pv: 1398,
    },
    {
      name: 'Page C', pv: 9800,
    },
    {
      name: 'Page D', pv: 3908,
    },
    {
      name: 'Page E', pv: 4800,
    },
    {
      name: 'Page F', pv: 3800,
    },
    {
      name: 'Page G', pv: 4300,
    },
  ];

  return (
    <div className='my-10 zoom-in p-5 mx-auto border-2 border-theme-50 rounded-lg'
      style={{ width: '1200px' }}>
      <div className='mb-5 text-lg'>Sales</div>
      <LineChart
        width={1150}
        height={1100}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickCount={10} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default Chart;
