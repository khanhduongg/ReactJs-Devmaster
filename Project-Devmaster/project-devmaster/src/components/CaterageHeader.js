import React from "react";
import { Link } from "react-router-dom";
import Icon from "../componentsSon/Icon";
function CaterageHeader() {
  return (
    <>
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
                <Link to={"/CaterageNews"} className="nav-link">
                  Tin Tức
                </Link>
              </li>
              <li>
                <Link to={"/CateragePartner"} className="nav-link">
                  Đối Tác
                </Link>
              </li>
              <li>
                <Link to={"/CaterageContact"} className="nav-link">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Icon/>
      </header>
    </>
  );
}

export default CaterageHeader;
