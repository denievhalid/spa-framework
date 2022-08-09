import App from "./core/app";
import router from "./router";

const app = new App();

app.setRouter(router);

app.render();
