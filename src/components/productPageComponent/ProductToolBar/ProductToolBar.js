import React, { useEffect, useState } from "react";
import style from "./ProductToolBar.module.css";
import { IoListOutline, IoApps } from "react-icons/io5";
import car from "./../../../images/car.jpg";
const ProductToolBar = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("albums");

  const productData = [
    {
      category: "NEW COLLECTION",
      title: "NEW COLLECTION 2020-2021",
      offer: "Sell up to 20% off",
      image: car,
    },
    {
      category: "NEW COLLECTION",
      title: "high performance",
      offer: "Sell up to 20% off",
      image: car,
    },
    {
      category: "NEW COLLECTION",
      title: "red sale ends april 30",
      offer: "Sell up to 20% off",
      image: car,
    },
  ];

  // const sortArray = type => {
  //   const types = {
  //     title-ascending: 'Alphabetically, A-Z',
  //     title-descending: 'Alphabetically, Z-A',
  //     price-ascending: 'Price, low to high',
  //     price-descending:  'Price, high to low',
  //   };
  //   const sortProperty = types[type];
  //   const sorted = bands.sort((a, b) => b[sortProperty] - a[sortProperty]);
  //   console.log(sorted);
  //   setData(sorted);
  // };
  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        titleascending: "Alphabetically, A-Z",
        titledescending: "Alphabetically, Z-A",
        priceascending: "Price, low to high",
        pricedescending: "Price, high to low",
      };
      const sortProperty = types[type];
      const sorted = [...productData].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div>
      <div>
        <div className={style.toolbar}>
          <div className={style.left_side}>
            <button className={style.list_button}>
              <IoListOutline />
            </button>
            <button className={`${style.ioapps_button} me-lg-4`}>
              <IoApps />
            </button>
            <p className={style.show_item_count}>Showing 1 to 9 of 37 items</p>
          </div>
          <div className={style.right_side}>
            <div className={style.show_item_wrapper}>
              <label className={style.show_item_label} htmlFor="show_item">
                Show:
              </label>
              <select
                id="show_item"
                className={style.show_item}
                name="show_item"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
            <div className={style.short_by_wrapper}>
              <label className={style.short_by_label} htmlFor="short_by">
                Sort by:
              </label>
              <select
                id="short_by"
                className={style.short_by}
                name="short_by"
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="titleascending">Alphabetically, A-Z</option>
                <option value="titledescending">Alphabetically, Z-A</option>
                <option value="priceascending">Price, low to high</option>
                <option value="pricedescending">Price, high to low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductToolBar;
