import { createRouter } from "../core/router/utils";
import Home from "../pages/home";
import Settings from "../pages/settings";

export default createRouter([
  {
    path: "/",
    page: Home,
  },
  {
    path: "/settings",
    page: Settings,
  },
]);
