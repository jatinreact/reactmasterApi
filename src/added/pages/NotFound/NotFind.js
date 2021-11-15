import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../../../components/commonComponent/PageBanner/PageBanner";
import NotFound from "../../../images/not-found.png";
import "./NotFind.css";

const NotFind = () => {
  return (
    <div>
      <PageBanner title="404 Not Found" dontShowTitle={true} menu={true} />
      <div className="ntfindmain">
        <div>
          <img src={NotFound} alt="not found" className="resimage" />
        </div>
        <h1 style={{ fontWeight: "900", padding: "20px 0" }}>
          OPPS! PAGE NOT FOUND
        </h1>
        <Link to="/">
          <button
            type="button"
            className="btn btn-dark"
            style={{ borderRadius: "25px" }}
          >
            Back to Hamepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFind;