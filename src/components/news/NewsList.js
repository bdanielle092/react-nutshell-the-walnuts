import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import NewsManager from '../../modules/NewsManager';

const NewsList = () => {
    const [news, SetNews] = useState([]);
    const getNews = () => {
        return NewsManager.getAll().then(newsFromAPI => {
            SetNews(newsFromAPI)
        });
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div className="news-cards">
            {news.map(news => <NewsCard />)}
        </div>
    );
};

export default NewsList