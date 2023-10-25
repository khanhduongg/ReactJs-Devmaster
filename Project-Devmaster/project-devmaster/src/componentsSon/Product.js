import axios from "../Api/api-local";
import React, { useEffect, useState } from "react";
function Product() {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    // get api banner
    const getAllData = async () => {
      let res = await axios.get("products");
      setProduct(res.data);
    };
    getAllData();
  }, []);
  return (
    <div>
      {Product.map((item,index) => {
        return (
          <div className="col-md-3" key={item.id}>
            <div className="product-card">
              <img
                src={`http://cutuananh.devmaster.vn/${item.image}`}
                alt="san pham"
                className="product-card__image"
              />
              <div className="product-card__content">
                <span className="title">
                  {item.product_name} <br />
                </span>
                <span
                  style={{
                    display: "inline-block",
                    direction: "ltr",
                    touchAction: "none",
                  }}
                >
                  <span
                    className="react-simple-star-rating"
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      verticalAlign: "middle",
                      userSelect: "none",
                    }}
                  >
                    <span
                      className="empty-icons"
                      style={{
                        display: "inline-block",
                        color: "rgb(204, 204, 204)",
                      }}
                    >
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        ></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        ></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        ></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        ></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        ></path>
                      </svg>
                    </span>
                    <span
                      className="filled-icons"
                      title="1 out of 5"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        color: "rgb(189, 148, 95)",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        display: "inline-block",
                        width: "0%",
                      }}
                    >
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        ></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        ></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        ></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        ></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        className="star-svg"
                      >
                        <path
                          fill="currentColor"
                          stroke="none"
                          strokeMiterlimit={10}
                          strokeWidth={0}
                          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </span>
                <br />
                <span className="old-price">{item.old_price}&nbsp;VND</span>
                <br />
                <span className="new-price">{item.price}&nbsp;VND</span>
              </div>
              <div className="product-card__group-btn">
                <a href="/san-pham/phong-khach/ban-uong-nuoc">
                  <button className="btn">
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                </a>
                <button className="btn">
                  <i className="fa-regular fa-heart" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
