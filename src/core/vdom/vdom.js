import { isHtmlNode } from "../dom/utils";
import { isFunction } from "../../utils";

export default class VDom {
  static create(tag, props = {}, children = []) {
    if (isFunction(tag)) {
      return tag(props, children);
    }

    return {
      tag,
      props,
      children,
    };
  }

  static mount(vNode, target) {
    if (!isHtmlNode(target)) {
      throw new Error("");
    }

    target.replaceWith(vNode);
    return vNode;
  }
}
