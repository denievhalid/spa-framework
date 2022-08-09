export const isHtmlNode = (node) => {
  return [Node.ELEMENT_NODE, Node.TEXT_NODE].includes(node.nodeType);
};

export const isTextNode = (node) => {
  return node.nodeType === Node.TEXT_NODE;
};

export const isEventListener = (val) => {
  return val.startsWith("on");
};

export const normalizeEventName = (event) => {
  return event.substr(2).toLowerCase();
};
