import NavBar from "../components/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />

      <div
        style={{
          minHeight: "90vh",
          backgroundImage: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
          color: "white"
        }}
      >
        <Container>

          <Row
            className="align-items-center"
            style={{ minHeight: "90vh" }}
          >
            <Col lg={6}>
              <h1 className="display-3 fw-bold">
                MMT E-LEARNING
              </h1>

              <p className="lead">
                Learn Nursing , Increase your skills
              </p>

              <Button
                size="lg"
                variant="light"
                onClick={() =>
                  navigate("/courses")
                }
              >
                Start Learning
              </Button>
            </Col>

            <Col lg={6}>
              <img
                src="https://i.ibb.co/VpTXB2zm/Nurse.png"
                className="img-fluid"
              />
            </Col>
          </Row>

        </Container>
      </div>


      <h1></h1>

      <Carousel className="shadow rounded overflow-hidden">

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            style={{
              height: "450px",
              objectFit: "cover"
            }}
          />

          <Carousel.Caption>
            <h2>Learn React From Zero</h2>
            <p>Become Frontend Developer</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            style={{
              height: "450px",
              objectFit: "cover"
            }}
          />

          <Carousel.Caption>
            <h2>Master Laravel</h2>
            <p>Build Real Web Applications</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            style={{
              height: "450px",
              objectFit: "cover"
            }}
          />

          <Carousel.Caption>
            <h2>Python For Everyone</h2>
            <p>Data Science & AI</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>







      <div className="container py-5">

        <h2 className="text-center mb-5">
          Browse Categories
        </h2>

        <div className="row g-4">

          {[
            "Web Development",
            "Programming",
            "Data Science",
            "UI/UX Design",
            "AI & Machine Learning",
            "Cloud Computing"
          ].map((item) => (

            <div
              className="col-lg-4 col-md-6"
              key={item}
            >
              <div
                className="card shadow border-0 h-100 text-center p-4"
              >
                <h4>{item}</h4>
              </div>
            </div>

          ))}

        </div>

      </div>



      <div
        className="py-5"
        style={{
          background: "#f8fafc"
        }}
      >

        <div className="container">

          <h2 className="text-center mb-5">
            Featured Courses
          </h2>

          <div className="row">

            {[1, 2, 3].map((item) => (

              <div
                className="col-lg-4 mb-4"
                key={item}
              >
                <div className="card shadow h-100">

                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                    className="card-img-top"
                    style={{
                      height: "220px",
                      objectFit: "cover"
                    }}
                  />

                  <div className="card-body">

                    <h5>
                      React Complete Course
                    </h5>

                    <p>
                      Learn React from beginner
                      to professional level.
                    </p>

                    <button className="btn btn-primary">
                      View Course
                    </button>

                  </div>

                </div>
              </div>

            ))}

          </div>

        </div>

      </div>


      <div className="container py-5">

        <h2 className="text-center mb-5">
          Why Choose Us
        </h2>

        <div className="row text-center">

          <div className="col-lg-4">

            <h1>🎓</h1>

            <h4>
              Expert Instructors
            </h4>

            <p>
              Learn from industry experts.
            </p>

          </div>

          <div className="col-lg-4">

            <h1>📱</h1>

            <h4>
              Learn Anywhere
            </h4>

            <p>
              Mobile and Desktop Friendly.
            </p>

          </div>

          <div className="col-lg-4">

            <h1>🏆</h1>

            <h4>
              Certificate
            </h4>

            <p>
              Earn certificates after completion.
            </p>

          </div>

        </div>
      </div>

      <div
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",
          color: "white"
        }}
      >

        <div className="container py-5">

          <div className="row text-center">

            <div className="col-md-3">
              <h1>5,000+</h1>
              <p>Students</p>
            </div>

            <div className="col-md-3">
              <h1>200+</h1>
              <p>Courses</p>
            </div>

            <div className="col-md-3">
              <h1>50+</h1>
              <p>Instructors</p>
            </div>

            <div className="col-md-3">
              <h1>95%</h1>
              <p>Success Rate</p>
            </div>

          </div>

        </div>

      </div>
      <div className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="img-fluid rounded shadow"
            />

          </div>

          <div className="col-lg-6">

            <h2>
              About E-Learning
            </h2>

            <p>
              Our mission is to provide
              high-quality online education
              accessible to everyone.
            </p>

            <button className="btn btn-primary">
              Learn More
            </button>

          </div>

        </div>

      </div>


      <div
        className="py-5"
        style={{
          background: "#f8fafc"
        }}
      >

        <div className="container">

          <h2 className="text-center mb-5">
            Student Reviews
          </h2>

          <div className="row">

            {[1, 2, 3].map((item) => (

              <div
                className="col-lg-4"
                key={item}
              >
                <div className="card shadow border-0">

                  <div className="card-body">

                    <h5>
                      ⭐⭐⭐⭐⭐
                    </h5>

                    <p>
                      Great platform for learning.
                    </p>

                    <strong>
                      John Doe
                    </strong>

                  </div>

                </div>
              </div>

            ))}

          </div>

        </div>

      </div>

      <div
        className="text-center py-5"
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",
          color: "white"
        }}
      >

        <h2>
          Ready To Start Learning?
        </h2>

        <p>
          Join thousands of students today.
        </p>

        <button
          className="btn btn-light btn-lg"
        >
          Get Started
        </button>

      </div>

      <footer
        className="bg-dark text-light py-4"
      >
        <div className="container text-center">

          <h5>E-Learning Platform</h5>

          <p>
            © 2026 All Rights Reserved
          </p>

        </div>
      </footer>
    </>


  );
}