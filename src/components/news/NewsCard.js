import React from "react"

const NewsCard = () => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require("./newsicon.png")} alt="News Icon" />
                </picture>
                <h3>
                        News <span className="card-eventName">
                    </span>
                </h3>
                
            </div>
        </div>
    )
}
export default NewsCard