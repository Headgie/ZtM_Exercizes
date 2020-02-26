import React from "react";
import "./menu.styles.scss";

const Menu = props => {
  const { items, selected } = props;
  return (
    <ul className="menu">
      {items.map((item, i) => {
        return <li className={"menu-item" + (selected===i?" selected":"")}>{item.text}</li>;
      })}
    </ul>
  );
};

export default Menu;