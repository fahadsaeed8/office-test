"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";

interface FormData {
  username: string;
  password: string;
  LoggedIn: boolean;
}  
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push("/dashboard");
  };
  return (
    <div className="flex h-screen overflow-hidden bg-[#FAFBFA]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#FAFBFA] p-6 ml-[140px] mt-[50px]"
      >
        <Image
          src={"/images/_sun.png"}
          alt=""
          width={200}
          height={200}
          className="w-[214px] ml-[25px]"
        />
        <p className="text-[18px] leading-[20.7px] font-normal mx-9 mb-10 mt-[65px] text-[#000000]">
          Log in to your account
        </p>

        <div className="mb-4">
          <div className="flex items-center bg-white w-[268px] border rounded-md p-2">
            <span className="mr-2">
              <Image src={"/icons/_user.svg"} alt="" width={18} height={18} />
            </span>

            <input
              id="username"
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
              className="w-full border-none"
            />
          </div>
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-5">
          <div className="flex items-center border bg-white w-[268px] rounded-md p-2">
            <span className="mr-2">
              <Image
                src={"/icons/_password.svg"}
                alt=""
                width={18}
                height={18}
              />
            </span>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full border-none focus:ring-0"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2"
            >
              {showPassword ? (
                <Image
                  src={"/icons/_eyeSlash.svg"}
                  alt=""
                  width={18}
                  height={18}
                />
              ) : (
                <Image
                  src={"/icons/_showpassword.svg"}
                  alt=""
                  width={18}
                  height={18}
                />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-7 mx-[9px]">
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register("LoggedIn")}
              className="form-checkbox accent-orange-500"
            />
            <span className="text-[13px] leading-[14.95px] font-normal ml-[10px]">
              Keep me logged in
            </span>
          </label>
        </div>

        <Button width="274px" type="submit">
          Login
        </Button>
      </form>
      <div className="flex justify-center mt-auto mb-0">
        <Image
          src={"/images/_loginWallpaper.png"}
          height={1200}
          width={1200}
          alt=""
          className="w-[1054px] h-[615px]  relative -bottom-[55px]"
        />
      </div>
    </div>
  );
};

export default Login;
