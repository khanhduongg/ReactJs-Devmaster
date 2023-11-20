import React from "react";
import { useEffect } from "react";
function ListArrange({product ,sort, setSort}) {
    const handleSort = (e) => {
        setSort(e.target.value);
        if (e.target.value !== "" || e.target.value !== undefined) {
          let arr = e.target.value.split("-");
          if (arr[0] === "price") {
            if (arr[1] === "ASC") {
              product.sort((a, b) => {
                return b.price - a.price;
              });
            } else {
              product.sort((a,b) => {
                return a.price - b.price;
              });
            }
          } else {
            if (arr[1] === "ASC") {
              product.sort((a, b) => {
                return a.likes - b.likes;
              });
            }
          }
        }
      };
      useEffect(() => {}, [sort]);
  return (
    <div>
      <select id="format" className="search-product__select"
      value={sort}
      onChange={handleSort}
      >
        <option>Sắp xếp</option>
        <option value="price-DESC">Giá thấp đến cao</option>
        <option value="price-ASC">Giá cao đến thấp</option>
        <option value="rating-ASC">Theo độ nổi bật</option>
      </select>
    </div>
  );
}

export default ListArrange;
