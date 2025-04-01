const DashboardCard = ({ title, value, percentage }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="text-lg text-gray-400">{title}</h3>
            <p className="text-2xl font-bold text-white">{value}</p>
            <p className={`text-sm ${percentage > 0 ? "text-green-400" : "text-red-400"}`}>
                {percentage}% Today
            </p>
        </div>
    );
 };
 
 export default DashboardCard;
 