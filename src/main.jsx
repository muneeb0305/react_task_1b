import React from "react";
import { AuthContext } from "./authContext";
import { Routes, Route, Navigate } from "react-router-dom";
import SnackBar from "./components/SnackBar";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import NotFoundPage from "./pages/NotFoundPage";

function renderRoutes(role) {
  switch (role) {
    case "admin":
      return (
        <Routes>
          <Route
            path="/admin/dashboard"
            element={<AdminDashboardPage />}
          ></Route>
        </Routes>
      );
    default:
      return (
        <Routes>
          <Route exact path="/" element={<AdminLoginPage />}></Route>
          <Route path="/*" exact element={<NotFoundPage />}></Route>
        </Routes>
      );
  }
}

function Main() {
  const { state } = React.useContext(AuthContext);

  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            {!state.isAuthenticated
              ? renderRoutes("none")
              : renderRoutes(state.role)}
          </div>
        </div>
      </div>
      <SnackBar />
    </div>
  );
}

export default Main;
