
import { useEffect, useState } from "react";
import { FaUserTie, FaBuilding, FaMoneyBillWave, FaSearch, FaEdit, FaTrash } from "react-icons/fa";

export default function Dashboard() {
    const [employees, setEmployees] = useState([]);
    const [form, setForm] = useState({ name: "", sector: "", salary: "" });
    const [editId, setEditId] = useState(null);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEmployees();
    }, []);
 
    const fetchEmployees = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/emp");
            const data = await res.json();
            setEmployees(data);
        } catch (error) {
            alert("Error fetching employees");
        }
        setLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.sector || !form.salary) {
            alert("Please fill in all fields");
            return;
        }

        try {
            if (editId) {
                await fetch(`http://localhost:5000/emp/${editId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
                setEditId(null);
            } else {
                await fetch("http://localhost:5000/emp", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                });
            }
            setForm({ name: "", sector: "", salary: "" });
            fetchEmployees();
        } catch (error) {
            alert("Error saving employee");
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this employee?")) return;
        try {
            await fetch(`http://localhost:5000/emp/${id}`, { method: "DELETE" });
            fetchEmployees();
        } catch (error) {
            alert("Error deleting employee");
        }
    };

    const handleEdit = (emp) => {
        setEditId(emp._id);
        setForm({ name: emp.name, sector: emp.sector, salary: emp.salary });
    };

    const totalEmployees = employees.length;
    const uniqueSectors = [...new Set(employees.map((e) => e.sector))].length;
    const totalSalary = employees.reduce((sum, e) => sum + Number(e.salary), 0);

    return (
        <div className="p-8 ml-80 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">
      
            <header className="bg-gradient-to-r from-purple-400 to-indigo-400 p-4 shadow-lg rounded-lg mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">👤 Employee Dashboard</h1>
      </header>


            {/* Summary Cards */}
            <div className="grid md:grid-cols-3 gap-10 text-center mb-10">
                {[
                    { label: "Total Employees", value: totalEmployees, icon: <FaUserTie size={70} /> },
                    { label: "Unique Sectors", value: uniqueSectors, icon: <FaBuilding size={70} /> },
                    { label: "Total Payroll", value: `Rs ${totalSalary}`, icon: <FaMoneyBillWave size={70} /> },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-gray-800 shadow-[0_0_15px_5px_rgba(147,112,219,0.8)] space-x-36 flex flex-row p-6 rounded-xl  hover:scale-105 transition transform  hover:shadow-[0_0_15px_5px_rgba(147,112,219,0.8)] items-center"
                    >
                           <div className=""> {item.icon}</div>
                      <div> <h3 className="text-xl font-semibold mt-2">{item.label}</h3>
                        <p className="text-3xl  w-40 font-bold mt-2">{item.value}</p> </div> 
                    
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row gap-10">
                {/* Employee Form */}
                <div className="bg-gray-800 p-8 rounded-xl shadow-xl w-full h-4/5 md:w-3/5">
                    <h2 className="text-2xl font-semibold mb-4">{editId ? "Edit Employee" : "Add Employee"}</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {["name", "sector", "salary"].map((field, i) => (
                            <input
                                key={i}
                                className="p-3 border border-gray-600 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                type={field === "salary" ? "number" : "text"}
                                value={form[field]}
                                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                            />
                        ))}
                        <button className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
                            {editId ? "Update Employee" : "Add Employee"}
                        </button>
                    </form>
                </div>

                {/* Employee List */}
                <div className="w-full">
                    {/* Search Bar */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-semibold">Employee List</h2>
                        <div className="relative">
                            <input
                                className="p-3 w-64 border border-gray-600 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                placeholder="Search Employees..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <FaSearch className="absolute right-3 top-3 text-gray-500" size={20} />
                        </div>
                    </div>
                    <div className="overflow-x-auto bg-gray-800 rounded-xl shadow-xl">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-700 text-white">
                                <tr>
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Sector</th>
                                    <th className="p-4">Salary</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((emp) => (
                                    <tr key={emp._id} className="border-b border-gray-700 hover:bg-gray-700 transition">
                                        <td className="p-4">{emp.name}</td>
                                        <td className="p-4">{emp.sector}</td>
                                        <td className="p-4">Rs {emp.salary}</td>
                                        <td className="p-4 flex gap-3">
                                            <button onClick={() => handleEdit(emp)} className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                                                <FaEdit />
                                            </button>
                                            <button onClick={() => handleDelete(emp._id)} className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition">
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}