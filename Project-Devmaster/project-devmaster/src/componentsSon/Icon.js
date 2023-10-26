import React from "react";
function Icon() {
  return (
    <>
      <div className="group-icon d-flex">
        <div className="icon icon-cart">
          <a href="/gio-hang">
            <i className="fa-solid fa-bag-shopping" />
          </a>
          <div className="box box-cart">
            <div className="box__empty">
              <p className="box__title">Giỏ hàng của bạn đang trống !</p>
              <a href="/san-pham">
                <div className="check__btn">Mua hàng ngay</div>
              </a>
            </div>
          </div>
        </div>
        <div className="icon icon-wishlist">
          <a href="/danh-sach-yeu-thich">
            <i className="fa-regular fa-heart" />
          </a>
          <div className="box box-wishlist">
            <div className="box__empty">
              <p className="box__title">Danh sách yêu thích trống !</p>
              <a href="/san-pham">
                <div className="check__btn">Xem thêm sản phẩm</div>
              </a>
            </div>
          </div>
        </div>
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
        {/* <div id="menu-bar">
    <i className="fa-solid fa-bars" />
  </div> */}
      </div>
    </>
  );
}

export default Icon;
