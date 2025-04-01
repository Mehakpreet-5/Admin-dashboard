// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Users, UserCheck, UserPlus } from "lucide-react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Cell } from "recharts";

// const API_URL = "http://localhost:5000/api/employees";

// // Reusable Card Component
// const Card = ({ children }) => (
//   <div className="bg-gray-800 text-white shadow-lg rounded-lg p-5">{children}</div>
// );

// const EmployeeDashboard = () => {
//   const [employees, setEmployees] = useState([]); // Ensuring default is an array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get(API_URL)
//       .then((res) => {
//         if (Array.isArray(res.data)) {
//           setEmployees(res.data); // Ensure it's an array
//         } else {
//           console.error("Unexpected response format:", res.data);
//           setEmployees([]); // Fallback
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching employees:", error);
//         setError("Failed to fetch data.");
//         setLoading(false);
//       });
//   }, []);

//   // Ensure employees is an array before performing operations
//   const activeEmployees = Array.isArray(employees) ? employees.filter(emp => emp.status === "Active").length : 0;
//   const newHires = Array.isArray(employees) ? employees.slice(-5) : [];

//   return (
//     <div className="min-h-screen ml-72 bg-gray-900 p-6 text-white">
//       {/* Header */}
//       <header className="bg-gray-800 p-4 shadow-lg rounded-lg mb-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold">👔 Employee Dashboard</h1>
//       </header>

//       {/* Employee Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//         <Card>
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-semibold">Total Employees</h2>
//             <Users className="h-8 w-8 text-indigo-400" />
//           </div>
//           <p className="text-3xl font-bold">{loading ? "Loading..." : employees.length}</p>
//         </Card>
//         <Card>
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-semibold">Active Employees</h2>
//             <UserCheck className="h-8 w-8 text-green-400" />
//           </div>
//           <p className="text-3xl font-bold">{loading ? "Loading..." : activeEmployees}</p>
//         </Card>
//         <Card>
//           <div className="flex justify-between items-center">
//             <h2 className="text-lg font-semibold">New Hires</h2>
//             <UserPlus className="h-8 w-8 text-yellow-400" />
//           </div>
//           <p className="text-3xl font-bold">{loading ? "Loading..." : newHires.length}</p>
//         </Card>
//       </div>

//       {/* Recent Employees Table */}
//       <Card>
//         <h2 className="text-lg font-semibold border-b pb-2 mb-2">Recent Hires</h2>
//         {loading ? (
//           <p>Loading employees...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : (
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-700 text-gray-300">
//                 <th className="border border-gray-600 p-3 text-left">ID</th>
//                 <th className="border border-gray-600 p-3 text-left">Name</th>
//                 <th className="border border-gray-600 p-3 text-left">Department</th>
//                 <th className="border border-gray-600 p-3 text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {newHires.map((emp, index) => (
//                 <tr key={emp.id} className={`hover:bg-gray-700 ${index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"}`}>
//                   <td className="border border-gray-700 p-3">{emp.id}</td>
//                   <td className="border border-gray-700 p-3">{emp.name}</td>
//                   <td className="border border-gray-700 p-3">{emp.department}</td>
//                   <td className="border border-gray-700 p-3">{emp.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </Card>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//         <Card>
//           <h2 className="text-lg font-semibold border-b pb-2 mb-2">📈 Employee Growth</h2>
//           {employees.length > 0 ? (
//             <LineChart width={500} height={300} data={employees.slice(0, 5)}>
//               <CartesianGrid stroke="gray" strokeDasharray="3 3" />
//               <XAxis dataKey="name" stroke="white" />
//               <YAxis stroke="white" />
//               <Tooltip />
//               <Line type="monotone" dataKey="id" stroke="#82ca9d" />
//             </LineChart>
//           ) : (
//             <p>No data available</p>
//           )}
//         </Card>
//         <Card>
//           <h2 className="text-lg font-semibold border-b pb-2 mb-2">📊 Department Distribution</h2>
//           {employees.length > 0 ? (
//             <BarChart width={500} height={300} data={employees.slice(0, 5)}>
//               <CartesianGrid stroke="gray" strokeDasharray="3 3" />
//               <XAxis dataKey="department" stroke="white" />
//               <YAxis stroke="white" />
//               <Tooltip />
//               <Bar dataKey="id" fill="#f97316">
//                 {employees.slice(0, 5).map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#82ca9d" : "#f97316"} />
//                 ))}
//               </Bar>
//             </BarChart>
//           ) : (
//             <p>No data available</p>
//           )}
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default EmployeeDashboard;
