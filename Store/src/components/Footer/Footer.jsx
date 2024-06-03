import Image from "next/image";
import { BsPaypal } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import logo from "../../../public/Images/d_bazar_logo.png";
import Container from "../Container/Container";

export default function Footer() {
  return (
    <div className="bg-primary py-20 text-white">
      <Container>
        <footer className=" items-center justify-between gap-40 space-y-10 text-center md:flex md:space-y-0">
          <nav className="flex flex-1 flex-col gap-4">
            <h6 className="text-xl font-medium">Company</h6>
            <a className=" font-thin">About Us</a>
            <a className=" font-thin">Contact Us</a>
            <a className=" font-thin">Careers</a>
            <a className=" font-thin">Latest News</a>
          </nav>
          <nav className="flex flex-1 flex-col gap-4">
            <h6 className="text-xl font-medium">Latest News</h6>
            <a className=" font-thin">Fish & Milk</a>
            <a className=" font-thin">Soft Drinks</a>
            <a className=" font-thin">Milk & Dairy</a>
            <a className=" font-thin">Beauty & Health</a>
          </nav>
          <nav className="flex flex-1 flex-col gap-4">
            <h6 className="text-xl font-medium">My Account</h6>
            <a className=" font-thin">Dashboard</a>
            <a className=" font-thin">My Orders</a>
            <a className=" font-thin">Recent Orders</a>
            <a className=" font-thin">Update Profile</a>
          </nav>
          <nav className="flex flex-1 flex-col gap-4">
            <div className="flex items-center justify-center ">
              <Image src={logo} className="" alt="" />
            </div>
            <a className=" font-thin">Mirpur ,Dhaka, Bangladesh</a>
            <a className=" font-thin">Tel: +738235498</a>
            <a className=" font-thin">Email: hdksifk@gmail.com</a>
          </nav>
        </footer>
        <footer className="mx-10 mt-20 items-center justify-between gap-10 space-y-10 text-center md:flex md:space-y-0">
          <nav className="">
            <a className="text-start font-thin">Online Payments</a>
            <div className="mt-2 flex items-center justify-center gap-5 text-2xl">
              <a href="">
                <BsPaypal></BsPaypal>
              </a>
              <a href="">
                <BsPaypal></BsPaypal>
              </a>
              <a href="" className="text-5xl">
                <SiVisa></SiVisa>
              </a>
            </div>
          </nav>
          <nav className="">
            <a className="text-start font-thin ">Follow us on</a>
            <div className="mt-2 flex items-center justify-center gap-5 text-3xl">
              <a href="">
                <FaFacebook></FaFacebook>
              </a>
              <a href="">
                <FaYoutube></FaYoutube>
              </a>
              <a href="">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href="">
                <FaInstagram></FaInstagram>
              </a>
            </div>
          </nav>
        </footer>
      </Container>
    </div>
  );
}
