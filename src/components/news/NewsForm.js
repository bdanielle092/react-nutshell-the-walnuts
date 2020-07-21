import React, { useState } from 'react';
import NewsManager from '../../modules/NewsManager';
import './NewsForm.css';

const NewsForm = props => {
    const [news, setNews] = useState({ title: "", description: "", url: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...news };
        stateToChange[evt.target.id] = evt.target.value;
        setNews(stateToChange);
    };

    const constructNewNews = evt => {
        evt.preventDefault();
        if (news.title === "" || news.description === "" || news.url === "" ) {
        window.alert("Please input News Title, Description, and URL");
    } else {
        setIsLoading(true);
        NewsManager.post(news)
        .then(() => props.history.push("/news"))}
    };

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">

                    <input 
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="title"
                    placeholder="Title"
                    />
                    <label htmlFor="title">Title</label>
                    
                    <input 
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="description"
                    placeholder="Description"
                    />
                    <label htmlFor="description">Description</label>

                    <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="url"
                    placeholder="URL"
                    />
                    <label htmlFor="url">URL</label>
                    </div>

                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={isLoading}
                        onClick={constructNewNews}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default NewsForm;