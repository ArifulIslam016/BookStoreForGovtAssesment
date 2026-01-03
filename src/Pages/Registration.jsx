import React from "react";

const Registration = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gray-600">Welcome to Book Store!</h1>
          <p className="py-6 text-gray-600">
         Welcome to Premiuym Book Store, Sign in for unlock more future
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label text-gray-700">Email</label>
              <input type="email" className="input placeholder:text-gray-800"  placeholder="Email" />
              <label className="label text-gray-700">Password</label>
              <input type="password" className="input placeholder:text-gray-800" placeholder="Password" />
              <div>
              </div>
              <button className="btn btn-neutral mt-4">Registration</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
