import App from "./core/app";
import router from "./router";
import Home from "./pages/home";
import Header from "./components/Header";

const app = new App();

app.setRouter(router);

app.render();
