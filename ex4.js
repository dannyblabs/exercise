function getProfile() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Alex" }), 2000);
    });
}

Promise.all([getProfile()]).then(result => {
    console.log(result);
})