import { useNavigate } from "react-router-dom";
import "../styles/components.css";
// import SearchForm from "../components/SearchForm";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h2>Find the nearest hospital to you and make an appointment</h2>
      <p className="sub-heading">
        Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!
      </p>
      <button className="get-start" onClick={() => navigate("about")}>
        GET STARTED
      </button>
      <p className="learn">
        Learn more <i className="fa fa-arrow-right" aria-hidden="true"></i>
      </p>
      <p className="find-hospital">Find a nearby hospital</p>
      <div> {/* <SearchForm /> */}</div>
      <br />
      {/* <button className="btn btn-danger" onClick={handleAuth}>
        Logout
      </button> */}
    </div>
  );
};

export default Home;
