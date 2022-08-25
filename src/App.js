import "./App.css";
import { Navbar } from "./components/Navbar";
import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import AppRouter from "./routes/AppRouter";
import { useNavigate } from "react-router";
import PacientCard from "./components/PacientCard";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  const user = useSelector((store) => store.auth.user);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (user) {
  //     navigate("/user");
  //   } else {
  //     navigate("/");
  //   }
  // }, [user]);
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
