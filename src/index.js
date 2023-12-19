// write your code here

//get request to fetch from api

fetch("http://localhost:3000/ramens")
    .then((resp) => resp.json())
    .then((data) => renderRamen(data))

//create function to render ramen images into the div tags

function renderRamen(ramenArray) {
    //console.log(ramenArray)
    //get the div tag
    const menuDiv = document.querySelector("#ramen-menu")
    //loop through json array objects and add to DOM with forEach loop
    ramenArray.forEach((ramenObj) => {
        //console.log(ramenObj)
        //create img tags 
        const ramenImg = document.createElement('img')
        ramenImg.src = ramenObj.image
        //ramenImg.name = ramenObj.name
        //append to DOM
        menuDiv.appendChild(ramenImg) 
        

        // deliverable 2 -- put the click events inside the loop so each image has its own click event listener
        ramenImg.addEventListener('click', handleClick)

        function handleClick() {
// console.log(ramenObj)
//update name tag
            const nameDisplay = document.querySelector('.name')
            nameDisplay.textContent = ramenObj.name
//         //update restaurant tag
            const restaurantDisplay = document.querySelector('.restaurant')
            restaurantDisplay.textContent = ramenObj.restaurant
//         //update comment tag
            const commentDisplay = document.querySelector('#comment-display')
            commentDisplay.textContent = ramenObj.comment
//         //upate rating tag
            const ratingDisplay = document.querySelector('#rating-display')
            ratingDisplay.textContent = ramenObj.rating
//         //upate image tag
            const imageDisplay = document.querySelector('.detail-image')
            imageDisplay.src = ramenObj.image

        }


    });
}

//add new RAMEN from FORM SUBMIT - POST
// get form

const form = document.querySelector("form")
form.addEventListener('submit', (e) => addNewRamen(e))

function addNewRamen(e) {
    e.preventDefault()
    //console.log(e)
    //set new obj based on form info
    let newRamenObj = {
        name : e.target.name.value,
        restaurant : e.target.restaurant.value,
        rating : e.target.rating.value,
        comment : e.target.comment.value,
        image : e.target.image.value,
    }
    // make post request
    fetch('http://localhost:3000/ramens', {
        method : 'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(newRamenObj)
    })    
        .then((resp) => resp.json())
        .then((data) => renderRamen([data]))
}


