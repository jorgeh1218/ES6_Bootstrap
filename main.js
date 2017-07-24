var indexColumn = 1;
let loadImage = (url) => {
    return new Promise(function(resolve, reject) {

        let image = new Image();
        image.className = "img-responsive";
        image.width = "300";
        image.height = "300";
        image.vspace = "10"
        image.onload = function() {
            resolve(image);
        };
        image.onerror = function() {
            reject(url);
        }

        //
        image.src = url;
    });
}

document.getElementById("profile-title").innerHTML = "Camila Senna";
loadImage("imgs/01.jpg").then((res) => document.getElementById("profile-img").src = res.src);
//Promises with all and race
// Promises are formed with resolve and reject
// What you send as a result is key, look at the values and then the arrow function, elegant
Promise.all([
        loadImage(`imgs/02.jpg`),
        loadImage(`imgs/03.jpg`),
        loadImage(`imgs/04.jpg`),
        loadImage(`imgs/05.jpg`),
        loadImage(`imgs/06.jpg`),
        loadImage(`imgs/07.jpg`),
        loadImage(`imgs/08.jpg`),
        loadImage(`imgs/09.jpg`)
    ])
    .then((images) => {
        for (let img of images) {
            document.getElementById(`column-${indexColumn}`).appendChild(img);
            indexColumn++;
            if (indexColumn == 5)
                indexColumn = 1;
        }

    })
    .catch((err) => console.log(`Error happenned: ${err}`));
/*Promise.race([
    loadImage(`https://static.pexels.com/photos/102623/pexels-photo-102623.jpeg`),
    loadImage(`https://www.pexels.com/assets/pexels-stock-photos-b3d10c31f607f9971c55287b4518b7374d8f82fee1246c1baba546d922688265.png`)])
    .then((images) => {
        print(images);
        //images.forEach((img => document.getElementById("list").appendChild(img)))
        //console.log(content);
        document.getElementById("list").appendChild(images);
        //for(let x of content)
          //
        })
    .catch((err) => console.log(`Error happenned`));
// Do not replace let with var
var myArray = [2,3,5];
let changeValue = (valor) => {
  valor *=2;
  console.log(`/ ${valor}`);
}
myArray.map(x => changeValue(x));
console.log(myArray);
*/
