import App from "../core/app";
import Link from "../core/router/components/link";

const Home = () => {
  return (
    <div className="page">
      <h1>Главная страница</h1>
      <ul>
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="/settings">Настройки</a>
        </li>
      </ul>
      <Link title={"hello"} to={"/settings"} />
    </div>
  );
};

export default Home;
