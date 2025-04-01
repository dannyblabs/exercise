

function getProfile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const obj = { id: 1, name: "Alex" }
            resolve(`Profile: ${obj.name}`)
        }, 2000);
    });
}
function getFriends() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const friend = ["Sam", "Tailor"];
            resolve(`Friend: ${friend.length}`)
        },
            5000);

    });
}
function getPhotos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const pt = ["pt1.jpg", "pt2.jpg"];
            resolve(`Photos: ${pt.length}`)
        }, 1500);
    });
}

async function loadProfile() {
    const run = await Promise.all([getProfile(), getFriends(), getPhotos()]);
    return run.toString();
}

async function main() {
    const result = await loadProfile();
    console.log(result);
}

main();