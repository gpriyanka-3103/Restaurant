import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">NAMI✧</div>

        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                key={element.id}
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setShow(false)}
              >
                {element.title}
              </Link>
            ))}
          </div>

          {/* OUR MENU BUTTON FIXED */}
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="menuBtn"
            onClick={() => setShow(false)}
          >
            OUR MENU
          </Link>
        </div>

        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
