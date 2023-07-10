import { useState } from "react";
import "../styles/pages.css";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { setDoc, doc } from "firebase/firestore";
import { store } from "../firebase.config";
import { toast } from "react-toastify";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<any | null>(null);

  const navigate = useNavigate();

  const signup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      //store userdata in firestore database
      await setDoc(doc(store, "users", user.uid), {
        uid: user.uid,
        displayName: username,
        email,
      });
      setLoading(false);
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Unexpected error");
      }
    }
  };

  return (
    <section className="login">
      <Container className="loginCon">
        <Row>
          {loading ? (
            <Col>
              <h5 className="heading">Loading...</h5>
            </Col>
          ) : (
            <Col>
              <h3 className="heading">Create An Account</h3>

              <Form className="authForm" onSubmit={signup}>
                <FormGroup className="formGroup">
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter your Username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="formGroup">
                  <input
                    type="email"
                    className="input"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="formGroup">
                  <input
                    type="password"
                    className="input"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>

                <button type="submit" className="btn">
                  Create an Account
                </button>
                <p className="learn" style={{ textAlign: "center" }}>
                  Already have an account?{" "}
                  <Link style={{ color: "#08299b" }} to="/login">
                    Login
                  </Link>
                </p>
              </Form>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Signup;
