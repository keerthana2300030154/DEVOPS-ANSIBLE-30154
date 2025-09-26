import { useNavigate } from "react-router-dom";
import "./Home.css"; // style as needed

export default function Home() {
  const navigate = useNavigate();

  const handleAction = (action) => {
    navigate(`/auth/${action}`);
  };

  return (
    <div className="home-container text-center">
      <h1 className="mb-3">🏥 Hospital Care and Health Support</h1>
      <p className="mb-4">Your health, our priority.</p>
      <button className="btn btn-outline-primary me-3" onClick={() => handleAction("login")}>Login</button>
      <button className="btn btn-primary" onClick={() => handleAction("signup")}>Sign Up</button>
    </div>
  );
}
