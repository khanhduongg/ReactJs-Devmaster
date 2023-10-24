import React, { useEffect, useState } from "react";
import axios from "../Api/api-local";
import Products from "./Products";

function CaterageProduct() {
  const [listProduct, setListProduct] = useState(([]))

  useEffect(() => {
    // get api banner
    const getAllData = async () => {
      let res = await axios.get("products");
      setListProduct(res.data);
    };
    getAllData();
  }, []);
  return (
    <div>
      <Products/>
    </div>
  );
}

export default CaterageProduct;
