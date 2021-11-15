import React from "react";
import PageBanner from "../../../components/commonComponent/PageBanner/PageBanner";
import MenuBar from "../../../components/MenuBar/MenuBar";
import NewsComment from "../../components/NewsPageComponent/NewsComment";
import NewsPageSideBar from "../../../components/NewsPageComponent/NewsPageSideBar";
// import "./SingleNewsPage.css";

const SingleNewsPage = ({ newsData }) => {
  console.log(newsData);
  return (
    <div>
      {/* {newsData.map((news, index) => (
       
      ))} */}
      <PageBanner title={`${newsData[0].title}`} />
      <MenuBar />
      <section className="container">
        <div className="row my-5 py-4">
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-4">
                <img src={newsData[0].image} alt="image" />
              </div>
              <div className="col-lg-8">
                <div className={"pt-5"}>
                  <h2>{newsData[0].title}</h2>
                </div>
                <div className="pt-4">
                  <h6>{newsData[0].author}</h6>
                  <h6>{newsData[0].date}</h6>
                </div>
              </div>
            </div>
            <div className="pt-4 pb-4">
              <p>{newsData[0].description}</p>
            </div>
            <hr />
            <NewsComment />
          </div>

          <div className="col-lg-3 d-none d-lg-block">
            <NewsPageSideBar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleNewsPage;