import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const LogIn = () => {
  const [error, setError] = useState('')
  const { signIn, setUser } = use(AuthContext);
  const location = useLocation();
  const naviget = useNavigate();

  const handelLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((res) => {
        setUser(res.user);
        naviget(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        setError(err.code);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Log In Your Account
        </h2>
        <form onSubmit={handelLogIn} className="card-body">
          <fieldset className="fieldset">
            {/* log in  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-red-700">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
          <p>
            Don't Have an accout ?{" "}
            <Link className="text-secondary" to={"/auth/reg"}>
              Registrarion
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
