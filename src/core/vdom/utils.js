import VDom from "./vdom";

export const createElement = (tag, props = {}, children = []) => {
  return VDom.create(tag, props, children);
};
