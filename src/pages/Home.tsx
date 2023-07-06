import { NavLink } from "react-router-dom";
import "../styles/pages.css";
import Search from "../components/Search";
import Rectangle1 from "../assets/Rectangle 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-left">
          <h2 className="heading">
            Find the nearest hospital to you and make an appointment
          </h2>
          <p className="sub-heading">
            Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!
          </p>
          <NavLink className="auth" to={"/login"}>
            GET STARTED
          </NavLink>
          <p className="learn">
            Learn more <FontAwesomeIcon icon={faArrowRight} color="#08299b" />
          </p>
        </div>
        <div className="hero-right">
          <img src={Rectangle1} alt="rectangle" />
        </div>
      </div>

      <div className="search">
        <p className="find-hospital">Find a nearby hospital</p>
        <div>
          {" "}
          <Search />
        </div>
        <br />
      </div>
    </div>
  );
};

export default Home;
