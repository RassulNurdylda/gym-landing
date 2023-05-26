import {
  RiInstagramFill,
  RiTelegramFill,
  RiWhatsappFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="body-font sticky w-full left-0 top-0 filter backdrop-blur-sm bg-black z-50 text-white">
      <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-bold items-center  mb-4 md:mb-0">
          <span className="ml-3 text-3xl uppercase">KUSH</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center uppercase text-center">
          +7 777 777 77 77
        </nav>
        <div className="flex justify-center text-2xl ">
          <a href="#!" className="mr-6 hover:text-gray-600">
            <RiTelegramFill />
          </a>
          <a href="#!" className="mr-6 hover:text-gray-600">
            <RiInstagramFill />
          </a>
          <a href="#!" className="mr-6 hover:text-gray-600">
            <RiWhatsappFill />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
