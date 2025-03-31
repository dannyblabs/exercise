//ex2
// Rewrite the exercise1 using an async function
// called getData that uses await to pause execution until the data is "fetched."
// Log the result directly to the console without.then()
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 5000);
    })
}

async function getData() {
    console.log("ready for data")
    let data = await fetchData();
    console.log(data);
}

getData();