
 
   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
   .then(response => response.json())
   .then(data =>
    displayData(data.meals))
   .catch(err => console.error(err));


document.getElementById("btn").addEventListener
('click',()=>{
    const user = document.getElementById
    ("userInput").value;
    
   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`)
   .then(response => response.json())
   .then(data =>
    displayData(data.meals))
   .catch(err => console.error(err));
    
    
})

const displayData = (products) => {
    console.log(products)
    const container = document.getElementById
        ("product-container")
    container.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div")
        div.classList.add("card")

        div.innerHTML = `
         <img onclick="singleItem(${product.idMeal})" 
         class="cart-img" 
         src="${product.strMealThumb}" alt="">
         <h3>${product.strMeal}</h3>
         <h3>${product.strArea}</h3>
         `
        container.appendChild(div);  

    })
}

const singleItem = (id)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(data => showDetails(data.meals[0]))
    .catch(err => console.error(err));
    
}


const showDetails = (data)=>{
    const modalBody = document.getElementById("modal-body")
    const div = document.createElement("div")
    modalBody.innerHTML = '';

    div.innerHTML=`
    <img class="cart-img" src="${data.strMealThumb}"alt="">
    <h3>${data.strMeal}</h3>
    <h2>Ingredients</h2>
    <ul>
    <li>${data.strIngredient1}</li>
    <li>${data.strIngredient2}</li>
    <li>${data.strIngredient3}</li>
    <li>${data.strIngredient4}</li>
    <li>${data.strIngredient5}</li>
    <li>${data.strIngredient6}</li>
    <li>${data.strIngredient7}</li>
    <li>${data.strIngredient8}</li>
    <li>${data.strIngredient9}</li>
    <li>${data.strIngredient10}</li>

    </ul>

    `
    modalBody.appendChild(div)
    const playerModal = new bootstrap.Modal(document.getElementById('modal'));
    playerModal.show();


}








// const showDetails = (data)=>{
//     console.log(data)

//     const container = document.getElementById
//     ("details-container")

//     const div = document.createElement("div")
//     div.classList.add("card1")
//     div.innerHTML=`
//     <img class="cart-img" src="${data.strMealThumb}"alt="">
//     <h3>${data.strMeal}</h3>
//     <h2>Ingredients</h2>
//     <ul>
//     <li>${data.strIngredient1}</li>
//     <li>${data.strIngredient2}</li>
//     <li>${data.strIngredient3}</li>
//     <li>${data.strIngredient4}</li>
//     <li>${data.strIngredient5}</li>
//     <li>${data.strIngredient6}</li>
//     <li>${data.strIngredient7}</li>
//     <li>${data.strIngredient8}</li>
//     <li>${data.strIngredient9}</li>
//     <li>${data.strIngredient10}</li>

//     </ul>

//     `
//     container.appendChild(div)


// }

