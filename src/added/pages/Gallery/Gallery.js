import React from "react";
import PageBanner from "../../../components/commonComponent/PageBanner/PageBanner";
import { useHistory } from "react-router";
import { Form } from "react-bootstrap";
import './Gallery.css'

const Gallery = () => {
    const history = useHistory();
    return(
        <div>
        <PageBanner title="Gallery" dontShowTitle={true} menu={true} />
        <div className="head">
            <div className="header-name">OUR GALLERY</div>
        </div>
        <p style={{ fontFamily:"sans-serif" }}><center>A responsive gallery page where you can add images with caption. Only one gallery at the moment.</center></p>
        <div className="img-container">
            <div className="main1">
                <div className="img1">
                    <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/4_300x300_crop_center.png?v=1624717775" className="img" alt="img1" />
                </div>
                <br />
                <div className="img2">
                    <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/4c_300x300_crop_center.png?v=1624718425" className="img"  alt="img2" />
                </div>
                <br />
                <div className="img3">
                    <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/4d_300x300_crop_center.png?v=1624718425" className="img"  alt="img3" />
                </div>
                <br />
                <div className="img4">
                    <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/4b_300x300_crop_center.png?v=1624718425" className="img"  alt="img4" />
                </div><br />
            </div>
            <div className="main2">
            <div className="img5">
                    <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/4a_300x300_crop_center.png?v=1624718425" className="img"  alt="img5" />
                </div><br />
                <div className="img6">
                    <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/2a_300x300_crop_center.png?v=1624718912" className="img" alt="img6" />
                </div><br />
                <div className="img7">
                    <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/2b_300x300_crop_center.png?v=1624718912" className="img"  alt="img7" />
                </div><br />
                <div className="img8">
                    <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/3a_300x300_crop_center.png?v=1624719128" className="img"  alt="img8" />
                </div><br />
            </div>
            <div className="main2">
            <div className="img9">
                    <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/3b_300x300_crop_center.png?v=1624719128" className="img"  alt="img9" />
                </div><br />
                <div className="img10">
                    <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/4_300x300_crop_center.png?v=1624717775" className="img"  alt="img10" />
                </div><br />
                <div className="img11">
                    <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/3c_300x300_crop_center.png?v=1624719128" className="img"  alt="img11" />
                </div><br />
                <div className="img12">
                    <img src="https://cdn.shopify.com/s/files/1/3012/8606/files/4d_300x300_crop_center.png?v=1624718425" className="img"  alt="img12" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Gallery;