import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card bg-base-100 shadow rounded w-105">
        <div className="card-body px-12 py-10">
          <h2 className="text-center text-2xl font-bold text-[#403F3F] mb-1">
            Login your account
          </h2>
          <div className="divider mb-5"></div>

          <div className="form-control mb-3">
            <label className="label pb-1">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered input-sm h-10 bg-base-200 focus:outline-none"
            />
          </div>

          <div className="form-control mb-5">
            <label className="label pb-1">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered input-sm h-10 bg-base-200 focus:outline-none"
            />
          </div>

          <button className="btn bg-[#403F3F] text-white w-full">Login</button>

          <p className="text-center mt-3 text-sm text-[#706F6F]">
            Don&apos;t Have An Account ?{" "}
            <a href="/register" className="text-error font-semibold">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
