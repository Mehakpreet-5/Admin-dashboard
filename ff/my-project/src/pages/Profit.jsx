
import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const ProfitDashboard = () => {
  const [profits, setProfits] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/profit")
      .then((response) => {
        console.log("API Response:", response.data);
        setProfits(response.data.transactions || []);
        setTotalProfit(response.data.totalProfit);
      })
      .catch((error) => console.error("Error fetching profit data:", error));
  }, []);

  return (
    <div className="min-h-screen ml-80 bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Profit Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-lg">Total Profit</h2>
          <p className="text-3xl font-bold">${totalProfit}</p>
        </div>
      </div>

      {/* Profit Table */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-lg mb-3">Profit Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-700">
                <th className="border border-gray-600 px-4 py-2">Date</th>
                <th className="border border-gray-600 px-4 py-2">Amount</th>
                <th className="border border-gray-600 px-4 py-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {profits.map((p, i) => (
                <tr key={i} className="border border-gray-600 text-center">
                  <td className="border border-gray-600 px-4 py-2">{p.date}</td>
                  <td className="border border-gray-600 px-4 py-2">${p.amount}</td>
                  <td className={`border border-gray-600 px-4 py-2 ${p.type === "profit" ? "text-green-400" : "text-red-400"}`}>
                    {p.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Profit Trends Chart */}
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-lg">Profit Trends</h2>
        <LineChart width={600} height={300} data={profits}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default ProfitDashboard;
