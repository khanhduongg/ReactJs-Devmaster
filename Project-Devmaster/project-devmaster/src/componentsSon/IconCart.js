import React from "react";

function IconCart() {
  return (
    <>
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
    </>
  );
}

export default IconCart;
