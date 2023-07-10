import { useState } from "react";
import "../styles/pages.css";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<any | null>(null);

  const navigate = useNavigate();

  const signIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      console.log(user);

      setLoading(false);
      toast.success("Successfully logged in");
      navigate("/home");
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
        <Row className="row">
          {loading ? (
            <Col>
              <h5 className="heading">Loading...</h5>
            </Col>
          ) : (
            <Col>
              <h3 className="heading">Welcome Back</h3>
              <p className="sub-heading">Login Using Correct Details!</p>

              <Form className="authForm" onSubmit={signIn}>
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
                  Login
                </button>
                <p className="learn" style={{ textAlign: "center" }}>
                  Don't have an account?{" "}
                  <Link to="/signup" style={{ color: "#08299b" }}>
                    Create one here
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

export default Login;
