import VDom from "../../vdom";
import History from "../history";

const Link = ({ title, to }) => {
  const clickHandler = (e) => {
    e.preventDefault();

    History.push(to);
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
