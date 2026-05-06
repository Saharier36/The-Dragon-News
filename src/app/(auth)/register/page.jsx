"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFunc = async (data) => {
    const { email, name, image, password } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: image,
      callbackURL: "/login",
    });
    console.log(res, error);
    if (error) {
      toast.error(error.message);
    }
    if (res) {
      toast.success("Registration successful!");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
      <div className="card bg-base-100 shadow rounded w-105">
        <div className="card-body px-12 py-10">
          <h2 className="text-center text-2xl font-bold text-[#403F3F] mb-1">
            Register your account
          </h2>
          <div className="divider mb-5"></div>

          <form onSubmit={handleSubmit(handleRegisterFunc)}>
            <div className="form-control mb-3">
              <label className="label pb-1">
                <span className="label-text font-semibold">
                  Your Name<span className="text-error">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered input-sm h-10 bg-base-200 focus:outline-none"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-error text-xs">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="form-control mb-3">
              <label className="label pb-1">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter your photo URL"
                className="input input-bordered input-sm h-10 bg-base-200 focus:outline-none"
                {...register("image")}
              />
            </div>

            <div className="form-control mb-3">
              <label className="label pb-1">
                <span className="label-text font-semibold">
                  Email<span className="text-error">*</span>
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

            <div className="form-control mb-3">
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
                  {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <span className="text-error text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="form-control mb-5">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  {...register("terms", { required: "You must accept terms" })}
                />
                <span className="label-text">Accept Term & Conditions</span>
              </label>
              <br />
              {errors.terms && (
                <span className="text-error text-xs">
                  {errors.terms.message}
                </span>
              )}
            </div>

            <button className="btn bg-[#403F3F] text-white w-full">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
