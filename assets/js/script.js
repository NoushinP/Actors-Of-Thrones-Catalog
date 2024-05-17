// This line selects the HTML element with the class image-container and assigns it to the variable imageContainer. This element will serve as the container for all character cards.
const imageContainer = document.querySelector(".image-container")
//Defines a function renderCards that takes an array characters as an argument.
function renderCards(characters) {
    //Begins a loop that iterates over each character in the characters array.
    for (const character of characters) {
        const characterContainer = document.createElement("div")
        characterContainer.setAttribute('class', 'character')
        const imageEl = document.createElement("img")
        imageEl.setAttribute("src", character.imageUrl)
        characterContainer.setAttribute('data-actor', characterMapping[character.fullName])
        characterContainer.appendChild(imageEl)
        imageEl.setAttribute('data-actor', characterMapping[character.fullName])
        const nameEl = document.createElement("h4")
        nameEl.textContent = character.fullName
        characterContainer.appendChild(nameEl)
        imageContainer.appendChild(characterContainer)
        imageEl.addEventListener('click', function (event) {
            const actor = this.getAttribute('data-actor')
            console.log(event)
            const parent = event.target.parentElement
            console.log(parent)
            const characterName = document.createElement('h3')
            characterName.innerText = actor
            parent.appendChild(characterName)
        })
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
    "Daenerys Targaryen": "Emilia Clarke",
    "Samwell Tarly": "John Bradley",
    "Jon Snow": "Kit Harington",
    "Arya Stark": "Maisie Williams",
    "Sansa Stark": "Sophie Turner",
    "Brandon Stark": "Isaac Hempstead Wright",
    "Ned Stark": "Sean Bean",
    "Robert Baratheon": "Mark Addy",
    "Jamie Lannister": "Nikolaj Coster-Waldau",
    "Cersei Lannister": "Lena Headey",
    "Catelyn Stark": "Michelle Fairley",
    "Rob Stark": "Richard Madden",
    "Theon Greyjoy": "Alfie Allen",
    "Joffrey Baratheon": "Jack Gleeson",
    "Tyrion Lannister": "Peter Dinklage",
    "The Hound": "Rory McCann",
    "Petyr Baelish": "Aidan Gillen",
    "Davos Seaworth": "Liam Cunningham",
    "Stannis Baratheon": "Stephen Dillane",
    "Varys": "Conleth Hill",
    "Khal Drogo": "Jason Momoa",
    "Margaery Tyrell": "Natalie Dormer",
    "Ygritte": "Rose Leslie",
    "Brienne of Tarth": "Gwendoline Christie",
    "Missandei": "Nathalie Emmanuel",
    "Gilly": "Hannah Murray",
    "Viserys Targaryn": "Harry Lloyd",
    "Rickon Stark": "Art Parkinson",
    "Roose Bolton": "Michael McElhatton",
    "Daario": "Michiel Huisman",
    "Shae": "Sibel Kekilli",
    "Tommen Baratheon": "Dean-Charles Chapman",
    "Gendry Baratheon": "Joe Dempsie",
    "Jorah Mormont": "Iain Glen",
    "Ramsey Bolton": "Iwan Rheon",
    "Talisa Stark": "Oona Chaplin",
    "Jeor Mormont": "James Cosmo",
    "The High Sparrow": "Jonathan Pryce",
    "Oberyn Martell": "Pedro Pascal",
    "Melisandre": "Carice van Houten",
    "Jaqen H'ghar": "Tom Wlaschiha",
    "Tywin Lannister": "Charles Dance",
    "Ellaria Sand": "Indira Varma",
    "Tormund Giantsbane": "Kristofer Hivju",
    "Yara Greyjoy": "Gemma Whelan",
    "Euron Greyjoy": "Pilou Asbaek",
    "Hodor": "Kristian Nairn",
    "Pycelle": "Julian Glover",
    "Grey Worm": "Jacob Anderson",
    "Olenna Tyrell": "Diana Rigg",
    "Qyburn": "Anton Lesser",
    "Lord Bronn": "Jerome Flynn",
};