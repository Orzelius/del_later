function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#">
          <img src="./img/logo1_png.png" height="30px" alt="" />
        </a>
        <ul className="nav_list">
          <li className="nav_item">
            <a href="/" className="nav_link">
              AVALEHT
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              TOOTED
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              MEIST
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              KONTAKT
            </a>
          </li>
        </ul>
        <li className="nav_item" id="shopping-cart">
          <a href="#" className="nav_link">
            <i className="fa fa-shopping-cart" id="shopping-icon"></i>OSTUKORV
          </a>
        </li>
      </div>
    </nav>
  );
}

export default Header;
