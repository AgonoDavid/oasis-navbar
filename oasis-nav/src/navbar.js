import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logomain.png";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";

const Navbar = () => {
  const logotext = "INITIATIVE";

  const [toggle, setToggle] = useState(false);

  const handletoggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <nav className={toggle ? "navbar expanded" : "navbar"}>
        <div className="nav_left">
          <img src={logo} alt="logo" className="img-logo" />
          <p>{logotext}</p>
        </div>
        <ul className="links">
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Support</li>
          <Button className="btn-donate">Donate</Button>
        </ul>
        <div className="toggle-icon" onClick={handletoggle}>
          {toggle ? (
            <Icon icon={x} size={28} className="icon-style" />
          ) : (
            <Icon icon={menu} size={28} className="icon-style" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
