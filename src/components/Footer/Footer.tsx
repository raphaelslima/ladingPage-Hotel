import Search from "../Search/Search";

import faceBook from "../../img/icon-facebook.png";
import instagram from "../../img/icon-instagram.png";

const Footer = () => {
  return (
    <div className="container mx-auto p-4">
      <Search />
      <footer className="border-t border-gray-200 flex items-center justify-around mt-8">
        <div>Logo</div>

        <div className="flex gap-2 py-8">
          <a href="/">
            <img src={faceBook} alt="faceBook" />
          </a>
          <a href="/">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
