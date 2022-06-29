const BASE_URL = 'https://api.thecatapi.com/v1/images/search/';


const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json[0].url;
  }
  catch(e) {
    console.log(e.message);
  }
} 

const IMG = document.getElementById('cat');
const loadImg = async () => {
  IMG.src = await getCats();
}

loadImg();

const BTN = document.getElementById('change-cat');
BTN.addEventListener('click', () => {
  loadImg();
  console.log('clicado')
})