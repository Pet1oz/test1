import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
export default function Register() {
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
          style={{
            minHeight: "100vh",
          }}
        >
          {/* LEFT SECTION */}
          <div
            className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center"
          >
            <div
              style={{
                maxWidth: "550px",
                color: "white",
              }}
            >
              <h1
                style={{
                  fontSize: "4rem",
                  fontWeight: "700",
                }}
              >
                Start Your Learning Journey 🚀
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  opacity: 0.9,
                }}
              >
                Join thousands of students and
                gain new skills from expert instructors.
              </p>

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="register"
                className="img-fluid rounded-4 shadow-lg mt-4"
              />
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div
            className="col-lg-6 d-flex justify-content-center align-items-center py-5"
          >
            <Card
              className="border-0 shadow-lg"
              style={{
                width: "100%",
                maxWidth: "550px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(15px)",
                borderRadius: "25px",
              }}
            >
              <Card.Body className="p-4 p-md-5">

                <div className="text-center mb-4">
                  <h2
                    style={{
                      color: "white",
                      fontWeight: "700",
                    }}
                  >
                    Create Account
                  </h2>

                  <p
                    style={{
                      color: "#e2e8f0",
                    }}
                  >
                    Register to start learning today
                  </p>
                </div>

                <Form>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: "white" }}>
                      Full Name
                    </Form.Label>

                    <Form.Control
                      placeholder="Enter your full name"
                      style={{
                        borderRadius: "12px",
                        padding: "12px",
                      }}
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: "white" }}>
                          Date of Birth
                        </Form.Label>

                        <Form.Control
                          type="date"
                          style={{
                            borderRadius: "12px",
                            padding: "12px",
                          }}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: "white" }}>
                          Email
                        </Form.Label>

                        <Form.Control
                          type="email"
                          placeholder="example@email.com"
                          style={{
                            borderRadius: "12px",
                            padding: "12px",
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: "white" }}>
                          Password
                        </Form.Label>

                        <Form.Control
                          type="password"
                          placeholder="Password"
                          style={{
                            borderRadius: "12px",
                            padding: "12px",
                          }}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label style={{ color: "white" }}>
                          Confirm Password
                        </Form.Label>

                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          style={{
                            borderRadius: "12px",
                            padding: "12px",
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button
                    className="w-100 mb-3"
                    style={{
                      borderRadius: "12px",
                      padding: "12px",
                      fontWeight: "600",
                    }}
                  >
                    Create Account
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
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    Login
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