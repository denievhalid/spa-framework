import { isEventListener, isHtmlNode, normalizeEventName } from "./utils";
import { forIn, forOf, isArray, isString } from "../../utils";
import { CLASS_ATTRIBUTE, CLASSNAME_ATTRIBUTE } from "../../constants";

export default class Dom {
  constructor(node, attrs = {}) {
    if (!isHtmlNode(node)) {
    }

    this.node = node;

    this.resolveAttrs(attrs);
  }

  append(node) {
    this.node.appendChild(node);
  }

  on(event, handler) {
    this.node.addEventListener(event, handler);
  }

  setAttr(key, value) {
    this.node.setAttribute(key, value);
  }

  resolveAttrs(attrs) {
    forIn(attrs, (key, value) => {
      if (isEventListener(key)) {
        this.on(normalizeEventName(key), value);
      } else {
        if ([CLASSNAME_ATTRIBUTE].includes(key)) {
          key = CLASS_ATTRIBUTE;
        }

        this.setAttr(key, value);
      }
    });
  }

  static create(tag, attrs = {}) {
    try {
      return new Dom(document.createElement(tag), attrs);
    } catch (e) {}
  }

  static createFromVNode(vNode) {
    if (isString(vNode)) {
      return Dom.createTextNode(vNode);
    }

    const element = Dom.create(vNode.tag, vNode.props);

    let { children } = vNode;

    if (!isArray(children)) {
      children = [children];
    }

    forOf(children, (child) => {
      element.append(
        isString(child) ? Dom.createTextNode(child) : Dom.createFromVNode(child)
      );
    });

    return element.node;
  }

  static createTextNode(text) {
    return document.createTextNode(text);
  }

  static get(selector, attrs = {}) {
    try {
      return new Dom(document.querySelector(selector), attrs);
    } catch (e) {}
  }
}
