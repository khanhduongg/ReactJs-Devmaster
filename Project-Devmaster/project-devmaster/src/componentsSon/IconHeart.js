import React, { useEffect, } from "react";
import ListProductHearts from "./ListProductHearts";
import { context } from "../context/Context";
import { useContext } from "react";
function IconHeart() {
  const { responseData } = useContext(context);
  const { data, setData } = useContext(context);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("wishlistItems")));
  }, [responseData]);
  return (
    <>
      <div className="icon icon-wishlist">
        <a>
          <i className="fa-regular fa-heart" />
        </a>
        {data === null || data.length === 0 ? (
          <div className="box box-wishlist">
            <div className="box__empty">
              <p className="box__title">Danh sách yêu thích trống !</p>
              <a href="/san-pham">
                <div className="check__btn">Xem thêm sản phẩm</div>
              </a>
            </div>
          </div>
        ) : (
          <div className="box box-wishlist">
            <p className="box__title">Danh sách yêu thích </p>
            {data.map((item) => (
              <ListProductHearts wishlist={item} key={item.id} />
            ))}
            <p className="box__title py-1 my-1">
              Danh sách {data.length} sản phẩm{" "}
            </p>
          </div>
        )}
        <div className="qty"> {data.length}</div>
        {/*    <div className="check">
          <p>có {local.length} sản phẩm</p>
           <Link className="check__btn" to={"/danh-sach-yeu-thich"}>
        Xem chi tiết
          </Link>
         </div> */}
      </div>
    </>
  );
}

export default IconHeart;
