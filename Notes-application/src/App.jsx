import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <form className="flex items-start justify-between  gap-5 p-10 ">
        <div className="flex flex-col gap-4 w-1/2 items-start ">
          <input
            type="text"
            className="px-5 py-2 w-full font-medium outline-none border-2 rounded"
            placeholder="Enter Notes Heading"
          />
          <textarea
            type="text"
            className="px-5 py-2 w-full font-medium  outline-none h-32 border-2 rounded"
            placeholder="Write Details"
            name=""
            id=""
          ></textarea>
          <button className="bg-white  font-medium text-black outline-none w-full  px-5 py-2">
            Add Notes
          </button>
        </div>
        <img
          className="h-52 bg-red "
     src="https://thumbs.dreamstime.com/b/hand-writing-icon-isolated-black-background-hand-writing-icon-isolated-black-background-simple-vector-logo-163620549.jpg"  >
          
        </img>
      </form>
    </div>
  );
};

export default App;
