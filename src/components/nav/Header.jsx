import { useEffect, useState } from "react";
import trilogyLogo from "../../assets/logos/trilogy-t-logo.png";
import { Link } from "react-router-dom";
import NavList from "./NavList";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

function Header() {
  const navBarList = [
    { itemTitle: "All Training", link: "/training" },
    { itemTitle: "Group Training", link: "/opengroups" },
    { itemTitle: "1-1 Training", link: "/elitementorship" },
    { itemTitle: "Elite Pods", link: "/elitepods" },
    { itemTitle: "About Us", link: "/about" },
    { itemTitle: "Contact", link: "/contact" },
  ];
  const bookNowUrl = "https://trilogysoccer.setmore.com/";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-[100] h-[64px] px-4 md:px-8 max-w-[2400px] my-0 mx-auto flex items-center justify-between transition-colors duration-300 ${
        scrolled ? "bg-blue-500 shadow-md" : "bg-transparent"
      }`}
    >
      <span className="h-full flex items-center">
        <Link to="/" onClick={closeMenu}>
          <img
            src={trilogyLogo}
            width={36}
            className="hover:scale-110 transition-all ease-out duration-150 cursor-pointer"
            alt="Trilogy Soccer logo"
          />
        </Link>
      </span>
      <div className="hidden md:flex items-center gap-5 lg:gap-6">
        <NavList
          mobile={false}
          main={true}
          list={navBarList}
          scrolled={scrolled}
        />
        <a
          href={bookNowUrl}
          target="_blank"
          rel="noreferrer"
          className={`rounded-xl px-5 py-2.5 text-[0.82rem] font-semibold transition-colors duration-200 ${
            scrolled
              ? "bg-white text-blue-500 hover:bg-blue-50"
              : "bg-blue-500 text-white hover:bg-blue-400"
          }`}
        >
          Book Now
        </a>
      </div>
      <button
        type="button"
        aria-label="Open navigation menu"
        className="h-full ml-4 flex md:hidden items-center justify-center"
        onClick={toggleMenu}
      >
        <HiMenu
          className={`text-3xl hover:scale-110 transition-all ease-out duration-150 cursor-pointer ${
            scrolled ? "text-white" : "text-[#1e1e1e]"
          }`}
        />
      </button>
      <div
        className={`fixed inset-0 z-[90] bg-black/30 transition-opacity duration-200 md:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />
      <div
        className={`fixed ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-[110%]"
        } transition-all ease-out duration-200 z-[100] top-0 bottom-0 right-0 mobileMenu h-screen w-full max-w-[300px] bg-white p-5 sm:p-6 flex md:hidden flex-col rounded-l-2xl border border-neutral-200 shadow-xl`}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          className="absolute z-20 top-4 right-4 font-bold text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          <HiX />
        </button>
        <NavList
          mobile={true}
          main={true}
          list={navBarList}
          scrolled={false}
          onItemClick={closeMenu}
        />
        <a
          href={bookNowUrl}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
          className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-blue-400"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}

export default Header;
