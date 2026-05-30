import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CourseDetail() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">

      <h1>React Bootcamp</h1>

      <p>
        Learn React from Beginner
        to Advanced.
      </p>

      <Button
        onClick={() =>
          navigate("/learning/1")
        }
      >
        Start Course
      </Button>

    </div>
  );
}