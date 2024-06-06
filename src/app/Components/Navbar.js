"use client"
import Image from "next/image"
import React, { useState } from "react"
import Link from "next/link"
import NavbarDropdown from "./NavbarDropdown"
import MobileNavigation from "./MobileNavigation"

const Navbar = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null)
  const [IsBurger, setIsBurger] = useState(false)

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex((prevState) => (prevState === index ? null : index))
  }
  return (
    <div className="flex  justify-between items-center mx-auto lg:max-w-[1000px] xl:max-w-[1140px] 2xl:max-w-[1527px]">
      <div className="flex gap-[16px]">
        <Image
          src="/logo 1.svg"
          width={122.79}
          height={31.66}
          className=" sm:w-[7.1rem] 2xl:w-[12.2rem] "
        />
        <Image
          src="/logo 2.svg"
          width={122.79}
          height={31.66}
          className=" xs:hidden sm:block sm:w-[8.1rem]"
        />
        <Image
          src="/line 1.svg"
          width={3}
          height={3}
          className=" xs:hidden sm:block sm:w-[0.1rem]"
        />

        <Image
          src="/logo 3.svg"
          width={105.5}
          height={23.7}
          className=" xs:hidden sm:block xl:block sm:w-[8rem] "
        />
        <Image
          src="/logo 4.svg"
          width={105.5}
          height={47.49}
          className=" xs:hidden sm:block  sm:w-[7rem]"
        />
      </div>
      <div className="flex">
        <Image
          onClick={() => setIsBurger(!IsBurger)}
          src={IsBurger ? "/burger-menu.svg" : "/close-del.svg"}
          width={20}
          height={20}
          className={`xl:hidden lg:w-[3rem] lg:h-[3rem] transition-transform duration-300 ease-in-out ${IsBurger ? "transform-gpu hover:scale-110" : ""}`}
        />
        {/* {!IsBurger && <MobileNavigation />} */}
      </div>
      <div className=" max-w-[480px]  xs:hidden  xl:block flex-grow">
        <ul className="flex m-0  items-center justify-between text-darkBlue  ">
          <Link href="/solutions">
            <li
              onMouseEnter={() => handleDropdownToggle(1)}
              className="text-[1.4rem] relative flex gap-2 font-[600] cursor-pointer hover:text-orange transition-colors duration-300 ease-in-out "
            >
              Solutions <Image src={"/arrow-down.svg"} width={10} height={10} />
            </li>
          </Link>
          {openDropdownIndex === 1 && (
            <NavbarDropdown
              name={[
                "For Corporates",
                "For  Individuals and Families",
                "For Governments",
                "For Insurers",
              ]}
            />
          )}
          <Link href="/resources">
            <li
              onMouseEnter={() => handleDropdownToggle(2)}
              className="text-[1.4rem] flex gap-2 font-[600] cursor-pointer hover:text-orange transition-colors duration-300 ease-in-out"
            >
              Resources <Image src={"/arrow-down.svg"} width={10} height={10} />
            </li>
            {openDropdownIndex === 2 && (
              <NavbarDropdown
                name={["News and Media", "Digital Videos", "Blog", "FAQs"]}
              />
            )}
          </Link>
          <Link href="/about">
            <li className="text-[1.4rem] flex gap-2 font-[600] cursor-pointer hover:text-orange transition-colors duration-300 ease-in-out">
              About us
            </li>
          </Link>
          <li
            onMouseEnter={() => handleDropdownToggle(3)}
            className="text-[1.4rem] font-[600] flex gap-2
          items-center cursor-pointer hover:text-orange transition-colors duration-300 ease-in-out"
          >
            eng <Image src={"/arrow-down.svg"} width={10} height={10} />
            {openDropdownIndex === 3 && (
              <NavbarDropdown name={["Eng", "Urdu"]} />
            )}
          </li>

          <li>
            <button className="text-[1.4rem] bg-lightBlue text-[#fff] py-[16px] px-[24px] rounded-[10px] cursor-pointer">
              Download App
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
