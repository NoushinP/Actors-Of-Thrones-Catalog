const imageContainer = document.querySelector(".image-container")


function renderCards(characters) {
    //- function to render the actors to card

    // - create an image element
    for (const character of characters) {
        //create imageEl
        const characterContainer = document.createElement("div")
        characterContainer.setAttribute('class', 'character')
        const imageEl = document.createElement("img")
        imageEl.setAttribute("src", character.imageUrl)
        characterContainer.setAttribute('data-actor', characterMapping[character.fullName])
        characterContainer.appendChild(imageEl)
        // characterContainer .addEventListener('click', getDetails)


        //create textContent
        const nameEl = document.createElement("h4")
        nameEl.textContent = character.fullName
        characterContainer.appendChild(nameEl)
        imageContainer.appendChild(characterContainer)

    }
}


function getDetails() {

    const character = target.dataset.character
    console.log(character)
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



    const characterMapping = {
    "Ned Stark": "Sean Bean",
    "Robert Baratheon": "Mark Addy",
    "Jamie Lannister": "Nikolaj Coster-Waldau",
    "Catelyn Stark": "Michelle Fairley",
    "Cersei Lannister": "Lena Headey",
    "Daenerys Targaryen": "Emilia Clarke",
    "Jorah Mormont": "Iain Glen",
    "Viserys Targaryn": "Harry Lloyd",
    "Jon Snow": "Kit Harington",
    "Rob Stark": "Richard Madden",
    "Sansa Stark": "Sophie Turner",
    "Arya Stark": "Maisie Williams",
    "Theon Greyjoy": "Alfie Allen",
    "Brandon Stark": "Isaac Hempstead Wright",
    "Joffrey Baratheon": "Jack Gleeson",
    "The Hound": "Rory McCann",
    "Tyrion Lannister": "Peter Dinklage",
    "Khal Drogo": "Jason Momoa",
    "Petyr Baelish": "Aidan Gillen",
    "Davos Seaworth": "Liam Cunningham",
    "Samwell Tarly": "John Bradley",
    "Stannis Baratheon": "Stephen Dillane",
    "Melisandre": "Caricefree van Houten",
    "Jeor Mormont": "James Cosmo",
    "Bronn": "Jerome Flynn",
    "Varys": "Conleth Hill",
    "Shae": "Sibel Kekilli",
    "Margaery Tyrell": "Natalie Dormer",
    "Tywin Lannister": "Charles Dance",
    "Talisa Maegyr": "Oona Chaplin",
    "Ygritte": "Rose Leslie",
    "Gendry Baratheon": "Joe Dempsie",
    "Tormund Giantsbane": "Kristofer Hivju",
    "Brienne of Tarth": "Gwendoline Christie",
    "Ramsey Bolton": "Iwan Rheon",
    "Gilly": "Hannah Murray",
    "Daario": "Michiel Huisman",
    "Missandei": "Nathalie Emmanuel",
    "Tommen Baratheon": "Dean-Charles Chapman",
    "Ellaria Sand": "Indira Varma",
    "Jaqen H ghar": "Tom Wlaschiha",
    "Roose Bolton": "Michael McElhatton",
    "The High Sparrow": "Jonathan Pryce",
    "Grey Worm": "Jacob Anderson"
};