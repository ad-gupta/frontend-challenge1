import {useState} from 'react'

import iconClose from "../images/icon-close-menu.svg"
import iconArrowDown from '../images/icon-arrow-down.svg'
import iconTodo from "../images/icon-todo.svg";
import iconCalendar from "../images/icon-calendar.svg";
import iconReminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import iconArrowUp from "../images/icon-arrow-up.svg";

const sideBar = ({menu,setMenu}) => {
    const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const handleClick1 = () => {
    setToggle1(!toggle1);
    setToggle2(false);
  };
  const handleClick2 = () => {
    setToggle2(!toggle2);
    setToggle1(false);
  };
  return (
    <div className='h-full w-[50%] fixed right-0 top-0 bg-slate-50 p-5'>
      <img src={iconClose} alt="" className='float-right cursor-pointer' onClick={prev=> setMenu(!prev)}  />
      <div className='flex flex-col gap-4 mt-12'>
      <div className='flex items-center gap-2 cursor-pointer' onClick={handleClick1}>
        <span>Features</span>
        <span><img src={toggle1 ? iconArrowUp : iconArrowDown} alt="" /></span>
      </div>
      {toggle1 && (
        <div className="relative w-50 bg-slate-300 p-3 rounded-lg shadow-lg">
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
      <div className='flex items-center gap-2 cursor-pointer' onClick={handleClick2}>
        <span>Company</span>
        <span><img src={iconArrowDown} alt="" /></span>
      </div>
      {toggle2 && (
        <div className="relative w-50 bg-slate-300 p-3 rounded-lg shadow-lg ">
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
      <div>
        <span>Careers</span>
      </div>
      <div>
        <span>About</span>
      </div>
      <button>Login</button>
      <button className="border-2 border-black p-1 rounded-lg">
            Register
          </button>
      </div>
    </div>
  )
}

export default sideBar
