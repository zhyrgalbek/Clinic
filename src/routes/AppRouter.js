import { Routes, Route } from "react-router";
import AddClinic from "../components/AddClinic";
import UserAuth from "../components/UserAuth";
import AdminLayout from "../layouts/AdminLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<UserAuth />} />
      <Route path="/admin" element={<AddClinic />} />
      <Route path="/Pacient" element={<AdminLayout />} />
      <Route path="/addPacient" element={<AddClinic />} />
    </Routes>
  );
}
