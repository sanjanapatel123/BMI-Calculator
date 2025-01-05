import React from "react";

const LocationSearchPanel = ({ setvehiclePanelOpen, setPanelOpen }) => {
  //sample array for location
  const locations = [
    "24B, Near Kapoor's cafe , Sheryains coding school, Bhopal",
    "22C, Near Malholtra's cafe , Sheryains coding school, Bhopal",
    "20B, Near Singhai's cafe , Sheryains coding school, Bhopal",
    "18A, Near Patel's cafe , Sheryains coding school, Bhopal",
  ];
  return (
    <div>
      {/* this is just a sample data */}
      {locations.map(function (elem, index) {
        return (
          <div
            key={index}
            onClick={() => {
              setvehiclePanelOpen(true);
              setPanelOpen(false);
            }}
            className="flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 w-8 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
