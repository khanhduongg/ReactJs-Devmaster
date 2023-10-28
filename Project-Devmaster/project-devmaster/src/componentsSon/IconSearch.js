import React from "react";
import { useState, useContext, useEffect } from "react";
import { context } from "../context/Context";
import apiLocal from "../Api/api-local";
import slugify from"slugify"
import DataSearch from "./DataSearch";
import handleOnclickInputSearch from "../data/handleOnclickInputSearch";
import { Link } from "react-router-dom";
function IconSearch() {
  const [products, setproducts] = useState([]);
  let { valueSearch, setValueSearch } = useContext(context);
  useEffect(() => {
    const getAllProductsSearch = async () => {
      let respone = await apiLocal.get("/products");
      setproducts(
        respone.data.filter((fil) =>
          fil.product_name
            .toLocaleLowerCase()
            .trim()
            .includes(valueSearch.toLocaleLowerCase().trim())
        )
      );
    };
    getAllProductsSearch();
  }, [valueSearch]);
  const handleGetValueSearch = (e) => {
    let value = e.target.value;
    setValueSearch(value);
  };
  const handleOnclickIconSearch = () => {
    setproducts(products);
  };
  let countClickIconSearch = 1;

const handleClickSearch = () => {
  countClickIconSearch++;
  const formSearch = document.querySelector(".search-form");
  const listResult = document.querySelector(".data-search");
  if (countClickIconSearch % 2 !== 1) {
    console.log(countClickIconSearch);
    if (listResult) listResult.style.display = "block";
    if (formSearch) formSearch.classList.add("active");
  } else {
    if (formSearch) formSearch.classList.remove("active");
    if (listResult) listResult.style.display = "none";
  }
};
  return (
    <>
      <>
        <div className="icon" onClick={handleClickSearch}>
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="search-form">
          <input
            onChange={handleGetValueSearch}
            id="search"
            type="text"
            className="search-box"
            required=""
            defaultValue=""
            onClick={handleOnclickInputSearch}
          />
          <label className="label-search" htmlFor="search">Bạn cần tìm sản phẩm gì?</label>
          <Link
          to={`/search/${slugify(valueSearch)}`}
            className="search-form__search"
            href="/tim-kiem?key="
            onClick={handleOnclickIconSearch}
          >
            <i className="fa-solid fa-magnifying-glass" />
          </Link>
        </div>
        </>
      {valueSearch === "" ? (
        ""
      ) : (
        <DataSearch valueSearch={valueSearch} product={products} />
      )}
      </>
  );
}

export default IconSearch;
