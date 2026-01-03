import React from "react";

const Login = () => {
  return (
  <div className="mx-auto max-w-fit">
      <div className="card-body flex justify-center items-center bg-base-200 mt-5">
      <fieldset className="fieldset">
        <label className="label text-gray-700">Email</label>
        <input
          type="email"
          className="input placeholder:text-gray-800"
          placeholder="Email"
        />
        <label className="label text-gray-700">Password</label>
        <input
          type="password"
          className="input placeholder:text-gray-800"
          placeholder="Password"
        />
        <div></div>
        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </div>
  </div>
  );
};

export default Login;
