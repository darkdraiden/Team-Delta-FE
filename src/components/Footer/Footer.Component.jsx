import React from "react";

// Importing icons from React-icons ----> Box icons
import { SiYourtraveldottv } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import {
  BsFillEnvelopeFill,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsLinkedin,
} from "react-icons/bs";

const FooterSm = () => {
  return (
    <div className="footer-container py-4 bg-zinc-700 text-gray-300">
      <div className="section-one flex items-center justify-center gap-16">
        <div className="flex gap-4">
          <div className="text-white pt-1">
            <SiYourtraveldottv />
          </div>
          <div className="font-bold text-white">Make your Plans</div>
        </div>
        <div className="">
          <button className="bg-red-500 p-2 rounded-md text-white">
            Contact Today!
          </button>
        </div>
      </div>
      <div className="text-white text-center flex justify-center pt-3">
        Got a plan,event,activity,or a great experience? <br />
        Partner with us & get listed on Travel
      </div>

      <div className="section-two bg-zinc-600 my-4 h-32 flex justify-evenly items-center">
        <div className="text-4xl text-gray-300">
          <div className="ml-4">
            <RiCustomerService2Line />
          </div>
          <h3 className="text-sm">24/7 CARE</h3>
        </div>
        <div className="text-4xl text-gray-300">
          <div className="ml-3">
            <GiTicket />
          </div>
          <h3 className="text-sm">BOOKING</h3>
        </div>
        <div className="text-4xl text-gray-300">
          <div className="ml-6">
            <BsFillEnvelopeFill />
          </div>
          <h3 className="text-sm">NEWSLETTER</h3>
        </div>
      </div>

      <div className="section-three flex justify-center p-6">
        <img
          src="https://icons.iconarchive.com/icons/simpleicons-team/simple/256/yourtraveldottv-icon.png"
          alt="travel logo"
          width="80px"
          height="80px"
        />
      </div>

      <div className="section-four flex justify-center gap-4 text-2xl text-gray-500">
        <BsFacebook />
        <BsTwitter />
        <BsInstagram />
        <BsYoutube />
        <BsPinterest />
        <BsLinkedin />
      </div>

      <div className="section-five flex justify-center text-sm text-center text-gray-400 pt-4">
        <p>
          Copyright 2023 @ Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
      <br />
      <div className="section-five px-8 flex justify-center text-sm text-gray-400 text-center">
        <p>
          The images and content used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended for study purpose. Unauthorized
          use is prohibited and punishable by law{" "}
        </p>
      </div>
    </div>
  );
};

const FooterMd = () => {
  return (
    <div className="footer-container py-4 h-auto bg-zinc-700 text-gray-300 ">
      <div className="section-one flex items-center justify-center gap-16">
        <div className="flex gap-4">
          <div className="text-white pt-1">
            <SiYourtraveldottv />
          </div>
          <div className="font-bold text-white">Make your Plans</div>
        </div>
        <div className="">
          <button className="bg-red-500 p-2 rounded-md text-white">
            Contact Today!
          </button>
        </div>
      </div>
      <div className="text-white flex justify-center py-3">
        Got a plan,event,activity,or a great experience? Partner with us & get
        listed on BookMyShow
      </div>

      <div className="section-two bg-zinc-600 my-4 h-32 flex justify-evenly items-center">
        <div className="text-4xl text-gray-300">
          <div className="ml-14">
            <RiCustomerService2Line />
          </div>
          <h3 className="text-sm">24/7 CUSTOMER CARE</h3>
        </div>
        <div className="text-4xl text-gray-300">
          <div className="ml-20">
            <GiTicket />
          </div>
          <h3 className="text-sm">RESEND BOOKING CONFIRMATION</h3>
        </div>
        <div className="text-4xl text-gray-300">
          <div className="ml-20">
            <BsFillEnvelopeFill />
          </div>
          <h3 className="text-sm">SUBSCRIBE TO THE NEWSLETTER</h3>
        </div>
      </div>

      <div className="section-three flex justify-center p-6">
        <img
          src="https://icons.iconarchive.com/icons/simpleicons-team/simple/256/yourtraveldottv-icon.png"
          alt="travel logo"
          width="100"
          height="80px"
        />
      </div>

      <div className="section-four flex justify-center gap-4 text-2xl text-gray-500">
        <BsFacebook />
        <BsTwitter />
        <BsInstagram />
        <BsYoutube />
        <BsPinterest />
        <BsLinkedin />
      </div>

      <div className="section-five flex justify-center text-sm text-gray-400 pt-4">
        <p>
          Copyright 2023 @ Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
      <div className="section-five pl-28 pr-28 flex justify-center text-sm text-gray-400 text-center">
        <p>
          The images and content used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended for study purpose. Unauthorized
          use is prohibited and punishable by law{" "}
        </p>
      </div>
    </div>
  );
};

const FooterLg = () => {
  return (
    <div className="footer-container py-4 h-auto bg-zinc-700 text-gray-300 ">
      <div className="section-one flex items-center justify-evenly">
        <div className="flex gap-4">
          <div className="text-white pt-1">
            <SiYourtraveldottv />
          </div>
          <div className="font-bold text-white">Make your Plans</div>
          <div className="text-white">
            Got a plan,event,activity,or a great experience? Partner with us &
            get listed on Travel
          </div>
        </div>
        <div className="">
          <button className="bg-red-500 p-2 rounded-md text-white">
            Contact Today!
          </button>
        </div>
      </div>

      <div className="section-two bg-zinc-600 my-4 h-28 flex justify-center gap-28 items-center">
        <div className="text-7xl text-gray-300">
          <div className="ml-9">
            <RiCustomerService2Line />
          </div>
          <h3 className="text-sm">24/7 CUSTOMER CARE</h3>
        </div>
        <div className="text-7xl text-gray-300">
          <div className="ml-20">
            <GiTicket />
          </div>
          <h3 className="text-sm">RESEND BOOKING CONFIRMATION</h3>
        </div>
        <div className="text-7xl text-gray-300">
          <div className="ml-20">
            <BsFillEnvelopeFill />
          </div>
          <h3 className="text-sm">SUBSCRIBE TO THE NEWSLETTER</h3>
        </div>
      </div>

      <div className="section-three flex justify-center pb-6">
        <img
          src="https://icons.iconarchive.com/icons/simpleicons-team/simple/256/yourtraveldottv-icon.png"
          alt="travel logo"
          width="80px"
          height="80px"
        />
      </div>

      <div className="section-four flex justify-center gap-4 text-2xl text-gray-500">
        <BsFacebook />
        <BsTwitter />
        <BsInstagram />
        <BsYoutube />
        <BsPinterest />
        <BsLinkedin />
      </div>

      <div className="section-five flex justify-center text-sm text-gray-400 pt-4">
        <p>
          Copyright 2023 @ Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
      <div className="section-five pl-28 pr-28 flex justify-center text-sm text-gray-400 text-center">
        <p>
          The images and content used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended for study purpose. Unauthorized
          use is prohibited and punishable by law{" "}
        </p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      {/* {/Mobile Screen Footer/} */}
      <div className="md:hidden">
        <FooterSm />
      </div>

      {/* {/Medium/Tab Screen Footer/} */}
      <div className="hidden md:flex lg:hidden">
        <FooterMd />
      </div>

      {/* {/Large Screen Footer/} */}
      <div className="hidden md:hidden lg:flex">
        <FooterLg />
      </div>
    </footer>
  );
};

export default Footer;
