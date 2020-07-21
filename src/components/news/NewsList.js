import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import NewsManager from '../../modules/NewsManager';


const NewsList = (props) => {
    const [news, setNews] = useState([]);

    const getNews = () => {
        return NewsManager.getAll().then(newsFromAPI => {
            setNews(newsFromAPI)
        });
    };

    const deleteNews = id => {
        NewsManager.delete(id)
        .then(() => NewsManager.getAll().then(setNews));
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <>
        <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {props.history.push("/news/new")}}>
            Create News Article
        </button>
        </section>
        <div className="news-cards">
            {news.map(news =>
            <NewsCard 
                key={news.id} 
                news={news}
                deleteNews={deleteNews} 
                {...props}
                />
            )}
        </div>
        </>
    );
};

export default NewsList;