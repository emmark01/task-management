import { Link } from "react-router-dom";
import "./NotFound.css";

export function NotFoundPage() {
  return (
    <main className="nw-not-found">
      <p>404</p>
      <h1>This trail does not exist</h1>
      <Link to="/" className="nw-btn nw-btn-primary nw-btn-md">
        Back to home
      </Link>
    </main>
  );
}
