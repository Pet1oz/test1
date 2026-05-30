import { Card } from "react-bootstrap";

export default function Profile() {
  return (
    <div className="container py-5">

      <Card className="shadow">

        <Card.Body>

          <h2>John Doe</h2>

          <p>
            john@gmail.com
          </p>

          <hr />

          <h4>
            My Courses
          </h4>

          <ul>
            <li>React</li>
            <li>Laravel</li>
            <li>Python</li>
          </ul>

        </Card.Body>

      </Card>

    </div>
  );
}