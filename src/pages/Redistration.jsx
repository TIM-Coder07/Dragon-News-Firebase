import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Redistration = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);

  const handelRegi = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, phone, email, password);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((err) => {
            console.log(err.code);
            setUser(user);
          });
      })
      .catch((err) => {
        console.log(err.code);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register Your Account
        </h2>
        <form onSubmit={handelRegi} className="card-body">
          <fieldset className="fieldset">
            {/* name   */}
            <label className="label">Name</label>
            <input
              name="name"
              type="name"
              className="input"
              placeholder="Name"
            />

            {/* photo  */}
            <label className="label">Photo (URL)</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo"
            />

            {/* photo  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="text"
              className="input"
              placeholder="Email"
            />

            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
          <p>
            Already Have an accout ?{" "}
            <Link className="text-secondary" to={"/auth/logIn"}>
              Log In
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Redistration;
