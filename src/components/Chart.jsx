import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Chart = () => {
  const data = [
    { name: "Mon", doctor: 300, nurse: 400 },
    { name: "Tue", doctor: 500, nurse: 600 },
    { name: "Wed", doctor: 400, nurse: 550 },
    { name: "Thu", doctor: 700, nurse: 800 },
    { name: "Fri", doctor: 600, nurse: 750 },
    { name: "Sat", doctor: 900, nurse: 950 },
    { name: "Sun", doctor: 800, nurse: 850 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="name" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="doctor"
          stroke="#FF0000"
          strokeWidth={3}
          dot={{ r: 5, fill: "#FF0000" }}
        />
        <Line
          type="monotone"
          dataKey="nurse"
          stroke="#0000FF"
          strokeWidth={3}
          dot={{ r: 5, fill: "#0000FF" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
