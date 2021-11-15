import React from "react";
import { Table } from "react-bootstrap";
import style from "./ProductDetails.module.css";
import { technicalData } from "./../Data/TechnicalData";

const TecnicalData = () => {
  return (
    <div className={style.technical_data_section} >
        <div className="container">
        <div className={`${style.technical_data_container}  col-md-9 mx-auto`}>
      <h2 className="text-center mb-3 fs-22 text-uppercase">Technical data</h2>
      <div >
        <Table>
          <tbody>
            {technicalData.map((row, index) => (
              <tr key={index}>
                {row.map((col, index) => (
                  <td key={index}>{col}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
        </div>
    </div>
  );
};

export default TecnicalData;
