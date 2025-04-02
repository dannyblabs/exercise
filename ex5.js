let data = [{
    id: 1,
    name: "Bee",
    friend: ["Sam", "Tailor"],
    photos: ["pt1.jpg", "pt2.jpg"],
},
{
    id: 2,
    name: "Danny",
    friend: ["Loyce", "Lupin", "Bee"],
    photos: ["pt3.jpg", "pt544.jpg", "pt5443.jpg"],
},
];

function getProfile(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Profile: ${data.name}`)
        }, 2000);
    });
}
function getFriends(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Friend: ${data.friend.length}`)
        },
            5000);

    });
}
function getPhotos(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Photo: ${data.photos.length}`)
        }, 1500);
    });
}

async function main(data) {
    for (i = 0; i < data.length; i++) {
        const run = await Promise.all([getProfile(data[i]), getFriends(data[i]), getPhotos(data[i])]);
        console.log(run.toString());
    }
}

main(data);

