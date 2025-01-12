import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  //logic
  const calBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      toast.error("please enter a valid weight and height", {
        autoClose: 1000,
      });
    } else {
      let finalWeight = weight * 2.204623;
      let finalHeight = height * 12;
      const bmi = (finalWeight / (finalHeight * finalHeight)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("you are a healthy weight");
      } else {
        setMessage("you are overweight");
      }
    }
  };
  let imgsrc;
  if (bmi < 1) {
    imgsrc = null;
  } else {
    if (bmi < 25) {
      imgsrc = "../src/assets/underweight.png";
    } else if (bmi >= 25 && bmi < 30) {
      imgsrc = "../src/assets/healthy.png";
    } else {
      imgsrc = "../src/assets/overweight.png";
    }
  }
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form action="" onSubmit={calBmi}>
          <div>
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="height">Height (foot)</label>
            <input
              type="text"
              placeholder="Enter Height value"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload}>
              Reload
            </button>
            <ToastContainer></ToastContainer>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>

          <div className="img-container">
            <img src={imgsrc} alt="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
