import Footer from "../components/Footer";
import Search from "../components/Search";
import "../styles/pages.css";

function FindHospital() {
  return (
    <>
      <section className="home">
        <div className="search">
          <p className="find-hospital">Find a nearby hospital</p>
          <div>
            {" "}
            <Search />
          </div>
          <br />
        </div>
      </section>
      <>
        <Footer />
      </>
    </>
  );
}

export default FindHospital;
