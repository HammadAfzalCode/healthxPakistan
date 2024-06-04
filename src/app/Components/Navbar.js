import Image from "next/image"
import React from "react"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-auto lg:max-w-[1000px] xl:max-w-[1140px] 2xl:max-w-[1527px]">
      <div className="flex gap-[16px]">
        <Image
          src="/logo 1.svg"
          //   className="max-w-[250px]"
          width={122.79}
          height={31.66}
          className=" sm:w-[80px] lg:w-[122px]"
        />
        <Image src="/logo 2.svg" width={122.79} height={31.66} />
        <Image
          src="/line 1.svg"
          width={3}
          height={3}
          className="xs:hidden  xl:block"
        />

        <Image
          src="/logo 3.svg"
          width={105.5}
          height={23.7}
          className="xs:hidden  xl:block sm:w-[80px] lg:w-[122px]"
        />
        <Image
          src="/logo 4.svg"
          width={105.5}
          height={47.49}
          className="xs:hidden  xl:block"
        />
      </div>
      <div className=" max-w-[480px]  xs:hidden  xl:block flex-grow">
        <ul className="flex m-0  items-center justify-between text-darkBlue ">
          <li className="text-[1.4rem] flex gap-2 font-[600] cursor-pointer hover:text-orange transition-colors duration-300 ease-in-out">
            Solutions <Image src={"/arrow-down.svg"} width={10} height={10} />
          </li>
          <li className="text-[1.4rem] flex gap-2 font-[600] cursor-pointer hover:text-orange transition-colors duration-300 ease-in-out">
            Resources <Image src={"/arrow-down.svg"} width={10} height={10} />
          </li>
          <li className="text-[1.4rem] flex gap-2 font-[600] cursor-pointer hover:text-orange transition-colors duration-300 ease-in-out">
            About us <Image src={"/arrow-down.svg"} width={10} height={10} />
          </li>
          <li
            className="text-[1.4rem] font-[600] flex gap-2
          items-center cursor-pointer hover:text-orange transition-colors duration-300 ease-in-out"
          >
            eng <Image src={"/arrow-down.svg"} width={10} height={10} />
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
