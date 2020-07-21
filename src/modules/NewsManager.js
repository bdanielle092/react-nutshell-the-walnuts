const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/news/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/news`).then(result => result.json())
    },
    post(newNews) {
        return fetch (`${remoteURL}/news`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newNews)
        }).then(data => data.json())
    },
    update(editedNews) {
        return fetch(`{remoteURL}/news/${editedNews.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"  
            },
            body: JSON.stringify(editedNews)
        }).then(data => data.json());
    },
    delete(id) {
        return fetch(`${remoteURL}/news/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    }
}