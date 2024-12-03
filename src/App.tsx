// import { useState } from "react";
import "./App.css";
import { ImageHeader } from "./components/ImageHeader";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <ImageHeader />
      <div className="w-[350px]">
        <form className="mb-5">
          <input
            type="text"
            name=""
            id=""
            className="bg-gray-700 w-full mb-3 rounded-md p-2"
          />
          <button type="submit" className="bg-gray-500 w-1/2 p-2 rounded-sm">
            Add
          </button>
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default App;
