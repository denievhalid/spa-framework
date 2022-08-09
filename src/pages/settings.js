import App from "../core/app";
import Link from "../components/Link";

function Settings() {
  return (
    <div className="page">
      <h1>Настройки</h1>
      <ul>
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="/settings">Настройки</a>
        </li>
      </ul>
      <Link title={"hello"} to={"/he"} />
    </div>
  );
}

export default Settings;
