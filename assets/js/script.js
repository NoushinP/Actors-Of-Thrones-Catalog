const imageContainer = document.querySelector(".image-container")


function renderCards(actors) {
    //- function to render the actors to card

    // - create an image element
    for (const actor of actors) {
       //create imageEl
       const actorContainer = document.createElement("div")
       const imageEl = document.createElement("img")
       imageEl.setAttribute("src", actor.imageUrl)
       actorContainer.appendChild(imageEl)

        //create textContent
        const nameEl = document.createElement("h4")
        nameEl.textContent = actor.fullName
        actorContainer.appendChild(nameEl)
        imageContainer.appendChild(actorContainer)

    }
}


function getApi() {

    const requestUrl = 'https://thronesapi.com/api/v2/Characters';

    fetch(requestUrl)
        .then(function (response) {
            console.log('response:', response)
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            renderCards(data);
        })
}
getApi();