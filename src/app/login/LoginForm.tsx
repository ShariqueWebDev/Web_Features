"use client";
import React, { useActionState } from "react";
import { login } from "../lib/action";
import { useFormStatus } from "react-dom";

const LoginForm = () => {
  const [state, loginAction] = useActionState(login, undefined);
  
  return (
    <div className=" flex justify-center items-center h-screen">
      <form className="flex max-w-[300px] w-full flex-col gap-5" action={loginAction}>
      <p className="text-2xl text-gray-800">Athentication with JWT</p>
        {/* <div className="flex flex-col gap-2">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            className="border"
          />
        </div> */}

        <div className="flex flex-col gap-2">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="border p-1.5 rounded-md"
          />
        </div>
        {state?.errors?.email && (
          <p className="text-red-500">{state.errors.email}</p>
        )}

        <div className="">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="border w-full p-1.5 rounded-md"
          />
        </div>
        {state?.errors?.password && (
          <p className="text-red-500">{state.errors.password}</p>
        )}
        <SubmitButton />
      </form>
    </div>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="text-white bg-gradient-to-r from-gray-600 via-yellow-500 to-yellow-700 p-2 rounded-md"
    >
      Login
    </button>
  );
}

export default LoginForm;
