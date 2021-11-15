import React from 'react';
import NewsArea from './NewsArea';
import NewsPageSideBar from './NewsPageSideBar';


const NewsPageMainContent = () => {
    return (
        <section className="container">
            <div className="row my-5 py-4">
                <div className="col-lg-9">
                    <NewsArea />
                </div>
                <div className="col-lg-3 d-none d-lg-block">
                    <NewsPageSideBar />
                </div>
            </div>
            
        </section>
    );
};

export default NewsPageMainContent;