import React from "react";

function IconSearch() {
  return (
    <>
      <div className="icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="search-form">
        <input
          id="search"
          type="text"
          className="search-box"
          required=""
          defaultValue=""
        />
        <label htmlFor="search">Bạn cần tìm sản phẩm gì?</label>
        <a className="search-form__search" href="/tim-kiem?key=">
          <i className="fa-solid fa-magnifying-glass" />
        </a>
      </div>
    </>
  );
}

export default IconSearch;
