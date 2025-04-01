import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Navbar from './components/navbar'
import './App.css'
// import Content from './pages/contentPage';
import Appp from './components/app';
import Orders from "./pages/Orders"
import Sidebar from './components/sidebar';
import UserDashboard from './pages/Users';
import ProfitDashboard from './pages/Profit';
import Sales from "./pages/Sales"
// import EmployeeDashboard from './pages/Employees';
import EmployeeDashboard from "./pages/emplyess"
import TodoApp from './pages/TodoApp';
function App() {


  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Appp/>}/>
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<UserDashboard />} />
        <Route path="/profit" element={<ProfitDashboard />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/tasks" element={<TodoApp />} />
        <Route path="employees" element={<EmployeeDashboard />} />


        <Route/>
        </Routes></BrowserRouter>
    </>
  )
}

export default App
