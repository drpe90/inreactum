import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://images.unsplash.com/photo-1564324738191-7f91304232eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-7xl text-5xl font-bold text-black-800">
            I AM <s>GROOT</s> ALEX
          </h1>
          <h2 className="flex sm:text-5xl text-4xl pt-4 text-black-800">
            <TypeAnimation
              sequence={[
                "and I try to learn one new thing every day ",
                2000,
                "and I know gun fu ",
                2000,
                "and I haven't touched a book in ages ",
                2000,
                "and I sometimes make questionable choices ",
                2000,
                "and I don't like olives ",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <AiOutlineFacebook className="cursor-pointer" size={24} />
            <AiOutlineInstagram className="cursor-pointer" size={24} />
            <AiOutlineLinkedin className="cursor-pointer" size={24} />
            <AiOutlineTwitter className="cursor-pointer" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
