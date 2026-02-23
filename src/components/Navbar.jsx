import React, { use } from "react";
import { Link, NavLink } from "react-router";
import UserIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handelLogOut = () => {
    logOut();
  };

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img
          className="w-12 rounded-full"
          src={`${user ? user.photoURL : UserIcon}`}
          alt=""
        />
        {user ? (
          <button onClick={handelLogOut} className="btn btn-primary px-10">
            Log Ou
          </button>
        ) : (
          <Link to={"/auth/logIn"} className="btn btn-primary px-10 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
