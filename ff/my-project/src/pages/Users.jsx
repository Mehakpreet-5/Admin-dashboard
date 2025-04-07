import { useEffect, useState } from "react";
import axios from "axios";
import { Users, UserCheck, UserPlus } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Cell } from "recharts";

const API_URL = "http://13.203.36.105:5000/api/users/"; // Replace with actual API

const Card = ({ children }) => (
  <div className="bg-gray-800 text-white shadow-lg rounded-lg p-5">{children}</div>
);

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_URL)
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const activeUsers = users.filter((user) => user.status === "Active").length;
  const newUsers = users.slice(-5); // Last 5 users

  return (
    <div className="min-h-screen bg-gray-900 p-6 ml-80 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 shadow-lg rounded-lg mb-4 flex justify-between items-center bg-gradient-to-r from-purple-400 to-indigo-400">
        <h1 className="text-2xl font-bold">👤 User Dashboard</h1>
      </header>

      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-4 ml-9 py-2">
        <div className="bg-gray-800 p-5 rounded-lg w-96 shadow-[0_0_15px_5px_rgba(147,112,219,0.8)] hover:scale-105 transition transform  hover:shadow-[0_0_15px_5px_rgba(147,112,219,0.8)]">
          <div className="flex justify-between items-center ">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <Users className="h-8 w-8 text-indigo-400" />
          </div>
          <p className="text-3xl font-bold">{loading ? "Loading..." : users.length}</p>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg  w-96  shadow-[0_0_15px_5px_rgba(147,112,219,0.8)] hover:scale-105 transition transform  hover:shadow-[0_0_15px_5px_rgba(147,112,219,0.8)]">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Active Users</h2>
            <UserCheck className="h-8 w-8 text-green-400" />
          </div>
          <p className="text-3xl font-bold">{loading ? "Loading..." : activeUsers}</p>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg  w-96 shadow-[0_0_15px_5px_rgba(147,112,219,0.8)] hover:scale-105 transition transform  hover:shadow-[0_0_15px_5px_rgba(147,112,219,0.8)]">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">New Users</h2>
            <UserPlus className="h-8 w-8 text-yellow-400" />
          </div>
          <p className="text-3xl font-bold">{loading ? "Loading..." : 5}</p>
        </div>
      </div>

      {/* Recent Users Table */}
      <Card className="mb-4">
        <h2 className="text-lg font-semibold border-b pb-2 mb-2">Recent Users</h2>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-700 text-gray-300">
                <th className="border border-gray-600 p-3 text-left">ID</th>
                <th className="border border-gray-600 p-3 text-left">Name</th>
                <th className="border border-gray-600 p-3 text-left">Email</th>
                <th className="border border-gray-600 p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {newUsers.map((user, index) => (
                <tr key={user.id} className={`hover:bg-gray-700 ${index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"}`}>
                  <td className="border border-gray-700 p-3">{user.id}</td>
                  <td className="border border-gray-700 p-3">{user.name}</td>
                  <td className="border border-gray-700 p-3">{user.email}</td>
                  <td className="border border-gray-700 p-3">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
        <Card>
          <h2 className="text-lg font-semibold border-b pb-2 mb-2">📈 User Growth Trends</h2>
          <LineChart width={500} height={300} data={users.slice(0, 5)}>
            <CartesianGrid stroke="gray" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Line type="monotone" dataKey="id" stroke="#82ca9d" />
          </LineChart>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold border-b pb-2 mb-2">📊 User Activity</h2>
          <BarChart width={500} height={300} data={users.slice(0, 5)}>
            <CartesianGrid stroke="gray" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="white" />
            <YAxis stroke="white" />
            <Tooltip />
            <Bar dataKey="id" fill="#f97316">
              {users.slice(0, 5).map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#82ca9d" : "#f97316"} />
              ))}
            </Bar>
          </BarChart>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
