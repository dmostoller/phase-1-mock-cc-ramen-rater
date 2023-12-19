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
        let ramenImgUrl = ramenObj.image
        ramenImg.src = ramenImgUrl
        let ramenImgName = ramenObj.name
        ramenImg.name = ramenImgName
        //append to DOM
        menuDiv.appendChild(ramenImg)        
    });
}


//create function to load ramen to main image after image being clicked on
//eventlistener for onclick


//function

//figure out which was clicked
    //const imageClicked = document.querySelector(``)
    //imageClicked.addEventListener('click', loadRamenDetail)
    //function loadRamenDetail(e) {
//fetch the individual object for the image that was clicked
        //console.log(imageClicked)}

//get div for detail
    //const detailDiv = document.querySelector("#ramen-detail")



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


