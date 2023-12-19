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

        //append to DOM
        menuDiv.appendChild(ramenImg)
        
    });


}



