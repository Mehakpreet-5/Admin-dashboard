
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlusCircle, FaCheckCircle, FaEdit, FaTrashAlt } from 'react-icons/fa';
import './todoo.css';

function TodoDashboard() {
    const [todos, setTodos] = useState([]);
    const [newTodoText, setNewTodoText] = useState('');
    const [filter, setFilter] = useState('all');

    // Fetch todos based on filter
    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get(`http://localhost:5000/todos?filter=${filter}`);
            setTodos(response.data);
        };

        fetchTodos();
    }, [filter]);

    // Add new todo
    const handleAddTodo = async () => {
        if (!newTodoText.trim()) return;
        const response = await axios.post('http://localhost:5000/todos', { text: newTodoText });
        setTodos([...todos, response.data]);
        setNewTodoText('');
    };

    // Toggle todo completion
    const toggleCompletion = async (id, completed) => {
        const response = await axios.put(`http://localhost:5000/todos/${id}`, {
            completed: !completed,
        });
        setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
    };

    // Edit todo text
    const handleEditTodo = async (id, newText) => {
        const response = await axios.put(`http://localhost:5000/todos/${id}`, {
            text: newText,
        });
        setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
    };

    // Delete todo
    const handleDeleteTodo = async (id) => {
        await axios.delete(`http://localhost:5000/todos/${id}`);
        setTodos(todos.filter((todo) => todo._id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center ml-80">
            <header className="w-full max-w-6xl mb-8 p-5 bg-gradient-to-r from-purple-300 to-indigo-400 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-white">📋 Todo Dashboard</h1>
            </header>

            {/* Filter Section */}
            <div className="w-full max-w-6xl mb-6 flex justify-center space-x-10">
                <button
                    className="bg-gray-800 border border-purple-500 text-white px-6 py-2 rounded-full shadow-[0_0_15px_5px_rgba(147,112,219,0.8)] hover:scale-105 transition transform  hover:shadow-[0_0_15px_5px_rgba(147,112,219,0.8)]"
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button
                    className="bg-gray-800 border border-green-600 text-white px-6 py-2 rounded-full shadow-[0_0_15px_5px_rgba(34,193,63,0.8)]
 hover:scale-105 transition transform  hover:shadow-[0_0_15px_5px_rgba(34,193,63,0.8)]"
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
                <button
                    className="bg-gray-800 border border-yellow-500 text-white px-6 py-2 rounded-full shadow-[0_0_15px_3px_rgba(225,193,63,0.8)]
   hover:scale-105 transition transform hover:shadow-[0_0_20px_5px_rgba(255, 255, 0, 1)]"
                    onClick={() => setFilter('pending')}
                >
                    Pending
                </button>

            </div>

            {/* Add Todo Section */}
            <div className="w-full max-w-6xl mb-6 flex justify-center items-center space-x-4">
                <input
                    type="text"
                    className="bg-gray-800 text-white p-4 rounded-lg w-4/5 shadow-md focus:outline-none"
                    placeholder="Enter new todo"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                />
                <button
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition duration-200"
                    onClick={handleAddTodo}
                >
                    <FaPlusCircle />
                    <span>Add Todo</span>
                </button>
            </div>

            {/* Todo List */}
            <div className="w-full max-w-6xl p-4 bg-gray-800 rounded-lg shadow-lg">
                <ul className="space-y-4">
                    {todos.map((todo) => (
                        <li
                            key={todo._id}
                            className={`flex justify-between items-center p-4 rounded-lg shadow-md transition duration-300 ${todo.completed ? 'bg-green-700' : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                        >
                            <div className="flex items-center space-x-4">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleCompletion(todo._id, todo.completed)}
                                    className="cursor-pointer"
                                />
                                <span
                                    onClick={() =>
                                        handleEditTodo(todo._id, prompt('Edit todo', todo.text))
                                    }
                                    className={`flex-1 text-lg font-medium ${todo.completed ? 'line-through text-gray-400' : 'text-white'
                                        }`}
                                >
                                    {todo.text}
                                </span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() =>
                                        handleEditTodo(todo._id, prompt('Edit todo', todo.text))
                                    }
                                    className="text-yellow-500 hover:text-yellow-400"
                                >
                                    <FaEdit />
                                </button>
                                <button
                                    onClick={() => handleDeleteTodo(todo._id)}
                                    className="text-red-600 hover:text-red-500"
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoDashboard;
