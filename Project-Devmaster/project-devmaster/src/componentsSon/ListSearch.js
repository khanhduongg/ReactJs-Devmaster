import React, { useContext, useState } from "react";
import { context } from "../context/Context";
import Product from "./Product";
import ListArrange from "./ListArrange";
function ListSearch() {
  const { dataSearch, valueSearch } = useContext(context);
  const [sort, setSort] = useState("");
  return (
    <div className="all-product__item container ">
      {dataSearch?.length == 0 ? (
        <div className="all-product__item--title">
          <h4>Không tìm thấy kết quả nào</h4>
        </div>
      ) : (
        <div className="all-product__item--title">
          <h4>Kết quả tìm kiếm cho từ khóa "{valueSearch}"</h4>
          <ListArrange 
          product={dataSearch} 
          sort={sort} 
          setSort={setSort} />
        </div>
      )}
      <div className="row">
        {dataSearch.slice(0, 4).map((item) => (
          <Product
            iconProduct={"fa-regular fa-heart"}
            product={item}
            key={item.id}
          />
        ))}
      </div>

      {/* <div className="load-more">
        <button type="button" className="load-more__btn">
          Xem thêm
        </button>
      </div> */}
    </div>
  );
}

export default ListSearch;
