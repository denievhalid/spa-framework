import App from "../core/app";
import Header from "../components/Header";
import Link from "../components/Link";

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
      <Link title={"hello"} to={"/he"} />
    </div>
  );
};

export default Home;
