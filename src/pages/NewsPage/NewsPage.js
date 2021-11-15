import React from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
import NewsPageMainContent from './../../components/NewsPageComponent/NewsPageMainContent';

const NewsPage = () => {
    return (
        <div>
            <PageBanner title="News"/>
            <MenuBar />
            <NewsPageMainContent />
        </div>
    );
};

export default NewsPage;