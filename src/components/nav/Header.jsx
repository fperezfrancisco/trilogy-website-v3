import React, { useContext, useState } from "react";
import trilogyLogo from "../../assets/logos/trilogy-t-logo.png";
import { Link, useNavigate } from "react-router-dom";
import NavList from "./NavList";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { GlobalContext } from "../../context/context";
import { FaUser } from "react-icons/fa6";

function Header() {
  const navBarList = [
    { itemTitle: "Training", link: "/training" },
    { itemTitle: "About Us", link: "/about" },
    { itemTitle: "Contact", link: "/contact" },
  ];

  const {
    loggedIn,
    setLoggedIn,
    user,
    setUser,
    loading,
    setLoading,
    setLoggingIn,
    loggingIn,
  } = useContext(GlobalContext);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleSignUpHeader = () => {
    setLoggingIn(false);
    navigate("/userauth");
  };

  const handleLogInHeader = () => {
    setLoggingIn(true);
    navigate("/userauth");
  };

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-10 bg-white h-[56px] px-4 md:px-8 max-w-[2400px] my-0 mx-auto flex items-center justify-between">
      <span className="h-full flex items-center">
        <Link to="/">
          <img
            src={trilogyLogo}
            width={36}
            className="hover:scale-110 transition-all ease-out duration-150 cursor-pointer"
          />
        </Link>
      </span>
      <span className="flex items-center gap-4 lg:gap-10">
        <NavList mobile={false} main={true} list={navBarList} />
        <span className="h-full px-4 items-center gap-3 hidden md:flex">
          {loggedIn ? (
            <button
              className="px-4 py-1 rounded-2xl border-[1px] border-black text-sm hover:bg-neutral-200 flex items-center gap-1 capitalize "
              onClick={() => navigate(`/userdashboard/${user.user.uid}`)}
            >
              <FaUser />
              Account
            </button>
          ) : (
            <>
              <button
                className="px-4 py-1 rounded-2xl border-[1px] border-black bg-black text-white text-sm hover:bg-neutral-600 flex items-center gap-1 capitalize "
                onClick={handleSignUpHeader}
              >
                Sign Up
              </button>
              <button
                className="px-4 py-1 rounded-2xl border-[1px] border-black text-sm hover:bg-neutral-200 flex items-center gap-1 capitalize "
                onClick={handleLogInHeader}
              >
                Log In
              </button>
            </>
          )}
        </span>
      </span>

      <span
        className={`h-full ml-4 flex md:hidden items-center justify-center`}
        onClick={toggleMenu}
      >
        <HiMenu className="text-3xl hover:scale-110 transition-all ease-out duration-150 cursor-pointer" />
      </span>
      <div
        className={`fixed ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-[110%]"
        } transition-all ease-out duration-200  z-10 top-0 bottom-0 right-0 mobileMenu h-screen w-full max-w-[275px] bg-white p-4 sm:p-6 flex md:hidden flex-col rounded-l-2xl border-2`}
      >
        <span
          className="absolute z-20 top-4 right-4 font-bold text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          <HiX />
        </span>
        <NavList mobile={true} main={true} list={navBarList} />
      </div>
    </header>
  );
}

export default Header;
