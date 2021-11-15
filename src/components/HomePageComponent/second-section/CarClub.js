import React from "react";
import image from "./../../../images/car-club.png";

const CarClub = () => {
  return (
    <div className=" mb-3">
      <div className="row">
        <div className="col-md-6 d-md-flex align-items-center p-5 pt-3 p-md-3">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 d-md-flex flex-column">
          <div>
            <p className={`white200 m-0 font_oswald fw-200 fs-25`}>METTOUR</p>
            <h3 className="red m-0 mt_-6 font_oswald fs-30">
              CAR CLUB SINCE 1892
            </h3>
            <p className="white200 m-0 font_oswald fs-12 lp-5">
              CUSTOME AND CLUB
            </p>
          </div>
          <div>
            <p className="light-gray mt-4 font_rubik fw-200 fs-13 lh-24 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, harum. Quisquam repellendus quaerat sint at impedit
              cum! Neque, nihil dolorum.Voluptates, harum. Quisquam repellendus
              quaerat sint at impedit cum! Neque, nihil dolorum
            </p>
            <p className="light-gray mt-4 font_rubik fw-200 fs-13 lh-24 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, harum.
            </p>
          </div>
          <div>
            <p className="fs-3 text-muted signature">Dechssa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarClub;
