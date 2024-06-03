import Image from "next/image";
import illustrator1 from "../../../public/Images/illustrator1.png";
import illustrator2 from "../../../public/Images/illustrator2.png";
import playStore from "../../../public/Images/playstore.png";
import Container from "@/components/Container/Container";
import { FaApple } from "react-icons/fa6";

export default function GetYourDailyNeeds() {
  return (
    <div className="mt-9 bg-[#F6F6F6] py-10 sm:mt-16 md:mt-24 lg:mt-[150px]">
      <Container>
        <div className="flex flex-col items-center  justify-between gap-6 md:flex-row">
          <div className="md:w-[35%]">
            <Image
              className="rounded-lg object-cover"
              src={illustrator1}
              alt="Product Image"
              loading="lazy"
              placeholder="blur"
            />
          </div>
          <div className="space-y-4 md:w-[35%]">
            <h1 className="text-center text-[25px] font-semibold leading-[32px]">
              Get Your Daily Needs From <br /> Our E-BAZAR Store
            </h1>
            <p className="mx-auto text-center text-[12px] text-gray-500 lg:max-w-[80%]">
              There are many products you will find in our shop, choose your
              daily necessary product from our E-BAZAR shop and get some special
              offers
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex w-max items-center gap-4 rounded-lg bg-black px-3 py-2">
                <FaApple className="text-[25px] text-white" />
                <div>
                  <p className="text-[8px] text-white">Available on the</p>
                  <p className="text-[12px] text-white">App Store</p>
                </div>
              </div>
              <div className="flex w-max items-center gap-3 rounded-lg bg-black px-3 py-2">
                <Image className="" src={playStore} alt="Product Image" />
                <div>
                  <p className="text-[8px] text-white">Available on the</p>
                  <p className="text-[12px] text-white">App Store</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[35%]">
            <Image
              className="rounded-lg object-cover "
              src={illustrator2}
              alt="Product Image"
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
