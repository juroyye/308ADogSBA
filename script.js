const BASE_URL = "https://dog.ceo/api/";
const fido = document.getElementById("fido");
const lucy = document.getElementById("lucy");
const rook = document.getElementById("rook");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const header1 = document.getElementById("firName");
const header2 = document.getElementById("secName");
const header3 = document.getElementById("thirName");
const dropdown = document.getElementById("categories");
const next = document.getElementById("next");
const names = [
  "Bella",
  "Max",
  "Luna",
  "Charlie",
  "Lucy",
  "Cooper",
  "Daisy",
  "Milo",
  "Sadie",
  "Rocky",
  "Molly",
  "Buddy",
  "Bailey",
  "Stella",
  "Bear",
  "Lola",
  "Duke",
  "Roxy",
  "Teddy",
  "Zoe",
  "Lily",
  "Bentley",
  "Coco",
  "Winston",
  "Nala",
  "Riley",
  "Ruby",
  "Finn",
  "Gracie",
  "Zeus",
  "Willow",
  "Murphy",
  "Piper",
  "Jake",
  "Loki",
  "Rosie",
  "Diesel",
  "Ginger",
  "Harley",
  "Scout",
  "Lucky",
  "Millie",
  "Koda",
  "Abby",
  "Remy",
  "Sammy",
  "Blue",
  "Thor",
  "Moose",
  "Ranger",
];

async function loadImage() {
  const response = await axios.get(`${BASE_URL}breeds/list/all`);
  const breedArr = response.data.message;

  for (let breed in breedArr) {
    let newOption = document.createElement("option");
    newOption.textContent = breed;
    dropdown.appendChild(newOption);
  }

  img1.style.backgroundImage = "URL(/images/holdingdog1.jpg)";
  img2.style.backgroundImage = "URL(/images/holdingdog2.jpg)";
  img3.style.backgroundImage = "URL(/images/holdingdog3.jpg)";



  dropdown.addEventListener("change", async (event) => {
    const breedID = event.target.value;
    const response = await axios.get(`${BASE_URL}breed/${breedID}/images`);
    const imgList = response.data.message;

    header1.textContent = "Adopt";
    header2.textContent = "Our";
    header3.textContent = `${breedID}s`;

    let counter = 0;
    img1.setAttribute("src", imgList[counter]);
    img2.setAttribute("src", imgList[(counter += 1)]);
    img3.setAttribute("src", imgList[(counter += 1)]);

    next.addEventListener("click", () => {
      let num1 = Math.random() * 50;
      let num2 = Math.random() * 50;
      let num3 = Math.random() * 50;

      header1.textContent = names[Math.floor(num1)];
      header2.textContent = names[Math.floor(num2)];
      header3.textContent = names[Math.floor(num3)];

      img1.setAttribute("src", imgList[counter++]);
      img2.setAttribute("src", imgList[counter++]);
      img3.setAttribute("src", imgList[counter++]);
    });
  });
}

loadImage();
