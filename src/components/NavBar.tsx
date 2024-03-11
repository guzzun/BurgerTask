import "../Burger.css";

const NavBar: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-logo">
            <a href="/">
              <img src="../logo.svg" alt="burgercraft-logo" />
            </a>
          </div>
          <div className="header-middle">
            <div className="header-info">
              <div className="contact">
                <div className="phone">
                  <a href="tel:0683 38 000">
                    <span>0683 38 000</span>
                  </a>
                </div>
                <div className="email">
                  <a href="mailto:info@burgercraft.com">
                    <span>info@burgercraft.md</span>
                  </a>
                </div>
                <div className="delivery">
                  <a href="#">
                    <span>LIVRARE</span>
                  </a>
                </div>
              </div>
              <div className="cart-ico"></div>
            </div>
            <div className="header-menu">
              <a>acasa</a>
              <a>Meniu</a>
              <a href="/burger" className="selected-menu ">
                Creaza-ti burgerul
              </a>
              <a>Despre noi</a>
              <a>Blog </a>
            </div>
          </div>
          <div className="header-auth">
            <a href="/">
              <p>LOGARE</p>
            </a>
            <a href="/register">
              <p>REGISTRARE</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
