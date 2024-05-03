"use client";
import { getLoginInfo } from "@/actions";
import { useAuth } from "@/auth/useAuth";
import Nav from "@/components/Home/Nav";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();
  const {setAuth} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = await getLoginInfo(formData);
    
    try {
      if(user){
        setAuth(user)
        router.push('/')
      }else{
        setError("There is an error in your information")
      }
    } catch (error) {
      setError(error.message)
    }
  };

  return (
    <main className="">
      <Nav />
      <section className="h-screen grid place-items-center">
        <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
          <h4 className="font-bold text-2xl">Sign in</h4>
          <form onSubmit={handleSubmit} className="login-form">
            <div>
              <label for="email">Email Address</label>
              <input type="email" name="email" id="email" required />
            </div>

            <div>
              <label for="password">Password</label>
              <input type="password" name="password" id="password" required />
            </div>
            {
              error && <p className="text-xs text-center text-red-500 mt-1">{error}</p>
            }
            <button
              type="submit"
              className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
            >
              Login
            </button>
          </form>

          <p className="text-center text-xs text-gray-600">Or</p>

          <Link
            href="/register"
            className="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
          >
            Create New Account
          </Link>
        </div>
      </section>
    </main>
  );
}
