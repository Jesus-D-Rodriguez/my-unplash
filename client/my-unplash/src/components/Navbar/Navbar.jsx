import "./Navbar.css";
import logo from "../../assets/my_unsplash_logo.svg"
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navbar = ()=>{
    return (
    <div className="nav-bar">
        <div id="first-nav-bar">
            <img src={logo} alt="" />
            <div id="search-div">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
                <input type="text" id="search" placeholder="Search by name"></input>
            </div>
        </div>
        <div id="second-nav-bar">
            <button id="add">Add a photo</button>
        </div>
    </div>)
}

export default Navbar;