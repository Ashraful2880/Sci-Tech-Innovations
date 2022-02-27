import React from "react";

const Alert = ({ alertText, alert, setAlert, alertColor, alertTitle }) => {
  return (
    <div className={`container mx-auto w-2/4 my-4 ${alert}`}>
      <div
        style={{ borderColor: `${alertColor}` }}
        className={`flex border p-1 rounded-md bg-[#EEF8F5] items-center`}
      >
        <button
          style={{ backgroundColor: `${alertColor}` }}
          className={` text-white px-3 py-1 rounded-md mr-4 ml-2`}
        >
          {alertTitle}
        </button>
        <h5 className="font-bold mr-2">A {alertTitle} Title</h5>
        <p>{alertText}</p>
        <button onClick={() => setAlert("hidden")} className=" ml-10">
          X
        </button>
      </div>
    </div>
  );
};

export default Alert;
