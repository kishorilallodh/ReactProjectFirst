import React from "react";
import image from "../img/man.png";
import image2 from "../img/mam.png";
import image3 from "../img/man2.png";

const About = () => {
  return (
    <>
      <div className="w-full  text-center pt-10 ">
        <h1 className="w-[900px] mx-auto  text-green-800 font-bold text-5xl">
          Everthing you need to take your Startup to the next level
        </h1>
        <p className="pt-5 w-[600px] mx-auto text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicit tenetur modi
          dolorem ullam nostrum molestias quo laborum aut mollitia architecto.
        </p>
      </div>

      <div className="flex m-10">
        <div className="w-[350px] mx-auto h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="w-full h-[260px] ">
            <img
              className="w-[50%] object-cover mx-auto "
              src={image}
              alt="Card Image"
            />
          </div>
          <div className="p-2 ">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              Abhishek Verma
            </h2>
            <p className="text-gray-600 mt-1 text-center">CEO & Founder</p>
            <p className="text-gray-600 mt-1 text-center">
              "My aim to democratize and transform the Empowerment of india"
            </p>
          </div>
        </div>

        <div className="w-[350px] mx-auto h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="w-full h-[260px] ">
            <img
              className="w-[50%] object-cover mx-auto "
              src={image2}
              alt="Card Image"
            />
          </div>
          <div className="p-2 ">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              Swashtika Singh
            </h2>
            <p className="text-gray-600 mt-1 text-center">Co-founder</p>
            <p className=" text-gray-600 mt-1 text-center">
              "Trainer add soul into technology,education come before
              technology"
            </p>
          </div>
        </div>

        <div className="w-[350px] mx-auto h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="w-full h-[260px] ">
            <img
              className="w-[50%] object-cover mx-auto "
              src={image3}
              alt="Card Image"
            />
          </div>
          <div className="p-2 ">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              Prateek Sharma
            </h2>
            <p className="text-gray-600 mt-1 text-center">Manager</p>
            <p className="text-gray-600 mt-1 text-center">
              "My aim to democratize and transform the Empowerment of india"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
