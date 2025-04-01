
import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  BarChart} from "../admin/chartt-A"
import { FaDollarSign, FaChartBar, FaBox, FaShoppingCart } from "react-icons/fa";

const Dashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  // const [topProducts, setTopProducts] = useState([]);
  const [recentSales, setRecentSales] = useState([]);
  const [loading, setLoading] = useState(true);

  const topProducts = [
    { product: "Nike Air Max", sales: 120, revenue: 4800 },
    { product: "Adidas Ultraboost", sales: 90, revenue: 4500 },
    { product: "Puma RS-X", sales: 75, revenue: 3750 },
    { product: "New Balance 574", sales: 60, revenue: 3000 },
    { product: "Reebok Classic", sales: 50, revenue: 2500 },
  ];
  useEffect(() => {
    axios.get("http://localhost:5000/api/sales")
      .then(response => {
        setSalesData(response.data.sales);
        setTotalRevenue(response.data.totalRevenue);
        setTotalSales(response.data.sales.length);
        setTopProducts(response.data.topProducts || []);
        setRecentSales(response.data.recentSales || []);
      })
      .catch(error => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="h-screen flex items-center justify-center text-xl font-semibold">Loading...</div>;

  
  return (
    <div className="min-h-screen p-6 bg-gray-900 ml-72 flex flex-col items-center">
      
      <header className="bg-gradient-to-r from-purple-400 to-indigo-400 w-10/12 p-4 shadow-lg rounded-lg mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">📊 Sales Dashboard</h1>
      </header>


      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-11 w-full max-w-6xl mb-6 p-2">
        {[{
          title: "Total Revenue",
          value: `$${totalRevenue}`,
          color: "text-green-600",
          icon: <FaDollarSign className="text-green-600 text-2xl" />
        }, {
          title: "Total Sales",
          value: totalSales,
          color: "text-blue-600",
          icon: <FaShoppingCart className="text-blue-600 text-2xl" />
        }, {
          title: "Top Product",
          value: topProducts[0]?.product || "N/A",
          color: "text-purple-600",
          icon: <FaBox className="text-purple-600 text-2xl" />
        }].map((stat, index) => (
          <div key={index} className="bg-gray-800 text-white text-3xl p-6 rounded-lg shadow-[0_0_15px_5px_rgba(147,112,219,0.8)] flex items-center gap-4
          hover:scale-105 transition transform  hover:shadow-[0_0_15px_5px_rgba(147,112,219,0.8)]">
            {stat.icon}
            <div>
              <h2 className="text-lg font-semibold">{stat.title}</h2>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

 <div className='h-80 w-10/12  bg-slate-800 rounded-2xl shadow-lg '>
       <BarChart /></div>

       <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-6xl mt-5 mb-6">
      <h2 className="text-xl font-semibold mb-4">🏆 Top Selling Products</h2>
      <table className="w-full border-collapse border border-gray-500 text-center">
        <thead className="bg-gray-700">
          <tr>
            <th className="border p-2">Product</th>
            <th className="border p-2">Sales</th>
            <th className="border p-2">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {topProducts.map((product, index) => (
            <tr key={index} className="hover:bg-gray-600">
              <td className="border p-2">{product.product}</td>
              <td className="border p-2">{product.sales}</td>
              <td className="border p-2 text-green-500">${product.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


    </div>
  );
};

export default Dashboard;
