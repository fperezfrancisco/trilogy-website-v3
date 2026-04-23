/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function NavList({ mobile, main, list, scrolled, onItemClick }) {
  return (
    <nav
      className={`items-center
      ${main && !mobile ? "hidden md:flex" : ""}
    `}
    >
      {list && (
        <ul
          className={`flex list-none
        ${mobile ? "flex-col mt-12 gap-5" : "flex-row gap-5 lg:gap-6"}
        `}
        >
          {list.map((listItem) => (
            <li
              key={listItem.link}
              className={`${mobile ? "text-lg" : "text-[0.86rem] lg:text-[0.9rem]"} ${
                mobile
                  ? "text-[#1e1e1e] hover:text-blue-500"
                  : scrolled
                    ? "text-white hover:text-white/80"
                    : "text-[#1e1e1e] hover:text-blue-500"
              } font-medium cursor-pointer transition-colors duration-200 hover:underline underline-offset-8`}
            >
              <Link className="" to={listItem.link} onClick={onItemClick}>
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
