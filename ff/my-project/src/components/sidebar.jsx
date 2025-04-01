

import React from "react";
import { NavLink } from "react-router-dom";
import { Home, ShoppingCart, Users, BarChart, Briefcase, BookDashed } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-80 bg-slate-800 rounded-2xl shadow-xl text-white fixed flex flex-col p-6">
      {/* Admin Panel Title */}
      <h2 className="text-4xl text-purple-300 font-bold text-center mt-10 mb-8">Admin Panel</h2>

      {/* Navigation Menu */}
      <nav className="space-y-3">
        <SidebarItem icon={BookDashed} label="Dashboard" to="/" />
        <SidebarItem icon={Briefcase} label="Employees" to="/employees" />
        <SidebarItem icon={Home} label="Orders" to="/orders" />
        <SidebarItem icon={ShoppingCart} label="Sales" to="/sales" />
 
        <SidebarItem icon={Users} label="Users" to="/users" />
        {/* <SidebarItem icon={BarChart} label="Profit" to="/profit" /> */}
    
        <SidebarItem icon={BarChart} label="Tasks" to="/tasks" />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon: Icon, label, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-5 py-3 rounded-lg transition duration-300 cursor-pointer ${
          isActive ? "bg-purple-500 text-white" : "hover:bg-gray-700 hover:text-gray-200"
        }`
      }
    >
      <Icon className="w-10 h-10" />
      <span className="text-2xl font-medium">{label}</span>
    </NavLink>
  );
};

export default Sidebar;
