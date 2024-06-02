import NavBar from "./NavBar";
import "./Header.css";
import whiteLogo from "./assets/1.png";

const Header = () => {
  return (
    <header className="header">
      <div className="head">
        <div className="name-logo">
          <img src={whiteLogo} alt="username" />
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
