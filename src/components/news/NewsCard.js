import React from "react";
import "./News.css"

const NewsCard = props => {
    return (
        <div className="news-cards">
            <div className="card-content">
                <picture>
                    <img src={require("./newsicon.png")} alt="News Icon" />
                </picture>
                <h3> Title: <span className="card-newsTitle">
                    {props.news.title}
                </span> </h3>
                <p>
                    Description: {props.news.description}
                </p>
                <p>
                    URL: {props.news.url}
                </p>
                <button type="button" onClick={() => props.deleteNews(props.news.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}
export default NewsCard