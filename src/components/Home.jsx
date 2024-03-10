import React from "react"
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex items-center p-10">
      <h1 className="text-2xl">Take me to About Page</h1>
        <Link to="/about">
          <button className=" bg-blue-500 px-4 text-white ml-4 rounded-full">
            About
          </button>
        </Link>
    </div>
  );
};
export default Home;