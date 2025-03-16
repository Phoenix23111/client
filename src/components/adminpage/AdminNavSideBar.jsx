import React, { useState } from "react";
import { useAuth } from "../../contexts/auth/AuthContext";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AdminNavSideBar = ({ setActivePanel, activePanel }) => {
  const navigate = useNavigate();
  const { user, logoutMutation } = useAuth();
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

  return (
    <div className="flex flex-col w-2/12 h-full bg-main divide-y-2 space-y-4 text-white p-4">
      {/* Profile */}
      <div className="flex flex-col items-center gap-2 justify-center">
        <img src={user.profilepic} alt="" className="rounded-full w-20 h-20" />
        <div className="font-bold">{user.name}</div>
      </div>

      {/* Menu */}
      <div className="flex flex-col p-4 divide-y-2 space-y-4 ">
        <button
          onClick={() => setActivePanel("dashboard")}
          className={`hover:text-primary  py-1 text-left ${
            activePanel === "dashboard" ? "font-bold" : ""
          }`}
        >
          Dashboard
        </button>

        {/* Products Menu with Sub-Buttons */}
        <div className="flex flex-col   ">
          <button
            onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
            className={`hover:text-primary py-1  flex justify-between items-center text-left ${
              activePanel.includes("product") ? "font-bold" : ""
            }`}
          >
            <span>Products </span>

            <span>
              {isProductMenuOpen ? <BsCaretUpFill /> : <BsCaretDownFill />}
            </span>
          </button>

          {isProductMenuOpen && (
            <div className="ml-4  flex flex-col divide-y-2 px-4 space-y-2">
              <button
                onClick={() => setActivePanel("products")}
                className={`hover:text-primary py-1 text-left ${
                  activePanel === "products" ? "font-bold" : ""
                }`}
              >
                View Products
              </button>
              <button
                onClick={() => setActivePanel("addProduct")}
                className={`hover:text-primary py-1 text-left${
                  activePanel === "addProduct" ? "font-bold" : ""
                }`}
              >
                Add Product
              </button>
              <button
                onClick={() => setActivePanel("editProduct")}
                className={`hover:text-primary py-1 text-left ${
                  activePanel === "editProduct" ? "font-bold" : ""
                }`}
              >
                Edit Product
              </button>
              <button
                onClick={() => setActivePanel("deleteProduct")}
                className={`hover:text-primary py-1 text-left ${
                  activePanel === "deleteProduct" ? "font-bold" : ""
                }`}
              >
                Delete Product
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => setActivePanel("orders")}
          className={`hover:text-primary py-1  text-left ${
            activePanel === "orders" ? "font-bold" : ""
          }`}
        >
          Orders
        </button>
        <button
          onClick={() => setActivePanel("users")}
          className={`hover:text-primary py-1 text-left ${
            activePanel === "users" ? "font-bold" : ""
          }`}
        >
          Users
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            logoutMutation.mutate();
            navigate("/auth");
          }}
        >
          {" "}
          logout{" "}
        </button>
      </div>
    </div>
  );
};

export default AdminNavSideBar;
