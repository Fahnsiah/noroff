import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="my-container">
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
      <h3>Dashboard</h3>
    </div>
  );
};

export default Dashboard;
