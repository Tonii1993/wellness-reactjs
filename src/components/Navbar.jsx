import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import mainLogo from "../assets/MainLogo.svg";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const Navbar = ({ openForm }) => {
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [showSurgicalItems, setShowSurgicalItems] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleChange = () => {
    setMenu(!menu);
  };

  const handleClick = () => {
    openForm();
    closeMenu();
  };

  const closeMenu = () => {
    setMenu(false);
    setDropdown(false);
  };

  const toggleSurgicalItems = () => {
    setShowSurgicalItems(!showSurgicalItems);
  };

  const handleLanguageChange = (languageCode, languageLabel) => {
    changeLanguage(languageCode);
    setSelectedLanguage(languageLabel);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="fixed w-full z-20 ">
      <div className="flex lg:flex-row px-5 justify-between items-center md:px-5 bg-white shadow-md">
        <div className="w-full md:w-auto flex justify-center md:justify-between items-center lg:w-auto">
          <Link to="/">
            <img
              src={mainLogo}
              alt="main-logo"
              className="object-cover w-40 h-20"
            />
          </Link>
        </div>

        <div className="hidden xl:flex items-center justify-center text-center">
          <ul className="xl:flex lg:text-xl lg:space-x-5 2xl:space-x-10 2xl:text-2xl text-base text-[#A5A09C]">
            <li
              className="navbar-item  hover:text-ExtraDarkColor hover:font-semibold transition-all cursor-pointer"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              onClick={closeMenu}
            >
              {t("surgical")}
              {dropdown && (
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to="/surgical/overview">{t("overview")}</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/surgical/face">{t("face")}</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/surgical/eyes">{t("eyes")}</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/surgical/breast">{t("breast")}</Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/surgical/body">{t("body")}</Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="nav-link  hover:text-ExtraDarkColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              <Link to="/breastreconstruction">
                {t("breastReconstruction")}
              </Link>
            </li>
            <li
              className="nav-link hover:text-ExtraDarkColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              <Link to="/livestyle">{t("exclusiveLifestyle")}</Link>
            </li>
            <li
              className="nav-link hover:text-ExtraDarkColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              <Link to="/beautyallure">{t("beautyAllure")}</Link>
            </li>
            <li
              className="nav-link hover:text-ExtraDarkColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              <Link
                to="/blog"
                className="nav-link  hover:text-ExtraDarkColor transition-all cursor-pointer"
                onClick={closeMenu}
              >
                {t("blog")}
              </Link>
            </li>
            <li
              className="nav-link  hover:text-ExtraDarkColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              <Link to="/aboutus">{t("about")}</Link>
            </li>
            <li className="relative">
              <button
                className="flex flex-row justify-center items-center bg-success hover:text-ExtraDarkColor focus:outline-none"
                onClick={toggleDropdown}
              >
                {selectedLanguage} <RiArrowDownSLine />
              </button>
              {showDropdown && (
                <div className="absolute top-8 left-0 bg-[#a37653b3] shadow-lg rounded-md">
                  <div
                    className="hover:text-ExtraDarkColor text-white cursor-pointer p-2"
                    onClick={() => handleLanguageChange("en", "EN")}
                  >
                    EN
                  </div>
                  <div
                    className="hover:text-ExtraDarkColor text-white cursor-pointer p-2"
                    onClick={() => handleLanguageChange("it", "IT")}
                  >
                    IT
                  </div>
                  <div
                    className="hover:text-ExtraDarkColor text-white cursor-pointer p-2"
                    onClick={() => handleLanguageChange("al", "AL")}
                  >
                    AL
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div className="hidden xl:flex">
          <button
            className="lg:ml-2 bg-ExtraDarkColor text-white text-base font-crimson px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
            onClick={openForm}
          >
            Contact Us
          </button>
        </div>
        <div className="xl:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={28} onClick={handleChange} />
          ) : (
            <AiOutlineMenu size={28} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* mobile */}

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-[#2d3142] text-PrimaryColor left-0 top-16 font-serif font-semibold text-2xl text-center pt-8 pb-4 gap-4 w-full h-fit transition-transform duration-300`}
      >
        <button
          className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
          onClick={toggleSurgicalItems}
        >
          <span className="flex flex-row justify-center items-center gap-2">
            Surgical <IoIosArrowDown />
          </span>
        </button>
        {showSurgicalItems && (
          <div className="flex flex-col pl-8 text-xl text-center">
            <Link
              to="/surgical/overview"
              className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              Overview
            </Link>
            <Link
              to="/surgical/face"
              className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              Face
            </Link>
            <Link
              to="/surgical/eyes"
              className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              Eyes
            </Link>
            <Link
              to="/surgical/breast"
              className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              Breast
            </Link>
            <Link
              to="/surgical/body"
              className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              Body
            </Link>
          </div>
        )}
        <Link
          to="/breastreconstruction"
          className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Breast Reconstruction
        </Link>
        <Link
          to="/livestyle"
          className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Exclusive Lifestyle
        </Link>
        <Link
          to="/beautyallure"
          className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Beauty Allure
        </Link>
        <Link
          to="/blog"
          className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          Blog
        </Link>
        <Link
          to="/aboutus"
          className="nav-link text-PrimaryColor hover:text-ExtraDarkColor transition-all cursor-pointer"
          onClick={closeMenu}
        >
          About
        </Link>

        <div className="lg:hidden">
          <Button
            className="nav-btn bg-ExtraDarkColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
            onClick={handleClick}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
