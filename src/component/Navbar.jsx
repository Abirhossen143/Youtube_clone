import React from "react";
import Avatar from "react-avatar";
import { IoMdMenu } from "react-icons/io";
import logo from "../../public/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="flex justify-between px-6 py-2 ">
      <div className="flex items-center ">
        <IoMdMenu className="text-xl cursor-pointer " />
        <img src={logo} alt="" className="w-28 cursor-pointer" />
      </div>
      <div className="flex w-[35%]">
        <div className="w-[100%] px-3 py-2 rounded-l-full border">
          <input type="text" placeholder="serach" className="outline-none " />
        </div>
        <button className="px-4 py-2 bg-gray-100 rounded-r-full border">
          <CiSearch size={"24px"} />
        </button>
        <FaMicrophone
          size={"42px"}
          className="ml-3 border rounded-full p-2 curser-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex space-x-5 items-center ">
        <RiVideoAddLine className="" />
        <AiOutlineBell />
        <Avatar name="A" size="38" color="#A020F0" round={true} />
      </div>
    </div>
  );
};

export default Navbar;
