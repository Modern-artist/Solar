import Link from "next/link";
import { Link as Links } from "react-scroll";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { scroller } from "react-scroll";
import { useEffect } from "react";
const Navbar = () => {
  const navigation = [
    // "Product",
    "Services",
    "About us",
    "Why us",
    "Testimonials",
    "FAQ",
  ];
  const scrollToASection = (sectionName) => {
    scroller.scrollTo(`${sectionName}`, {
      delay: 50,
      duration: 1500,
      smooth: "easeInOutQuint",
    });
  }

  const handleCall = () => {
    window.location.href = `tel:${"+91963164999"}`;
  };
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 font-medium text-amber-500">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span className="text-2xl font-bold text-white">Dunamis</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-400 rounded-md lg:hidden hover:text-amber-500 focus:text-amber-500 focus:bg-amber-50 focus:outline-none     ">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-col w-full my-5 lg:hidden">
                  <>
                    {navigation.map((menu, index) => (
                      <div className="px-2" key={index}>
                          <div
                            onClick={() => scrollToASection(menu.split(" ")[0].toLowerCase())}
                          className="w-full px-4 py-2 -ml-4 text-gray-400 rounded-md    hover:text-amber-500 focus:text-amber-500 focus:bg-amber-100     focus:outline-none">
                            {menu}
                          </div>
                      </div>
                      
                    ))}
                    <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-md lg:ml-5">
                      Get Started
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>

                <div
                  onClick={() => scrollToASection(menu.split(" ")[0].toLowerCase())}
                  // onClick={()=>scrollToTargetDiv("services")}  
                  className="cursor-pointer inline-block px-4 py-2 text-lg font-normal text-gray-100 no-underline rounded-md  hover:text-amber-500 focus:text-amber-500 focus:bg-amber-50 focus:outline-none ">
                  {menu}
                </div>


              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <div 
          onClick={()=>handleCall()}
          className="px-6 py-2 text-white bg-slate-700 cursor-pointer rounded-md md:ml-5 flex gap-2 hover:bg-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M14.05 2a9 9 0 0 1 8 7.94" /><path d="M14.05 6A5 5 0 0 1 18 10" /></svg>
             Call us now
          </div>

          {/* <ThemeChanger /> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
