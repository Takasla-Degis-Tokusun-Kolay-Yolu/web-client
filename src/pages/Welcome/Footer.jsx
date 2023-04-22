import { Link } from "react-router-dom";
const Footer = ({ handleScrollClikToUp }) => (
  <footer
    className="bottom-0 left-0 z-20 w-full  p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-center md:p-6 "
    style={{ fontFamily: "Urbanist" }}
  >
    <p className="text-sm text-gray-500 text-center ">
      © 2023{" "}
      <span
        onClick={handleScrollClikToUp}
        className="hover:underline cursor-pointer"
      >
        Takasla
      </span>
      . All Rights Reserved. © Made by &#10084;&#65039;{" "}
    </p>
  </footer>
);

export default Footer;
