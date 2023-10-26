import React, { useEffect } from "react";
function ListProductHearts({ wishlist }) {
  console.log(wishlist);
  return (
    <div className="box__content">
      <div>
        <a href="/">
          <div className="box__content--data">
            <div className="details box__empty">
              <img
                src={`http://cutuananh.devmaster.vn/${wishlist.image}`}
                alt=""
              />
              <div>
                <h5>{wishlist.product_name}</h5>
                <h5>
                  &nbsp;
                  <i className="fa-solid fa-star" />
                </h5>
              </div>
            </div>
            <h5>
              <span className="new-price">
                {Intl.NumberFormat("it-IT", {
                  style: "currency",
                  currency: "VND",
                }).format(wishlist.price)}
              </span>
            </h5>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ListProductHearts;
