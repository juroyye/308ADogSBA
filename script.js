const BASE_URL = "https://dog.ceo/api/";
const fido = document.getElementById("fido");
const lucy = document.getElementById("lucy");
const rook = document.getElementById("rook");

fido.addEventListener("click", async () => {
  const response = await axios.get(`${BASE_URL}breed/affenpinscher/images`);
  const img =  response.data.message[0]

});

lucy.addEventListener("click", async () => {
  const response = await axios.get(`${BASE_URL}breed/akita/images`);
  const img =  response.data.message[0]
});

rook.addEventListener("click", async () => {
  const response = await axios.get(`${BASE_URL}breed/whippet/images`);
  const img =  response.data.message[0]
});
