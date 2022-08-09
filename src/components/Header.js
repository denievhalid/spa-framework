import { createElement } from "../core/vdom/utils";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo logo" href="">
          Logo
        </a>
      </div>
    </header>
  );
}

export default Header;
