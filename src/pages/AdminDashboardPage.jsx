import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Table from "../components/Table1.jsx";


const AdminDashboardPage = () => {
  return (

    <div style={{ backgroundColor: "#111111", height: "1024px" }}>
      {/* Header */}
      <Header />
      {/* main */}
     <Main/>
      <Table/>
    </div>

  );
};

export default AdminDashboardPage;
