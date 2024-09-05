import { CiLinkedin } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-28">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo Section */}
        <div className="flex gap-2 justify-center">
          <img src="/vite.svg" alt="FurniFlex Logo" className="w-6 h-6" />
          <h2 className="text-xl font-bold">Furni<span className="text-blue-500">Flex</span></h2>
        </div>

        {/* About Us Links */}
        <div>
          <h3 className="text-[18px] font-semibold text-white mb-3">About US</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-[18px] text-[#81859F] ">Master Plan</a></li>
            <li><a href="/" className="text-[18px] text-[#81859F] ">Jobs</a></li>
            <li><a href="/" className="text-[18px] text-[#81859F] ">Invest</a></li>
            <li><a href="/" className="text-[18px] text-[#81859F] ">Pressroom</a></li>
            <li><a href="/" className="text-[18px] text-[#81859F] ">Blog</a></li>
            <li><a href="/" className="text-[18px] text-[#81859F] ">Contact</a></li>
          </ul>
        </div>

        {/* Explore EEVE Links */}
        <div>
          <h3 className="text-[18px] font-semibold text-white mb-3">Explore EEVE</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-[18px] text-[#81859F] ">Unlock my Robot Power</a></li>
            <li><a href="/" className="text-[18px] text-[#81859F] ">Starlight</a></li>
            <li><a href="/" className="text-[18px] text-[#81859F] ">Robot Platform</a></li>
            <li><a href="/" className="text-[18px] text-[#81859F] ">EEVE Roadmap</a></li>
          </ul>
        </div>

        {/* Community & Support Links */}
        <div>
          <h3 className="text-[18px] font-semibold text-white mb-3">Community & Support</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-[18px] text-[#81859F] ">Willow X Community</a></li>
            <li><a href="/" className="text-[18px] text-[#81859F] ">Developer & Maker Access</a></li>
            <li><a href="/" className="text-[18px] text-[#81859F] ">Special Cases</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mt-28 mx-auto px-4 border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between">
        {/* Social Media */}
        <div className="flex space-x-4 mb-4 md:mb-0 ">
          <a href="/" className="text-[#81859F]"><SlSocialFacebook className="text-white" /></a>
          <a href="/" className="text-[#81859F]"><IoLogoInstagram className="text-white" /></a>
          <a href="/" className="text-[#81859F]"><RiTwitterXFill className="text-white" /></a>
          <a href="/" className="text-[#81859F]"><CiLinkedin className="text-white" /></a>
        </div>

        {/* Legal Links */}
        <div className="space-x-6 text-sm">
          <a href="/" className="text-[#81859F]">March22 Recap</a>
          <a href="/" className="text-[#81859F]">Privacy Policy</a>
          <a href="/" className="text-[#81859F]">General Terms</a>
          <a href="/" className="text-[#81859F]">Contact</a>
        </div>

        {/* Language Selector */}
        <div className="flex items-center justify-center space-x-2 mt-4 md:mt-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="us flag" className="w-[18px] m-auto" />
          <p className="text-gray-400">United States (English)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
