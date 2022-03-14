import Link from "next/link";
import React from "react";
import { FaHome, FaReact } from "react-icons/fa";

import { AiFillMessage } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="bg-gray-50 shadow-inner w-60">
      <div>
        <img src="/logo.png"></img>
      </div>
      <ul className="flex-col space-y-4">
        <li>
          <Link href="/">
            <div className="flex space-x-8 items-center">
              <FaHome />
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div className="flex space-x-8 items-center">
              <FaReact />
              <span>Automation</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <div className="flex  space-x-8 items-center">
              <AiFillMessage />
              <span>Live Chat</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
