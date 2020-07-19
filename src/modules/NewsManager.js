const remoteURL = "http://localhost:5002"

export default {
    git(id) {
        return fetch(`${remoteURL}/news/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/news`).then(result => result.json())
    }
}