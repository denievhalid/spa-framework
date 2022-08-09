import VDom from "../vdom";
import Dom from "../dom";

export default class App {
  constructor() {
    this.router = null;
  }

  setRouter(router) {
    this.router = router;
  }

  render() {
    VDom.mount(
      Dom.createFromVNode(this.router.page),
      document.getElementById("app")
    );
  }
}
