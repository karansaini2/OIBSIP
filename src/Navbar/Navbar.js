import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <h2>Fenisha</h2>
      <div className="leftside">
        <ul className="inner-list">
          <li>
            <a href="#page-start" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#page-start">Product</a>
          </li>
          <li>
            <a href="#page-start">Store</a>
          </li>
          <li>
            <a href="#page-start">Contact</a>
          </li>
        </ul>
      </div>
      <div className="rightside">
        <button className="btn">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
