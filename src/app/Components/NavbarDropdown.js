import React from "react"

const NavbarDropdown = ({ name }) => {
  return (
    <div className="absolute top-[6rem] py-5  text-[1.4rem] text-darkBlue font-[600]  bg-[#fff]">
      <ul className="">
        {name.map((item) => (
          <li
            className="py-4  px-9 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-orange hover:text-[#fff] flex gap-4"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavbarDropdown
