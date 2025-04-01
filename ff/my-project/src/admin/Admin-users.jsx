
import React, { useEffect, useState } from 'react';
import { adUser, deleteUser } from '../connection/api';
// import AdminNav from './adminNav';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await adUser();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            setUsers(users.filter(user => user._id !== id)); // Remove the deleted user from the list
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="flex w-3/6 ml-20">
            {/* <div><AdminNav /></div> */}

            <div className="flex-1 mt-14 mx-10">
                <h1 className="text-5xl font mb-6 fontt greenn">Admin Users</h1>
                <div className="overflow-x-auto mt-12">
                    <table className="min-w-full bg-white shadow-lg  border border-gray-200">
                        <thead className="bg-orange-200 greenn uppercase text-sm rounded-t-lg">
                            <tr>
                                <th className="py-3 px-6 text-left ">Username</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                {/* <th className="py-3 px-6 text-left">Role</th> */}
                                <th className="py-3 px-6 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-700">
                            {users.map(user => (
                                <tr key={user._id} className="hover:bg-gray-50 border-b border-gray-200">
                                    <td className="py-4 px-6 rounded-bl-lg">{user.username}</td>
                                    <td className="py-4 px-6">{user.email}</td>
                                    {/* <td className="py-3 px-6">{user.role}</td> */}
                                    <td className="py-4 px-6 rounded-br-lg">
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out shadow-md"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminUsers;
