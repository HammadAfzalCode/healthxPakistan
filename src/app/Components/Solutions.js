import React from "react"
import SolutionCard from "./SolutionCard"

const Solutions = () => {
  return (
    <div className=" bg-darkBlue  text-[#fff]">
      <div className="lg:max-w-[1000px] xl:max-w-[1140px] mx-auto 2xl:max-w-[1527px]   ">
        <div className="flex justify-between pt-10  ">
          {" "}
          <div className="justify-self-start">
            <h2 className="text-orange font-[700] text-[4rem]">
              Bridging Gaps in Healthcare
            </h2>
            <p className="font-[275] text-[3.2rem]">
              Services for Individuals and Organizations
            </p>
          </div>
          <div className="flex items-center  gap-5    ">
            <div className="flex flex-col">
              <p className="text-[1.2rem] ml-[12rem]">Our Solution</p>
              <p className="text-[1.2rem]">We are committed to your health</p>
            </div>
            <div>
              <p className="text-[#1f8b7b] font-[700] text-[4rem]">03</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between xs:flex-col sm:flex-row">
          <SolutionCard
            imgPath={"/parents.svg"}
            cardHeading={"Individuals and Families"}
            cardDescription={
              "Given our fast-paced lives, visiting the doctor’s office has become a burden and an inconvenience for many."
            }
          />
          <SolutionCard
            imgPath={"/corporate.svg"}
            cardHeading={"Corporate Health Solutions"}
            cardDescription={
              "Employees are a company’s greatest asset and an integral part of a company’s success."
            }
          />
          <SolutionCard
            imgPath={"/healthcare.svg"}
            cardHeading={"Healthcare Insurance"}
            cardDescription={
              "Frequent overutilization of healthcare services has become a major concern for insurance companies"
            }
          />
          <SolutionCard
            imgPath={"/govt.svg"}
            cardHeading={"Government Health Initiatives"}
            cardDescription={
              "Healthx understands the challenges governments face in providing accessible and affordable "
            }
          />
        </div>
        <div className="font-[300] text-[1.2rem]  ">
          <p className="leading-[21.47px] mt-14 pb-14">
            Powered by TruDoc, Healthx is a global healthcare management
            company providing high-quality primary healthcare services to all.
            Our primary function as a healthcare management company in
            Pakistan is to keep patients healthy and reduce costs for patients
            and payers. To meet the diverse needs of our customers, we offer a
            range of health-care plans.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Solutions
