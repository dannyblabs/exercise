let obj = [{
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

for (let i = 0; i < 1; i++) {

    function getProfile() {
        return new Promise((resolve, error) => {
            setTimeout(() => {
                resolve(`Profile: ${obj[i].name}`)
            }, 2000);
        });
    }
    function getFriends() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Friend: ${obj[i].friend.length}`)
            },
                5000);

        });
    }
    function getPhotos() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const pt = ["pt1.jpg", "pt2.jpg"];
                resolve(`Photo: ${obj[i].photos.length}`)
                //resolve(`Photos: ${ pt.length }`)
            }, 1500);
        });
    }
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