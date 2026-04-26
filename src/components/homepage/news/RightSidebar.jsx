import Image from "next/image";
import React from "react";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import swimming from "@/assets/swimming.png";
import classroom from "@/assets/class.png";
import playground from "@/assets/playground.png";
import background from "@/assets/bg.png";

const socials = [
  { icon: <FaFacebook className="text-blue-600 text-xl" />, label: "Facebook" },
  { icon: <FaTwitter className="text-blue-400 text-xl" />, label: "Twitter" },
  {
    icon: <FaInstagram className="text-pink-500 text-xl" />,
    label: "Instagram",
  },
];

const qZones = [
  { img: swimming, label: "Swimming" },
  { img: classroom, label: "Class" },
  { img: playground, label: "Play Ground" },
];

const RightSidebar = () => {
  return (
    <div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Login With</h3>
        <button className="w-full mb-2 py-2 px-4 border border-blue-500 text-blue-500 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100">
          <i className="fab fa-google text-red-500"></i>
          <FaGoogle />
          Login with Google
        </button>

        <button className="w-full mb-2 py-2 px-4 border border-gray-500 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100">
          <i className="fab fa-github text-gray-800"></i>
          <FaGithub />
          Login with GitHub
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Find Us On</h3>
        <ul className="border border-gray-200 rounded-xl divide-y divide-gray-200">
          {socials.map(({ icon, label }) => (
            <li key={label} className="flex items-center gap-3 px-4 py-3">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F3F3F3]">
                {icon}
              </span>
              <span className="text-gray-600 font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <div className="flex flex-col gap-10 bg-[#F3F3F3] p-4">
          <h3 className="text-xl font-semibold mb-4">Q-Zone</h3>
          {qZones.map(({ img, label }) => (
            <div key={label} className="relative w-full flex justify-center">
              <Image src={img} alt={label} />
            </div>
          ))}
        </div>
      </div>
      <Image
        className="hidden md:block mt-8 rounded-md"
        src={background}
        alt="Background"
        width={350}
        height={200}
      />
    </div>
  );
};

export default RightSidebar;
