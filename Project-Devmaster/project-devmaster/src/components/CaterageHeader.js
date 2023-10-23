import React from "react";
import { Link } from "react-router-dom";
function Caterageheader() {
  return (
    <div>
      <header id="header" className=" d-flex ">
        <div className="header-logo">
          <a href="">
            <img className="w-75" src="../img/logo.png" alt="logo" />
          </a>
        </div>
        <div className="header-item">
          <div className="header-item-text">
            <ul className="d-flex ">
              <li>
                <Link to={"/"} className="nav-link">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link to={"/CaterageIntroduce"} className="nav-link">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link to={"/CaterageProduct"} className="nav-link">
                  Sản Phẩm
                </Link>
              </li>
              <li>
                <Link to={"/CaterageIntroduce"} className="nav-link">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link to={"/CaterageIntroduce"} className="nav-link">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link to={"/CaterageIntroduce"} className="nav-link">
                  Giới Thiệu
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-item-icon ">
          <a href="">
            <i className="fa-solid fa-bag-shopping" />
          </a>
          <a href="">
            <i className="fa-regular fa-heart" />
          </a>
          <a href="">
            <i className="fa-solid fa-magnifying-glass" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Caterageheader;
