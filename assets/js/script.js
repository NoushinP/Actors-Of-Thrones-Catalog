const imageContainer = document.querySelector(".image-container")


function renderCards(characters) {
    //- function to render the characters to card

    // - create an image element
    for (const character of characters) {
       //create imageEl
       const characterContainer = document.createElement("div")
       characterContainer.setAttribute('class', 'character')
       const imageEl = document.createElement("img")
       imageEl.setAttribute("src", character.imageUrl)
       characterContainer.setAttribute('data-actor', characterMapping[character.fullName])
       characterContainer.appendChild(imageEl)
    //    characterContainer.addEventListener('click', getDetails)

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

    // let value = div.dataset.myAttribute
    // console.log(getAttribute.characterMapping)
    // getAttribute()
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


// fix names to EXACT match of api
// push after names done
const characterMapping = {
    "Emilia Clarke": "Daenerys Targaryen",
    "John Bradley": "Samwell Tarly",
    "Kit Harington": "Jon Snow",
    "Maisie Williams": "Arya Stark",
    "Sophie Turner": "Sansa Stark",
    "Isaac Hempstead Wright": "Brandon Stark",
    "Sean Bean": "Ned Stark",
    "Mark Addy": "Robert Baratheon",
    "Nikolaj Coster-Waldau": "Jamie Lannister",
    "Lena Headey": "Cersei Lannister",
    "Michelle Fairley": "Catelyn Stark",
    "Richard Madden": "Rob Stark",
    "Alfie Allen": "Theon Greyjoy",
    "Jack Gleeson": "Joffrey Baratheon",
    "Peter Dinklage": "Tyrion Lannister",
    "Rory McCann": "The Hound",
    "Aidan Gillen": "Petyr Baelish",
    "Liam Cunningham": "Davos Seaworth",
    "Stephen Dillane": "Stannis Baratheon",
    "Conleth Hill": "Varys",
    "Jason Momoa": "Khal Drogo",
    "Natalie Dormer": "Margaery Tyrell",
    "Rose Leslie": "Ygritte",
    "Gwendoline Christie": "Brienne of Tarth",
    "Nathalie Emmanuel": "Missandei",
    "Hannah Murray": "Gilly",
    "Harry Lloyd": "Viserys Targaryn",
    "Art Parkinson": "Rickon Stark",
    "Michael McElhatton": "Roose Bolton",
    "Michiel Huisman": "Daario",
    "Sibel Kekilli": "Shae",
    "Dean-Charles Chapman": "Tommen Baratheon",
    "Joe Dempsie": "Gendry Baratheon",
    "Iain Glen": "Jorah Mormont",
    "Iwan Rheon": "Ramsey Bolton",
    "Oona Chaplin": "Talisa Stark",
    "James Cosmo": "Jeor Mormont",
    "Jonathan Pryce": "The High Sparrow",
    "Pedro Pascal": "Oberyn Martell",
    "Carice van Houten": "Melisandre",
    "Tom Wlaschiha": "Jaqen H'ghar",
    "Charles Dance": "Tywin Lannister",
    "Indira Varma": "Ellaria Sand",
    "Kristofer Hivju": "Tormund Giantsbane",
    "Gemma Whelan": "Yara Greyjoy",
    "Pilou Asbaek": "Euron Greyjoy",
    "Kristian Nairn": "Hodor",
    "Julian Glover": "Pycelle",
    "Jacob Anderson": "Grey Worm",
    "Diana Rigg": "Olenna Tyrell",
    "Anton Lesser": "Qyburn",
    "Jerome Flynn": "Lord Bronn",
};
