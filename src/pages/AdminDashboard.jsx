import React, { useState } from "react";
import AdminNavSideBar from "../components/adminpage/AdminNavSideBar";
import Dashboard from "../components/adminpage/Dashboard";
import AdminProducts from "../components/adminpage/AdminProducts";
// import AdminProducts from "../components/adminpage/AdminProducts";
// import AddProduct from "../components/adminpage/AddProduct";
// import EditProduct from "../components/adminpage/EditProduct";
// import DeleteProduct from "../components/adminpage/DeleteProduct";

const AdminDashboard = () => {
  const [activePanel, setActivePanel] = useState("dashboard");

  return (
    <div className="w-full h-screen flex bg-gray-100">
      {/* Sidebar */}
      <AdminNavSideBar
        setActivePanel={setActivePanel}
        activePanel={activePanel}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto ">
        {activePanel === "dashboard" && <Dashboard />}
        {activePanel === "products" && <AdminProducts />}
        {activePanel === "addProduct" && <AddProduct />}
        {activePanel === "editProduct" && <EditProduct />}
        {activePanel === "deleteProduct" && <DeleteProduct />}
      </div>
    </div>
  );
};

export default AdminDashboard;
