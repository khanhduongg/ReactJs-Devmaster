import axios from "../Api/api-local";
import React, { useEffect, useState } from "react";
import Product from "../componentsSon/Product";
function Products() {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    // get api banner
    const getAllData = async () => {
      let res = await axios.get("products");
      setListProducts(res.data);
    };
    getAllData();
  }, []); 
  const elementProducts =listProducts.map((item,index)=>{
    return(
      <div className="all-product__item">
      <div className="all-product__item--title">
        <h4>Phòng Khách</h4>
        <a className="see-all" href="/san-pham/phong-khach">
          Xem tất cả
        </a>
      </div>
      <div className="row">
      {listProducts
      .filter((x) => x.product === item)
      .slice(0, 4)
      .map((product) => (
        <Product
          product={product}
          key={product.id}
        />
      ))}
      </div>
    </div>
    )
  })
  return (
    <div>
      <section>
        <div className="box-content all-product" >
          <div id="demo" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="../img/san-pham/trai-nghiem1.jpg"
                  alt=""
                  width={1100}
                  height={500}
                />
                <div className="carousel-btn">
                  <button className="btn-buy">Mua ngay</button>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon" />
            </a>
          </div>
          <div className="all-product__item">
            <div className="all-product__item--title">
              <h4>Phòng bếp</h4>
              <a className="see-all" href="/san-pham/phong-bep">
                Xem tất cả
              </a>
            </div>
            <div className="row">
              {elementProducts}
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="../img/san-pham/phong-khach-ban-uong-nuoc.png"
                    alt="san pham"
                    className="product-card__image"
                  />
                  <div className="product-card__content">
                    <span className="title">
                      Bàn trà <br />
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
                    <span className="old-price">4.000.000&nbsp;VND</span>
                    <br />
                    <span className="new-price">3.600.000&nbsp;VND</span>
                  </div>
                  <div className="product-card__group-btn">
                    <a href="/san-pham/phong-bep/ban-tra">
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
            </div>
          </div>
          <div className="all-product__item">
            <div className="all-product__item--title">
              <h4>Phòng ngủ</h4>
              <a className="see-all" href="/san-pham/phong-ngu">
                Xem tất cả
              </a>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="../img/san-pham/phong-khach-ban-uong-nuoc.png "
                    alt="san pham"
                    className="product-card__image"
                  />
                  <div className="product-card__content">
                    <span className="title">
                      Giường gỗ <br />
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
                    <span className="old-price">5.100.000&nbsp;VND</span>
                    <br />
                    <span className="new-price">4.000.000&nbsp;VND</span>
                  </div>
                  <div className="product-card__group-btn">
                    <a href="/san-pham/phong-ngu/giuong-go">
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
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="../img/san-pham/phong-khach-ban-uong-nuoc.png  "
                    alt="san pham"
                    className="product-card__image"
                  />
                  <div className="product-card__content">
                    <span className="title">
                      Tủ quần áo <br />
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
                    <span className="old-price">14.000.000&nbsp;VND</span>
                    <br />
                    <span className="new-price">11.200.000&nbsp;VND</span>
                  </div>
                  <div className="product-card__group-btn">
                    <a href="/san-pham/phong-ngu/tu-quan-ao">
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
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="../img/san-pham/phong-khach-ban-uong-nuoc.png "
                    alt="san pham"
                    className="product-card__image"
                  />
                  <div className="product-card__content">
                    <span className="title">
                      Giường châu Âu <br />
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
                    <span className="old-price">11.999.000&nbsp;VND</span>
                    <br />
                    <span className="new-price">8.999.000&nbsp;VND</span>
                  </div>
                  <div className="product-card__group-btn">
                    <a href="/san-pham/phong-ngu/giuong-chau-au">
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
            </div>
          </div>
          <div className="all-product__item">
            <div className="all-product__item--title">
              <h4>Phòng tắm</h4>
              <a className="see-all" href="/san-pham/phong-tam">
                Xem tất cả
              </a>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="../img/san-pham/phong-khach-ban-uong-nuoc.png "
                    alt="san pham"
                    className="product-card__image"
                  />
                  <div className="product-card__content">
                    <span className="title">
                      Bồn rửa mặt <br />
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
                    <span className="old-price">8.500.000&nbsp;VND</span>
                    <br />
                    <span className="new-price">8.000.000&nbsp;VND</span>
                  </div>
                  <div className="product-card__group-btn">
                    <a href="/san-pham/phong-tam/bon-rua-mat">
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
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="../img/san-pham/phong-khach-ban-uong-nuoc.png "
                    alt="san pham"
                    className="product-card__image"
                  />
                  <div className="product-card__content">
                    <span className="title">
                      Bồn rửa tay <br />
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
                    <span className="old-price">3.950.000&nbsp;VND</span>
                    <br />
                    <span className="new-price">3.900.000&nbsp;VND</span>
                  </div>
                  <div className="product-card__group-btn">
                    <a href="/san-pham/phong-tam/bon-rua-tay">
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
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="../img/san-pham/phong-khach-ban-uong-nuoc.png "
                    alt="san pham"
                    className="product-card__image"
                  />
                  <div className="product-card__content">
                    <span className="title">
                      Tủ âm tường <br />
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
                    <span className="old-price">9.500.000&nbsp;VND</span>
                    <br />
                    <span className="new-price">8.900.000&nbsp;VND</span>
                  </div>
                  <div className="product-card__group-btn">
                    <a href="/san-pham/phong-tam/tu-am-tuong">
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
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="../img/san-pham/phong-khach-ban-uong-nuoc.png "
                    alt="san pham"
                    className="product-card__image"
                  />
                  <div className="product-card__content">
                    <span className="title">
                      Bồn rửa 2 <br />
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
                    <span className="old-price">4.000.000&nbsp;VND</span>
                    <br />
                    <span className="new-price">3.300.000&nbsp;VND</span>
                  </div>
                  <div className="product-card__group-btn">
                    <a href="/san-pham/phong-tam/bon-rua-2">
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
            </div>
          </div>
          <div className="all-product__item">
            <div className="all-product__item--title">
              <h4>Trẻ em</h4>
              <a className="see-all" href="/san-pham/tre-em">
                Xem tất cả
              </a>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="../img/san-pham/phong-khach-ban-uong-nuoc.png"
                    alt="san pham"
                    className="product-card__image"
                  />
                  <div className="product-card__content">
                    <span className="title">
                      Giường tầng <br />
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
                    <span className="old-price">11.000.000&nbsp;VND</span>
                    <br />
                    <span className="new-price">9.800.000&nbsp;VND</span>
                  </div>
                  <div className="product-card__group-btn">
                    <a href="/san-pham/tre-em/giuong-tang">
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
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="../img/san-pham/phong-khach-ban-uong-nuoc.png "
                    alt="san pham"
                    className="product-card__image"
                  />
                  <div className="product-card__content">
                    <span className="title">
                      Bàn học <br />
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
                    <span className="old-price">3.500.000&nbsp;VND</span>
                    <br />
                    <span className="new-price">2.890.000&nbsp;VND</span>
                  </div>
                  <div className="product-card__group-btn">
                    <a href="/san-pham/tre-em/ban-hoc">
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
            </div>
          </div>
          <div className="all-product__item">
            <div className="all-product__item--title">
              <h4>Văn phòng</h4>
              <a className="see-all" href="/san-pham/van-phong">
                Xem tất cả
              </a>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="../img/san-pham/phong-khach-ban-uong-nuoc.png "
                    alt="san pham"
                    className="product-card__image"
                  />
                  <div className="product-card__content">
                    <span className="title">
                      Ghế văn phòng <br />
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
                    <span className="old-price">6.000.000&nbsp;VND</span>
                    <br />
                    <span className="new-price">5.700.000&nbsp;VND</span>
                  </div>
                  <div className="product-card__group-btn">
                    <a href="/san-pham/van-phong/ghe-van-phong">
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
            </div>
          </div>
          <div className="all-product__item">
            <div className="all-product__item--title">
              <h4>Cầu thang</h4>
              <a className="see-all" href="/san-pham/cau-thang">
                Xem tất cả
              </a>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="../img/san-pham/phong-khach-ban-uong-nuoc.png "
                    alt="san pham"
                    className="product-card__image"
                  />
                  <div className="product-card__content">
                    <span className="title">
                      Cầu thang <br />
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
                    <span className="old-price">35.000.000&nbsp;VND</span>
                    <br />
                    <span className="new-price">30.000.000&nbsp;VND</span>
                  </div>
                  <div className="product-card__group-btn">
                    <a href="/san-pham/cau-thang/cau-thang">
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
            </div>
          </div>
          <div className="all-product__item">
            <div className="all-product__item--title">
              <h4>Đồ trang trí</h4>
              <a className="see-all" href="/san-pham/do-trang-tri">
                Xem tất cả
              </a>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="product-card">
                  <img
                    src="../img/san-pham/phong-khach-ban-uong-nuoc.png"
                    alt="san pham"
                    className="product-card__image"
                  />
                  <div className="product-card__content">
                    <span className="title">
                      Đèn chùm <br />
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
                    <span className="old-price">5.300.000&nbsp;VND</span>
                    <br />
                    <span className="new-price">4.300.000&nbsp;VND</span>
                  </div>
                  <div className="product-card__group-btn">
                    <a href="/san-pham/do-trang-tri/den-chum">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
