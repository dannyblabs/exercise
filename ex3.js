// Create three functions: fetchUser, fetchPosts, and fetchComments.
// Each should return a promise that resolves after a random delay(between 1 - 3 seconds)
// with sample data(e.g., "User data", "Posts data", "Comments data").
// Use Promise.all to wait for all three promises to resolve and log the results as an array.

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Viet Hoang!"), 1000);
    });
}

function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Tối nay 7h đi đá bóng"), 2000);
    });
}

function fetchComments() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Phải ăn cơm nhà"), 4000);
    });
}

Promise.all([fetchUser(), fetchPosts(), fetchComments()])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("Lỗi !: ", error);
    });