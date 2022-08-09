import { forOf } from "../../utils";

export default class Router {
  constructor(routes = []) {
    this.routes = [];
    this.page = null;

    this.resolveRoutes(routes);
    this.match();
  }

  resolveRoutes(routes) {
    forOf(routes, (route) => {
      this.routes.push(route);
    });
  }

  match() {
    forOf(this.routes, (route) => {
      if (route.path === location.pathname) {
        this.page = new route.page();
      }
    });
  }

  static create(routes = []) {
    return new Router(routes);
  }
}
