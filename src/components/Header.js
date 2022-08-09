import App from "../core/app";

function Header() {
  const clickHandler = (e) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <div className="header__inner">
        <a onClick={clickHandler} className="header__logo logo" href="">
          Logo
        </a>
      </div>
      <div className="header__button">123</div>
    </header>
  );
}

export default Header;
