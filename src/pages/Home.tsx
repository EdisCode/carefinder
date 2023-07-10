import { NavLink } from "react-router-dom";
import "../styles/pages.css";
import Rectangle1 from "../assets/Rectangle 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section className="home">
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
      </section>
      <>
        <Footer />
      </>
    </>
  );
};

export default Home;
