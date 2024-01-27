import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";



const AuthProtected = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (user.isLoggedIn) {
      alert("You are already logged in");
      navigate("/dashboard");
    }

    setLoading(false);
  }, []);

  return Loading ? <p>Loading..</p> : <Outlet />;
};

export default AuthProtected;
