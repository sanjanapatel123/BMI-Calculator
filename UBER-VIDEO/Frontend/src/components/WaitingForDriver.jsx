import React from "react";

const WaitingForDriver = ({ setwaitingForDriver }) => {
  return (
    <div>
      <h5
        onClick={() => setwaitingForDriver(false)}
        className="p-1 text-center top-0 w-[93%] absolute"
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
      </h5>

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
          <div className="flex items-center justify-center gap-10 border-b-2">
            <div className=" p-3">
              <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
                <i className="ri-shield-check-fill text-blue-700"></i>
              </h2>
              <h3 className="text-black font-medium">Safety</h3>
            </div>
            <div>
              <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full ml-5">
                <i className="ri-map-pin-2-fill text-blue-700"></i>
              </h2>
              <h3 className="text-black font-medium">Share my trip</h3>
            </div>
            <div>
              <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full ml-3">
                <i className="ri-phone-fill text-blue-700"></i>
              </h2>
              <h3 className="text-black font-medium">Call Driver</h3>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>

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
    </div>
  );
};

export default WaitingForDriver;
