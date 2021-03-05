import React from "react";

function MenuItems({ menuItem }) {
  return (
    <div className="portfolios-wrapper">
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.link1} rel="noreferrer" target="_blank">
                    {item.icon1}
                  </a>
                  <a href={item.link2} rel="noreferrer" target="_blank">
                    {item.icon2}
                  </a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>
              <small>{item.description}</small>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
