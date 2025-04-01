

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCogs, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AdminUsers from './Admin-users';
import AdminOrder from './AdminOrder';
import Board from './Admin-board';

function AdminPanel() {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const components = {
    dashboard: <Board />,
    settings: <div><h1 className='text-4xl font-bold mb-6'>Settings</h1><p>Manage your application settings here.</p></div>,
    users: <AdminUsers />,
    orders: <AdminOrder />,
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: faTachometerAlt },
    { id: 'settings', label: 'Settings', icon: faCogs },
    { id: 'users', label: 'Users', icon: faUsers },
    { id: 'orders', label: 'Orders', icon: faShoppingCart },
  ];

  return (
    <div className='flex bg-yellow-100 bg-opacity-15 '>
      {/* Sidebar */}
      <div className='w-72 h-screen bg-gray-800 text-white p-4 pt-28 '>
        <h2 className='text-4xl fontt text-center mr-4  font-bold mb-4 text-orange-200'>Admin Panel</h2>
        <ul className=' space-y-4 mt-10 ml-3'>
          {menuItems.map(item => (
            <li key={item.id} className='mb-2'>
              <div 
                className={`flex items-center w-56 bg-white bg-opacity-5 p-4 rounded-lg cursor-pointer hover:bg-gray-700 ${
                  activeComponent === item.id ? 'bg-gray-600' : 'bg-gray-800'
                }`}
                onClick={() => setActiveComponent(item.id)}
              >
                <FontAwesomeIcon icon={item.icon} className='mr-3 w-11 h-8 text-orange-200'/>
                <span className='capitalize text-orange-50 text-lg'>{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-10'>
        {components[activeComponent]}
      </div>
    </div>
  );
}

export default AdminPanel;
