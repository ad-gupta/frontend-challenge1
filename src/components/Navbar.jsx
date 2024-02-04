import React, { useState } from "react";
import iconTodo from "../images/icon-todo.svg";
import iconCalendar from "../images/icon-calendar.svg";
import iconReminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import iconArrowDown from "../images/icon-arrow-down.svg";
import iconArrowUp from "../images/icon-arrow-up.svg";
import iconMenu from "../images/icon-menu.svg"
import SideBar from "./SideBar";

const Navbar = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [menu,setMenu] = useState(false);

  const handleClick1 = () => {
    setToggle1(!toggle1);
    setToggle2(false);
  };
  const handleClick2 = () => {
    setToggle2(!toggle2);
    setToggle1(false);
  };
  const handleClick3=()=>{
    setMenu(!menu);

  }
  return (
    <header className="px-5 bg-slate-100">
      <div className="flex justify-between p-3 shadow-sm">
        <div className="flex gap-7 items-center">
          <h1 className="font-bold text-3xl">snap</h1>
          <ul className="flex gap-5 max-lg:hidden">
            <li
              className="flex gap-1 items-center justify-center cursor-pointer"
              onClick={handleClick1}
            >
              <span>Features</span>
              <span>
                <img src={toggle1 ? iconArrowUp : iconArrowDown} alt="" />
              </span>
            </li>
            <li className="flex gap-1 items-center justify-center cursor-pointer" onClick={handleClick2}>
              <span>Company</span>
              <span>
                <img src={toggle2 ? iconArrowUp : iconArrowDown}  alt="" />
              </span>
            </li>
            <li className="">Careers</li>
            <li className="">About</li>
          </ul>
        </div>
        <div className="flex items-center gap-5 max-lg:hidden">
          <button>login</button>
          <button className="border-2 border-black px-2 py-1 rounded-lg">
            Register
          </button>
        </div>
        <div className="flex items-center justify-center lg:hidden" onClick={handleClick3}>
            <img src={iconMenu} alt="" className="cursor-pointer"/>
        </div>
      </div>

      {toggle1 && (
        <div className="absolute top-14 left-20 w-50 bg-slate-300 p-3 rounded-lg shadow-lg max-lg:hidden">
          <ul className="flex flex-col gap-2 items-start">
            <li className="flex gap-4 items-center justify-center">
              <span>
                <img src={iconTodo} alt="" />
              </span>
              <span>Todo List</span>
            </li>
            <li className="flex gap-4 items-center justify-center">
              <span>
                <img src={iconCalendar} alt="" />
              </span>
              <span>Calendar</span>
            </li>
            <li className="flex gap-2 items-center justify-center">
              <span>
                <img src={iconReminders} alt="" />
              </span>
              <span>Reminders</span>
            </li>
            <li className="flex gap-4 items-center justify-center">
              <span>
                <img src={planning} alt="" />
              </span>
              <span>Planning</span>
            </li>
          </ul>
        </div>
      )}
      {toggle2 && (
        <div className="absolute top-14 left-[12rem] w-50 bg-slate-300 p-3 rounded-lg shadow-lg max-lg:hidden">
          <ul className="flex flex-col gap-2 items-start">
            <li className="flex gap-4 items-center justify-center">
              <span>History</span>
            </li>
            <li className="flex gap-4 items-center justify-center">
              <span>Our Team</span>
            </li>
            <li className="flex gap-2 items-center justify-center">
              <span>Blog</span>
            </li>
          </ul>
        </div>
      )}
      {
        menu && (
            <SideBar menu={menu} setMenu={setMenu}/>
        )
      }
    </header>
  );
};

export default Navbar;
