const BASE_URL = "https://dog.ceo/api/";
const fido = document.getElementById("fido");
const lucy = document.getElementById("lucy");
const rook = document.getElementById("rook");
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const dropdown = document.getElementById('categories')
const next = document.getElementById('next')


async function loadImage() {
     const response = await axios.get(`${BASE_URL}breeds/list/all`);
     const breedArr = response.data.message

     for(let breed in breedArr){
        let newOption = document.createElement('option')
        newOption.textContent = breed
        dropdown.appendChild(newOption)
     }

     dropdown.addEventListener('change', async (event) => {
       const breedID = event.target.value
       const response = await axios.get(`${BASE_URL}breed/${breedID}/images`);
       const imgList = response.data.message

       let counter = 0 
        img1.setAttribute('src', imgList[counter])
        img2.setAttribute('src', imgList[counter+=1])
        img3.setAttribute('src', imgList[counter+=1])

        next.addEventListener('click', ()=> {

            if(counter == 10){
                next.style.display = 'none';
            }

            img1.setAttribute('src', imgList[counter++])
            img2.setAttribute('src', imgList[counter++])
            img3.setAttribute('src', imgList[counter++])
        })
       



     })


}     

loadImage()
 

