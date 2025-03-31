// Create three functions: fetchUser, fetchPosts, and fetchComments.
// Each should return a promise that resolves after a random delay(between 1 - 3 seconds)
// with sample data(e.g., "User data", "Posts data", "Comments data").
// Use Promise.all to wait for all three promises to resolve and log the results as an array.

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Danny!"), 1000);
    });
}

function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Tonight 7:00 go soccer"), 2000);
    });
}

function fetchComments() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Eat at home"), 4000);
    });
}

Promise.all([fetchUser(), fetchPosts(), fetchComments()])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("Error!: ", error);
    });