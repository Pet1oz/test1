import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
export default function Login() {
  return (

    
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
      }}
    >
      <NavBar />
      <div className="container-fluid">
        <div
          className="row"
          style={{ minHeight: "100vh" }}
        >
          {/* LEFT SIDE */}
          <div
            className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center"
          >
            <div
              style={{
                color: "white",
                maxWidth: "500px",
              }}
            >
              <h1
                style={{
                  fontSize: "4rem",
                  fontWeight: "700",
                }}
              >
                Learn Anywhere
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  opacity: 0.9,
                }}
              >
                Upgrade your skills with our
                online learning platform.
              </p>

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="learning"
                className="img-fluid rounded-4 shadow-lg mt-4"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="col-lg-6 d-flex justify-content-center align-items-center"
          >
            <Card
              className="border-0 shadow-lg"
              style={{
                width: "100%",
                maxWidth: "450px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(15px)",
                borderRadius: "25px",
              }}
            >
              <Card.Body className="p-5">

                <div className="text-center mb-4">
                  <h2
                    style={{
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    Welcome Back 👋
                  </h2>

                  <p
                    style={{
                      color: "#e2e8f0",
                    }}
                  >
                    Login to continue learning
                  </p>
                </div>

                <Form>

                  <Form.Group className="mb-3">
                    <Form.Label
                      style={{ color: "white" }}
                    >
                      Email
                    </Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      style={{
                        borderRadius: "12px",
                        padding: "12px",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label
                      style={{ color: "white" }}
                    >
                      Password
                    </Form.Label>

                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      style={{
                        borderRadius: "12px",
                        padding: "12px",
                      }}
                    />
                  </Form.Group>

                  <div className="text-end mb-3">
                    <Link
                      to="/forgot-password"
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                      }}
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <Button
                    className="w-100 mb-3"
                    style={{
                      borderRadius: "12px",
                      padding: "12px",
                      fontWeight: "600",
                    }}
                  >
                    Login
                  </Button>

                  <Button
                    variant="light"
                    className="w-100"
                    style={{
                      borderRadius: "12px",
                      padding: "12px",
                    }}
                  >
                    🔵 Continue with Google
                  </Button>

                </Form>

                <hr
                  style={{
                    borderColor: "rgba(255,255,255,0.3)",
                  }}
                />

                <p
                  className="text-center mb-0"
                  style={{
                    color: "white",
                  }}
                >
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Register
                  </Link>
                </p>

              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}