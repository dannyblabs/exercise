function getProfile() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Alex" }), 2000);
    });
}
function getFriends() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const friend = ["Sam", "Tailor"];
            console.log("Friend : " + friend.length);
            resolve(friend)
        },
            5000
        );

    });
}
function getPhotos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("pt1.jpg", "pt2.jpg"), 1500);
    });
}

async function loadProfile() {
    const run = await Promise.all([getProfile(), getFriends(), getPhotos()]);
    console.log(run);
}

loadProfile();