import App from "./core/app";
import router from "./router";
import { createElement } from "./core/vdom/utils";

const app = new App();

app.setRouter(router);

app.render();
