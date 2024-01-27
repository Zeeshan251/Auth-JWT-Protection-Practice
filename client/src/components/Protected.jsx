import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";


const Protected = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (!user.isLoggedIn) {
      toast.warning("Login First!", { position: "top-right" });
      alert('You need to login First')
      navigate("/");
    }

    setLoading(false);
  }, []);

  return Loading ? <p>Loading..</p> : <Outlet />;
};

export default Protected;
