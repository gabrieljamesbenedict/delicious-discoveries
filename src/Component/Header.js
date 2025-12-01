import "../Styles/Header.css";

function Header() {
    return (
        <div className="header-div">
            <h1 className="header-title"> Delicious Discoveries</h1>
            <ul className="header-nav">
                <li><a href="" className="header-nav-button" >Home</a></li>
                <li><a href="" className="header-nav-button" >About</a></li>
                <li><a href="" className="header-nav-button" >Delicacies</a></li>
                <li><a href="" className="header-nav-button" >Vendors</a></li>
                <li><a href="" className="header-nav-button" >Contact Us</a></li>
            </ul>
        </div>
    );
}

export default Header;