const BASE_URL = "https://dog.ceo/api/";
const fido = document.getElementById("fido");
const lucy = document.getElementById("lucy");
const rook = document.getElementById("rook");
const fido_img = document.getElementById('img1')
const lucy_img = document.getElementById('img2')
const rook_img = document.getElementById('img3')

async function loadImage1() {
     const response = await axios.get(`${BASE_URL}breed/affenpinscher/images`);
  const img =  response.data.message[0]
    fido_img.setAttribute('src', img)
}
 
loadImage1()


async function loadImage2() {
      const response = await axios.get(`${BASE_URL}breed/akita/images`);
  const img =  response.data.message[0]
  lucy_img.setAttribute('src', img)
}

loadImage2()

async function loadImage3() {
const response = await axios.get(`${BASE_URL}breed/whippet/images`);
  const img =  response.data.message[0]
  rook_img.setAttribute('src', img)
}

loadImage3()

