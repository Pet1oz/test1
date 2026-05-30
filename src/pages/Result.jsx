import { Card } from "react-bootstrap";

export default function Result() {
  return (
    <div className="container py-5">

      <Card
        className="shadow text-center"
      >
        <Card.Body>

          <h1>85 / 100</h1>

          <h3 className="text-success">
            PASSED
          </h3>

        </Card.Body>
      </Card>

    </div>
  );
}