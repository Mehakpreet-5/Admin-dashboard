

import Sidebar from "./sidebar";
import Dashboard from "./Dashboard";
import Adminn from '../admin/Admin-board'
function Appp() {
   return (
       <div className="flex bg-gray-900 min-h-screen text-white">
           <Sidebar />
           <div className="flex-1 p-5">
               <Adminn/>
           </div>
       </div>
   );
}

export default Appp;

