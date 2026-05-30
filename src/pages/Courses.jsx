import NavBar from "../components/Navbar";
import {Card,Button,Form,InputGroup,Badge} from "react-bootstrap";
import { FaSearch, FaStar } from "react-icons/fa";
const courses = [
  {
    id: 1,
    title: "React Complete Course",
    instructor: "John Smith",
    lessons: 24,
    duration: "12 Hours",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Laravel Masterclass",
    instructor: "David Lee",
    lessons: 30,
    duration: "18 Hours",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Python Fundamentals",
    instructor: "Emily Clark",
    lessons: 20,
    duration: "10 Hours",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    level: "Beginner",
  },
  {
    id: 4,
    title: "Docker For Developers",
    instructor: "Michael Brown",
    lessons: 15,
    duration: "8 Hours",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    level: "Advanced",
  },
];

export default function Courses() {
  return (
  <>
    <NavBar />

    {/* HERO */}
    <div
      style={{
        background:
          "linear-gradient(135deg,#2563eb,#7c3aed)",
        color: "white",
        padding: "80px 0",
      }}
    >
      <div className="container text-center">

        <h1
          style={{
            fontWeight: "700",
            fontSize: "3rem",
          }}
        >
          Explore Our Courses
        </h1>

        <p
          style={{
            opacity: 0.9,
            fontSize: "1.2rem",
          }}
        >
          Learn new skills and boost your career.
        </p>

      </div>
    </div>

    <div
      className="container"
      style={{
        marginTop: "-35px",
      }}
    >
      {/* SEARCH BAR */}
      <Card
        className="shadow border-0"
        style={{
          borderRadius: "20px",
        }}
      >
        <Card.Body>

          <InputGroup>

            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>

            <Form.Control
              placeholder="Search courses..."
            />

          </InputGroup>

        </Card.Body>
      </Card>

      {/* FILTER */}
      <div
        className="d-flex gap-2 flex-wrap my-4"
      >
        <Button variant="primary">
          All
        </Button>

        <Button variant="outline-primary">
          Programming
        </Button>

        <Button variant="outline-primary">
          Web Development
        </Button>

        <Button variant="outline-primary">
          DevOps
        </Button>

        <Button variant="outline-primary">
          Data Science
        </Button>
      </div>

      {/* COURSE LIST */}
      <div className="row">

        {courses.map((course) => (
          <div
            key={course.id}
            className="col-lg-3 col-md-6 mb-4"
          >
            <Card
              className="h-100 shadow border-0"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              <img
                src={course.image}
                alt={course.title}
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <Card.Body>

                <Badge
                  bg="primary"
                  className="mb-2"
                >
                  {course.level}
                </Badge>

                <h5
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {course.title}
                </h5>

                <p
                  style={{
                    color: "#64748b",
                    marginBottom: "10px",
                  }}
                >
                  {course.instructor}
                </p>

                <div
                  className="d-flex justify-content-between mb-2"
                >
                  <small>
                    📚 {course.lessons} Lessons
                  </small>

                  <small>
                    ⏱ {course.duration}
                  </small>
                </div>

                <div
                  className="d-flex align-items-center mb-3"
                >
                  <FaStar
                    color="#facc15"
                    className="me-1"
                  />

                  <span>
                    {course.rating}
                  </span>
                </div>

                <Button
                  className="w-100"
                  style={{
                    borderRadius: "12px",
                  }}
                >
                  Start Learning
                </Button>

              </Card.Body>
            </Card>
          </div>
        ))}

      </div>
    </div>
  </>
);
}