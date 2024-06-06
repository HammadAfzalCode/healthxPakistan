import React from "react"
import Image from "next/image"

const SolutionCard = ({ imgPath, cardHeading, cardDescription }) => {
  return (
    <div
      style={{ boxShadow: "0px 4px 17.6px 0px rgba(0, 0, 0, 0.1)" }}
      className=" sm:max-w-[25.7rem] flex flex-col justify-between sm:max-h-[50rem] mt-14  hover:bg-[#365464] p-8"
    >
      <Image
        src={imgPath}
        width={30}
        height={30}
        className="w-[11.2rem] h-[11.3rem]"
      />
      <div className="mt-10">
        <h3 className="text-[2rem] font-[600]leading-[32.47px]">
          {cardHeading}
        </h3>
        <p className="text-[1.2rem] font-[300] leading-[21.47px]">
          {cardDescription}
        </p>
      </div>
      <p className="text-orange text-[1.2rem] font-[500] ml-auto leading-[21.47px]  ">
        Read More...
      </p>
    </div>
  )
}

export default SolutionCard
