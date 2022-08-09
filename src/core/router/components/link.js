import VDom from "../../vdom";

const Link = ({ title, to }) => {
  const clickHandler = (e) => {
    e.preventDefault();
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
