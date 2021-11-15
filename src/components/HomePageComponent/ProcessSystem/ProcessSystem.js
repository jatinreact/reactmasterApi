import React from "react";
import style from "./ProvessSystem.module.css";
import { processSystemData } from "./../../Data/ProcessSystemData";

const ProcessSystem = () => {
  return (
    <div className={`${style.section} mt_-6`}>
      <div className="container">
        <div className="row">
          {processSystemData.map((data, index) => (
            <div key={index} className={`col-md-4 mb-5 mb-md-0`}>
              <div className="px-5 px-md-0">
                <div className={`${style.my_card}`}>
                  <h4
                    className={` text-uppercase font_oswald white700 ${style.title}`}
                  >
                    {data.title}
                  </h4>
                  <p className={`${style.description} white300`}>
                    {data.description}
                  </p>
                  <p className={style.icon_wrapper}>
                    <data.icon className={style.icon} />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSystem;
