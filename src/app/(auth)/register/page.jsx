import React from "react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card bg-base-100 shadow rounded w-105">
        <div className="card-body px-12 py-10">
          <h2 className="text-center text-2xl font-bold text-[#403F3F] mb-1">
            Register your account
          </h2>
          <div className="divider mb-5"></div>

          <div className="form-control mb-3">
            <label className="label pb-1">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered input-sm h-10 bg-base-200 focus:outline-none"
            />
          </div>

          <div className="form-control mb-3">
            <label className="label pb-1">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered input-sm h-10 bg-base-200 focus:outline-none"
            />
          </div>

          <div className="form-control mb-3">
            <label className="label pb-1">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered input-sm h-10 bg-base-200 focus:outline-none"
            />
          </div>

          <div className="form-control mb-3">
            <label className="label pb-1">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered input-sm h-10 bg-base-200 focus:outline-none"
            />
          </div>

          <div className="form-control mb-5">
            <label className="label cursor-pointer justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-sm" />
              <span className="label-text">Accept Term & Conditions</span>
            </label>
          </div>

          <button className="btn bg-[#403F3F] text-white w-full">Register</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
