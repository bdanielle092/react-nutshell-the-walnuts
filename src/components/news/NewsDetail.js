import React, { useState, useEffect } from 'react'; 
import NewsManager from '../../modules/NewsManager';
import './NewsDetail.css';

const NewsDetail = props => {
    const [news, setNews] = useState({ title: "", description: "", url: "" });

    useEffect(() => {
        NewsManager.get(props.newsId)
        .then(news => {
            setNews({
                title: news.title,
                description: news.description,
                url: news.url
            });
        });
    }, [props.newsId]);
    return (
        <div className="news-cards">
            <div className="card-content">
                <picture>
                    <img src={require('./newsicon.png')} alt="News Logo" />
                </picture>
                <h3>
                    Title: {news.title}    
                </h3>
                <p>
                    Description: {news.description}
                </p>
                <p>
                    URL: {news.url}
                </p>
            </div>
        </div>
    );
}

export default NewsDetail;