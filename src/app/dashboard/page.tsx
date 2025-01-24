"use server";
import React from "react";
import { logout } from "../lib/action";

const Dashboard = () => {
  return (
    <>
      <div className="text-5xl">Dashboard Here</div>
      <div className="">
        <form className="" action={logout}>
          <button
            type="submit"
            className="w-[300px] text-center ml-5 mt-5 text-white bg-gradient-to-r from-gray-600 via-yellow-500 to-yellow-700 p-2 rounded-md"
          >
            Logout
          </button>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
