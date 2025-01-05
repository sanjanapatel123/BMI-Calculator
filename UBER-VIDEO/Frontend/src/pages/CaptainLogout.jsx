import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/captain-login");
      return;
    }

    const logoutCaptain = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        navigate("/captain-login");
      }
    };
    logoutCaptain();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default CaptainLogout;
