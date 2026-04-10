import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">Cosmetic Store</Link>

        <div>
          <Link to="/products" className="btn btn-outline-light">Products</Link>
        </div>
      </div>
    </nav>
  );
}
