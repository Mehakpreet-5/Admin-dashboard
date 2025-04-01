import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, Cell } from "recharts";
import { Search, Menu, Users, Star } from "lucide-react";

const orders = [
  { id: 1, date: "2023-10-01", customer: "John Doe", amount: 150, status: "Shipped" },
  { id: 2, date: "2023-10-02", customer: "Jane Smith", amount: 200, status: "Pending" },
  { id: 3, date: "2023-10-03", customer: "Alice Johnson", amount: 120, status: "Delivered" },
  { id: 4, date: "2023-10-04", customer: "Bob Brown", amount: 180, status: "Shipped" },
  { id: 5, date: "2023-10-05", customer: "Charlie Davis", amount: 220, status: "Pending" },
];

const orderTrendsData = [
  { date: "2023-09-01", orders: 10, revenue: 1500 },
  { date: "2023-09-02", orders: 15, revenue: 2250 },
  { date: "2023-09-03", orders: 20, revenue: 3000 },
  { date: "2023-09-04", orders: 25, revenue: 3750 },
  { date: "2023-09-05", orders: 30, revenue: 4500 },
];

const revenueByCategoryData = [
  { category: "Electronics", revenue: 2000 },
  { category: "Clothing", revenue: 1500 },
  { category: "Books", revenue: 1000 },
  { category: "Home", revenue: 500 },
];

const Card = ({ children }) => (
  <div className="bg-gray-800 text-white shadow-lg rounded-lg p-5">{children}</div>
);

const OrderDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orders);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredOrders(orders.filter((order) => order.customer.toLowerCase().includes(term.toLowerCase())));
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 ml-80 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 shadow-lg rounded-lg mb-4 flex justify-between items-center bg-gradient-to-r from-purple-400 to-indigo-400">
        <h1 className="text-2xl font-bold">📦 Order Dashboard</h1>
        <div className="flex items-center space-x-3">
          <button className="p-2 bg-gray-700 rounded-md hover:bg-gray-600">
            <Menu className="h-5 w-5 text-white" />
          </button>
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 bg-gray-700 text-white border border-gray-600 rounded-lg w-64 placeholder-gray-400 focus:ring focus:ring-indigo-500"
          />
        </div>
      </header>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 mb-4">
      <div className="bg-gray-800 p-5 rounded-lg mx-3  shadow-[0_0_15px_5px_rgba(147,112,219,0.8)] hover:scale-105 transition transform  hover:shadow-[0_0_15px_5px_rgba(147,112,219,0.8)]">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <Users className="h-8 w-8 text-indigo-400" />
          </div>
          <p className="text-3xl font-bold">{orders.length}</p>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg mx-3  shadow-[0_0_15px_5px_rgba(147,112,219,0.8)] hover:scale-105 transition transform  hover:shadow-[0_0_15px_5px_rgba(147,112,219,0.8)]">

          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Total Revenue</h2>
            <Star className="h-8 w-8 text-yellow-400" />
          </div>
          <p className="text-3xl font-bold">${orders.reduce((sum, order) => sum + order.amount, 0)}</p>
        </div>
      </div>

      {/* Recent Orders Table */}
      <Card className="mb-4">
        <h2 className="text-lg font-semibold border-b pb-2 mb-2">Recent Orders</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-700 text-gray-300">
              <th className="border border-gray-600 p-3 text-left">ID</th>
              <th className="border border-gray-600 p-3 text-left">Date</th>
              <th className="border border-gray-600 p-3 text-left">Customer</th>
              <th className="border border-gray-600 p-3 text-left">Amount</th>
              <th className="border border-gray-600 p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={order.id} className={`hover:bg-gray-700 ${index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"}`}>
                <td className="border border-gray-700 p-3">{order.id}</td>
                <td className="border border-gray-700 p-3">{order.date}</td>
                <td className="border border-gray-700 p-3">{order.customer}</td>
                <td className="border border-gray-700 p-3">${order.amount}</td>
                <td className="border border-gray-700 p-3">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        {/* Order Trends */}
        <Card>
          <h2 className="text-lg font-semibold border-b pb-2 mb-2">📈 Order Trends</h2>
          <LineChart width={500} height={300} data={orderTrendsData}>
            <CartesianGrid stroke="gray" strokeDasharray="3 3" />
            <XAxis dataKey="date" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
            <Line type="monotone" dataKey="revenue" stroke="#f97316" />
          </LineChart>
        </Card>

        {/* Revenue by Category */}
        <Card>
          <h2 className="text-lg font-semibold border-b pb-2 mb-2">💰 Revenue by Category</h2>
          <BarChart width={500} height={300} data={revenueByCategoryData}>
            <CartesianGrid stroke="gray" strokeDasharray="3 3" />
            <XAxis dataKey="category" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Bar dataKey="revenue" fill="#f97316">
              {revenueByCategoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#82ca9d" : "#f97316"} />
              ))}
            </Bar>
          </BarChart>
        </Card>
      </div>
    </div>
  );
};

export default OrderDashboard;
