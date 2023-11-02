import React from "react";
import { Link } from "react-router-dom";

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
            <Link to={"/products"} className="check__btn text-alin-center ">
                Mua Hàng Ngay
              </Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default IconCart;
