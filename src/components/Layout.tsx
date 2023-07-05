import Navbar from "./Navbar";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routers />
      </div>
    </>
  );
};

export default Layout;
