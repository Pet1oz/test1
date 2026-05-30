import { Button } from "react-bootstrap";

export default function Quiz() {
  return (
    <div className="container py-5">

      <h2>
        Question 1 / 10
      </h2>

      <h4>
        React คืออะไร ?
      </h4>

      <div className="mt-4">

        <Button
          className="d-block mb-2"
          variant="outline-primary"
        >
          Framework
        </Button>

        <Button
          className="d-block mb-2"
          variant="outline-primary"
        >
          Library
        </Button>

      </div>

    </div>
  );
}