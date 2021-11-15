import React from "react";
import style from "./Categories.module.css";
import { ListGroup, Form } from "react-bootstrap";
import {
  listCategoryData,
  checkboxCategoryData,
} from "./../../Data/ProductPageCategoryData";
import image from "../../../images/collection_side.png";

const Categorys = () => {
  return (
    <>
      <div className={`${style.category_container}`}>
        <div className="mb-4">
          {listCategoryData.map((categories, index) => (
            <div key={index}>
              <h3 className={style.category_titile}>{categories.title}</h3>
              <ListGroup className={style.list_container}>
                {categories.cat.map((data, index) => (
                  <ListGroup.Item key={index} className={style.list_item}>
                    {data}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          ))}
        </div>

        {checkboxCategoryData.map((categories, index) => (
          <div className="mb-4" key={index}>
            <h3 className={style.category_titile}>{categories.title}</h3>
            {categories.cat.map((data, index) => (
              <Form.Check
                className={style.check_item}
                key={index}
                type={"checkbox"}
                id={data}
              >
                <Form.Check.Input
                  type={"checkbox"}
                  className={style.my_checkbox}
                />
                <label htmlFor={data}>{data}</label>
              </Form.Check>
            ))}
          </div>
        ))}
        <div>
          <img src={image} className="w-100" alt="" />
        </div>
      </div>
    </>
  );
};

export default Categorys;
