import React, { useEffect, useState } from "react";
import axios from "../Api/api-local";

function Banner() {
  const [listBanner, setListBanner] = useState([]);

  useEffect(() => {
    // get api banner
    const getAllData = async () => {
      let res = await axios.get("data-banner-home");
      setListBanner(res.data);
    };
    getAllData();
  }, []);
  return (
    <div>
      <section id="section" className="">
        <div className="section-banner">
          <div className="section-banner__content">
            <h1>
              {listBanner.title} <br />
              <span>{listBanner.subTitle}</span>
            </h1>
            <p>
              {listBanner.description}
            </p>
            <a className="section-banner__btn text-none" href="/lien-he">
              liên hệ ngay
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
