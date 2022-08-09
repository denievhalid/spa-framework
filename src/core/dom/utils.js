export const isHtmlNode = (node) => {
  return [Node.ELEMENT_NODE, Node.TEXT_NODE].includes(node.nodeType);
};

export const isTextNode = (node) => {
  return node.nodeType === Node.TEXT_NODE;
};
