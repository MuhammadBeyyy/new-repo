let url=" https://api.genderize.io?name="
let input = document.getElementById('wrapper')
let predictGender = () => {
   let name= document.getElementById('name').value
   let error = document.getElementById('error')
   let finalUrl = url + name
   console.log(name)
   console.log(finalUrl)
   wrapper.innerHTML= ''

   //Check if input field is not empty and the entered name does not contain anything but alphabets
   if (name.length > 0 && /^[A-Za-z]+$/.test(name)) {
    fetch(finalUrl)
    .then((response)=> response.json())
    .then((response) => {
    console.log(response)
    let div= document.createElement('div')
    div.setAttribute("id", "info")
    div.innerHTML = `<h2 id="result-name">${response.name}</h2> <img src="" id="gender-icon"/> <h1 id="gender">${response.gender}</h1> <h4 id="probability">Probability: ${response.probability}</h4>`
    wrapper.append(div)
    if(response.gender =="female"){
        div.classList.add('female')
        document
        .getElementById('gender-icon')
        .setAttribute("src", "Female-Symbol-Silhouette.svg")
    } else {
        div.classList.add('male')
        document
        .getElementById('gender-icon')
        .setAttribute("src", "Male-Symbol-Silhouette.svg")
    }
    })
      document.getElementById('name').value = ""
   } else {
    error.innerHTML =""
   }
}


document.getElementById('submit').addEventListener("click", predictGender)
window.addEventListener('load', predictGender)
