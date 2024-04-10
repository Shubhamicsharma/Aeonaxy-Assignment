import React, { useState } from 'react';

const Navbar = () => {
  // State to track whether the navbar is open or closed in mobile view
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  // State to track whether the dropdowns are open or closed
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  // Function to toggle the navbar state in mobile view
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Function to toggle the first dropdown state
  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  // Function to toggle the second dropdown state
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 mt-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://marketing-assets.calendly.com/media/logo.svg" className="h-8" alt="Calendly Logo" />
        </a>
        {/* Button to toggle the navbar in mobile view */}
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isNavbarOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        {/* Menu items */}
        <div className={`w-full lg:block lg:w-auto ${isNavbarOpen ? '' : 'hidden'}`} id="navbar-dropdown">
          <ul className="flex  flex-col font-bold p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#006BFF] lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Individuals</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#006BFF] lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Teams</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#006BFF] lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Enterprise</a>
            </li>
            <li className="relative">
              {/* Dropdown button with arrow icon */}
              <button
                onClick={toggleDropdown1}
                id="dropdownNavbarLink1"
                data-dropdown-toggle="dropdownNavbar1"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#006BFF] lg:p-0 lg:w-auto dark:text-white lg:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent"
              >
                Product
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 transform ${isDropdownOpen1 ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                className={`absolute top-full left-0 mt-1 w-auto bg-white border border-gray-200 rounded-lg shadow-lg py-1 ${isDropdownOpen1 ? '' : 'hidden'} dark:bg-gray-700 dark:divide-gray-600`}
                id="dropdownNavbar1"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton1">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
              </div>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#006BFF] lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Pricing</a>
            </li>
            <li className="relative">
              {/* Dropdown button with arrow icon */}
              <button
                onClick={toggleDropdown2}
                id="dropdownNavbarLink2"
                data-dropdown-toggle="dropdownNavbar2"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#006BFF] lg:p-0 lg:w-auto dark:text-white lg:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent"
              >
                Resources
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 transform ${isDropdownOpen2 ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                className={`absolute top-full left-0 mt-1 w-auto bg-white border border-gray-200 rounded-lg shadow-lg py-1 ${isDropdownOpen2 ? '' : 'hidden'} dark:bg-gray-700 dark:divide-gray-600`}
                id="dropdownNavbar2"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton2">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={`w-full lg:block lg:w-auto ${isNavbarOpen ? '' : 'hidden'}`} id="navbar-dropdown">
            <ul className="flex flex-col font-bold p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:items-center lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#006BFF] lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Log In</a>
                </li>
                <li>
                <a href="#" className="block w-fit text-white rounded-full bg-[#006BFF] hover:bg-[#00419c] lg:border-0 py-2 px-4 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Get Started</a>
                </li>
            </ul>    
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
