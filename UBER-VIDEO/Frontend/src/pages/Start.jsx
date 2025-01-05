import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 w-full flex justify-between flex-col">
        <img
          src="https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png"
          alt=""
          className="w-16 ml-8"
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Let Started with Uber</h2>
          <Link
            to={"/login"}
            className="w-full bg-black text-white py-3 rounded mt-5 flex items-center justify-center"
          >
            Continue
          </Link>
        </div>
      </div>
    </>
  );
};

export default Start;
