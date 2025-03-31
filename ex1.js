// Write an async function called fetchData that simulates fetching data from an API.
// Use setTimeout to mimic a 2 - second delay and return a string like "Data fetched successfully!".
// Call the function and log the result using.then()
// Hàm giả lập pha cà phê (Promise)
//ex1
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    })
}

fetchData().then(data => {
    console.log(data);
});


