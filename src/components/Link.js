import VDom from "../core/vdom";

const Link = ({ title, to }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    alert();
  };

  return VDom.create(
    "a",
    {
      href: to,
      onClick: clickHandler,
    },
    title
  );
};

export default Link;