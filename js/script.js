const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quisquam?',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quisquam?',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quisquam?",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quisquam?',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quisquam?',
  }
];


const mainContainerEl = document.getElementById("main-image");
const mainImageTextEl = document.getElementById("main-image-text");
const sliderEl = document.getElementById("slider-container");

let index = 0;
let counter = 0;

for (const image of images){

  const imgMain = document.createElement("img");
  const imgSlider = document.createElement("img");

  const divEl = document.createElement("div");
  const imgTitle = document.createElement("h2");
  const imgText = document.createElement("p");

  imgMain.src = image.image;
  imgSlider.src = image.image;

  imgTitle.innerHTML = image.title;
  imgText.innerHTML = image.text;

  if(index > 0){
    imgMain.classList.add("hide");
    imgTitle.classList.add("hide");
    imgText.classList.add("hide");

  }

 mainContainerEl.append(imgMain);
 sliderEl.append(imgSlider);
 mainImageTextEl.append(divEl);
 divEl.append(imgTitle, imgText);
 index++;
}

