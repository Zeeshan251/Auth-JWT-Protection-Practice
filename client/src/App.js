import { useEffect, useState } from "react";
import axoisInstance from "./api/axiosInstance";
import { useDispatch } from "react-redux";
import Navigation from "./components/Navigation";
import { setUser } from "./store/UserSlice";


function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const validateUser = async () => {
    try {
      setLoading(true);
      const response = await axoisInstance.get("/user/validateUser");
      // console.log(response.data);
      if (response.status === 200) {
        // console.log(response.data);
        dispatch(setUser(response.data));
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    validateUser();
  }, []);
  return loading ? <p>loading...</p> : <Navigation />;
}
export default App;
