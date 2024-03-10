import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div className="flex items-center p-10">
                <h1 className="text-2xl">Take me to Home Page</h1>
                <Link to={"/"}>
                    <button className="bg-blue-500 px-4 text-white ml-4 rounded-full">
                        Home
                    </button>
                </Link>
            </div>
        </div>
    );
};
export default About;
