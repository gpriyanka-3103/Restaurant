import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>

          <p className="mid">
            At Nami, we believe every meal should be an experience, not just a plate of food. Our kitchen brings together global flavours, premium ingredients, and a passion for perfection to serve dishes that comfort, excite, and surprise.

From carefully curated continental classics to chef-inspired creations, every recipe is crafted with attention to detail and a love for quality. Whether you’re here for a casual bite, a family gathering, or a special celebration, we promise warm hospitality, unforgettable flavours, and moments worth coming back for.
          </p>

          {/* EXPLORE MENU BUTTON */}
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="exploreBtn"
          >
            Explore Menu
            <span>
              <HiOutlineArrowRight />
            </span>
          </Link>
        </div>

        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
