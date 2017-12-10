
const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

// Endpoints
//DONE: `GET /posts` | Get all of the posts. Useful for the main page when no category is selected.
export const getAllPosts = () =>
    fetch(`${api}/posts` , {headers})
        .then(res => res.json());

//DONE: `GET /posts/:id` | Get the details of a single post.
export const getPostDetails = (postId) =>
    fetch(`${api}/posts/${postId}`, { headers })
        .then(res => res.json());

//DONE: `GET /categories` | Get all of the categories available for the app. List is found in `categories.js`. Feel free to extend this list as you desire.
export const getAllCategories = () =>
    fetch(`${api}/categories` , {headers})
        .then(res => res.json())
        .then(data => data.categories);

//DONE: `GET /:category/posts` | Get all of the posts for a particular category.
export const getPostsByCategory = (category) =>
    fetch(`${api}/${category}/posts` , {headers})
        .then(res => res.json());


//DONE: `POST /posts` | Add a new post. | **id** - UUID should be fine, but any unique id will work <br> **timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like. <br> **title** - [String] <br> **body** - [String] <br> **author** - [String] <br> **category** -  Any of the categories listed in `categories.js`. Feel free to extend this list as you desire.
export const addNewPost = (body) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())

//DONE: `PUT /posts/:id` | Edit the details of an existing post. | **title** - [String] <br> **body** - [String] |
export const updatePost = (post) =>
    fetch(`${api}/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(res => res.json())

//DONE: `GET /posts/:id/comments` | Get all the comments for a single post.
export const getPostComments = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, { headers })
        .then(res => res.json());


//DONE: `POST /posts/:id` | Used for voting on a post. | **option** - [String]: Either `"upVote"` or `"downVote"`.
export const voteOnPost = (post, option) =>
    fetch(`${api}/posts/${post.id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option })
    }).then(res => res.json())

//DONE: `DELETE /posts/:id` | Sets the deleted flag for a post to 'true'. <br> Sets the parentDeleted flag for all child comments to 'true'.
export const deletePost = (post, option) =>
    fetch(`${api}/posts/${post.id}`, {
        method: 'DELETE',
        headers
    }).then(res => res.json())

//TODO: `POST /comments` | Add a comment to a post. | **id** - Any unique ID. As with posts, UUID is probably the best here. <br> **timestamp** - [Timestamp] Get this however you want. <br> **body** - [String] <br> **author** - [String] <br> **parentId** - Should match a post id in the database.
//TODO: `GET /comments/:id` | Get the details for a single comment.
//TODO: `POST /comments/:id` | Used for voting on a comment. | **option** - [String]: Either `"upVote"` or `"downVote"`.
//TODO: `PUT /comments/:id` | Edit the details of an existing comment. | **timestamp** - timestamp. Get this however you want. <br> **body** - [String]
//TODO: `DELETE /comments/:id` | Sets a comment's deleted flag to `true`. | &nbsp;

//DONE: Generate UUID
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};