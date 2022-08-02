import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Details from "../pages/Details";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard/:id" element={<Details />} />
          <Route path="profile" element={<Profile />} />
          <Route path="newBlog" element={<NewBlog />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
