import React from "react";
import { Link } from "react-router-dom";

function NavList({ mobile, main, list }) {
  return (
    <nav
      className={`items-center
      ${main && !mobile ? "hidden md:flex" : ""}
    `}
    >
      {list && (
        <ul
          className={`flex list-none
        ${mobile ? "flex-col mt-12 pl-3 gap-2" : "flex-row gap-6"}
        `}
        >
          {list.map((listItem) => (
            <li
              className={`text-[0.9rem] font-medium  text-[#1e1e1e] cursor-pointer hover:underline underline-offset-8 hover:text-blue-500`}
            >
              <Link className="" to={listItem.link}>
                {listItem.itemTitle}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavList;
