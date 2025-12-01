import { Link } from "react-router-dom";
import "../Styles/Header.css";

function Header() {
    return (
        <div className="header-div">
            <h1 className="header-title"> Delicious Discoveries</h1>
            <ul className="header-nav">
                <li><Link to={"/home"} className="header-nav-button" >Home</Link></li>
                <li><Link to={"/about-us"} className="header-nav-button" >About</Link></li>
                <li><Link to={"/delicacies"} className="header-nav-button" >Delicacies</Link></li>
                <li><Link to={"/vendors"} className="header-nav-button" >Vendors</Link></li>
                <li><Link to={"/contact-us"} className="header-nav-button" >Contact Us</Link></li>
            </ul>
        </div>
    );
}

export default Header;