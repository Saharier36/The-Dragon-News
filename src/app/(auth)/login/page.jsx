"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      alert(error.message);
    } else {
      alert("Login successful!");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card bg-base-100 shadow rounded w-105">
        <div className="card-body px-12 py-10">
          <h2 className="text-center text-2xl font-bold text-[#403F3F] mb-1">
            Login your account
          </h2>
          <div className="divider mb-5"></div>

          <form onSubmit={handleSubmit(handleLoginFunc)}>
            <div className="form-control mb-3">
              <label className="label pb-1">
                <span className="label-text font-semibold">
                  Email address<span className="text-error">*</span>
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered input-sm h-10 bg-base-200 focus:outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-error text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="form-control mb-5">
              <label className="label pb-1">
                <span className="label-text font-semibold">
                  Password<span className="text-error">*</span>
                </span>
              </label>
              <div className="relative">
                <input
                  type={isShowPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered input-sm h-10 bg-base-200 focus:outline-none pr-10"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-base-content/70 hover:text-base-content"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  aria-label={
                    isShowPassword ? "Hide password" : "Show password"
                  }
                >
                  {isShowPassword ? <FaEyeSlash size={17} /> : <FaEye size={17}/>}
                </button>
              </div>

              {errors.password && (
                <span className="text-error text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>

            <button className="btn bg-[#403F3F] text-white w-full">
              Login
            </button>
          </form>

          <p className="text-center mt-3 text-sm font-semibold text-[#706F6F]">
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
