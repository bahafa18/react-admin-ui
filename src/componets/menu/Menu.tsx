import { Link } from "react-router-dom";
import "./menu.scss";
import { menus } from "../../Data";

const Menu = () => {
  return (
    <div className="menu">
      {menus.map((menu) => {
        return (
          <div className="item" key={menu.id}>
            <span className="title">{menu.title}</span>
            {menu.listItems.map((listItem) => {
              return (
                <Link to={listItem.url} className="listItem" key={listItem.id}>
                  <img src={listItem.icon} alt="" />
                  <span className="listItemTitle">{listItem.title}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
