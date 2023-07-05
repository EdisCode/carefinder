import React, { useRef } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
// import { Container, Row } from "reactstrap";
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
      fontWeight: isActive ? "600" : "normal",
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
        <div
          // className="profile__actions"
          ref={profileActionRef}
          // onClick={toggleProfileActions}
        >
          {currentUser ? (
            <>
              <span>
                <NavLink style={navLinkStyles} to="/profile">
                  Profile
                </NavLink>
              </span>
              <span>
                <button onClick={logout} className="btn btn-danger">
                  Logout
                </button>
              </span>
            </>
          ) : (
            <div className="d-flex align-items-center justify-content-center flex-column">
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
