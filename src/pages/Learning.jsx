import { ProgressBar } from "react-bootstrap";

export default function Learning() {
  return (
    <div className="container-fluid">

      <div className="row">

        <div className="col-lg-3 bg-light p-4">

          Lesson 1

          <br />

          Lesson 2

          <br />

          Lesson 3

        </div>

        <div className="col-lg-9 p-4">

          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/bMknfKXIFA8"
            title="React"
          />

          <ProgressBar
            now={60}
            className="mt-3"
          />

        </div>

      </div>

    </div>
  );
}