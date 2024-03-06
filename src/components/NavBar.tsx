import "../Burger.css";

const NavBar: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-logo">
            <a href="/">
              <img src="../public/logo.svg" alt="burgercraft-logo" />
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
              <p>Home</p>
              <p>Menu</p>
              <p className="selected-menu ">Do Your Yourself</p>
              <p>About Us</p>
            </div>
          </div>
          <div className="header-auth">
            <a href="/">
              <p>LOGIN</p>
            </a>
            <a href="/register">
              <p>REGISTER</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
