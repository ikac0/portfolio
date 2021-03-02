import React from "react";

function Categories({ filter, categories }) {
  return (
    <div className="buttons">
      {categories.map((x, i) => {
        return (
          <button
            type="button"
            className="btn-port"
            onClick={() => filter(x)}
            key={i}
          >
            {x}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
