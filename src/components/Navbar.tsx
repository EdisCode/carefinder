import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../context/auth-context";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const profileActionRef = useRef(null);

  const { currentUser } = useAuth();

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // const toggleProfileActions = () => {
  //   const profileActions: any = profileActionRef.current;
  //   profileActions.style.display =
  //     profileActions.style.display === "none" ? "block" : "none";
  // };

  const navLinkStyles = ({ isActive }: any) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      padding: "10px",
    };
  };

  return (
    <nav ref={navRef}>
      <div className="logo">CareFinder</div>
      <div className="navLink">
        <NavLink style={navLinkStyles} to="/">
          Home
        </NavLink>
        <NavLink style={navLinkStyles} to="/about">
          About
        </NavLink>
        <NavLink style={navLinkStyles} to="/findHospital">
          Find Hospital
        </NavLink>
      </div>
      <div
        className="navLink"
        ref={profileActionRef}
        // onClick={toggleProfileActions}
      >
        {currentUser ? (
          <div>
            <span>
              <NavLink className="auth" to="/profile">
                Profile
              </NavLink>
            </span>
            <span>
              <NavLink onClick={logout} className="auth auth-danger" to={"/"}>
                Logout
              </NavLink>
            </span>
          </div>
        ) : (
          <div>
            <NavLink className="auth" to="/login">
              Login
            </NavLink>
            <NavLink className="auth" to="/signup">
              Signup
            </NavLink>
          </div>
        )}
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
