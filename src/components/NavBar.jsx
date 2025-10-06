import CartWidget from "./CartWidget.jsx";
import "../styles/navbar.css";
function NavBar() {
  return (
    <>
      <header className="header">
        <h1>WorkAround</h1>
        <nav className="navbar">
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <CartWidget className="cart-widget" />
        </nav>
      </header>
    </>
  );
}

export default NavBar;
