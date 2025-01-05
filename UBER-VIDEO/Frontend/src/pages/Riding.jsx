import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to={"/home"}
        className="fixed h-10 right-2 top-2 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="ri-home-5-line text-lg font-medium"></i>
      </Link>
      <div className="h-1/2">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-14"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium text-gray-600">SAHIL</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
            <p className="font-sm text-gray-600">Maruti Suzuki Alto</p>
            <p className="text-sm text-gray-900">
              <i className="ri-star-fill">4.3</i>
            </p>
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center flex-col">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="ri-map-pin-user-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Kankariya Talab, Bhopal
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹193.20</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full bg-green-600 mt-5 text-white font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
