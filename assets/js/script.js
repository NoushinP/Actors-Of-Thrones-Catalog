let responseData= {};


const characterMapping = {
    "Sean Bean": "Eddard Ned Stark",
    "Mark Addy": "Robert Baratheon",
    "Nikolaj Coster-Waldau": "Jaime Lannister",
    "Michelle Fairley": "Catelyn Stark",
    "Lena Headey": "Cersei Lannister",
    "Emilia Clarke": "Daenerys Targaryen",
    "Iain Glen": "Jorah Mormont",
    "Harry Lloyd": "Viserys Targaryen",
    "Kit Harington": "Jon Snow",
    "Richard Madden": "Robb Stark",
    "Sophie Turner": "Sansa Stark",
    "Maisie Williams": "Arya Stark",
    "Alfie Allen": "Theon Greyjoy",
    "Isaac Hempstead Wright": "Bran Stark",
    "Jack Gleeson": "Joffrey Baratheon",
    "Rory McCann": "Sandor 'The Hound' Clegane",
    "Peter Dinklage": "Tyrion Lannister",
    "Jason Momoa": "Khal Drogo",
    "Aidan Gillen": "Petyr littlefinger' Baelish",
    "Liam Cunningham": "Davos Seaworth",
    "John Bradley": "Samwell Tarly",
    "Stephen Dillane": "Stannis Baratheon",
    "Carice van Houten": "Melisandre",
    "James Cosmo": "Jeor Mormont",
    "Jerome Flynn": "Bronn",
    "Conleth Hill": "Varys",
    "Sibel Kekilli": "Shae",
    "Natalie Dormer": "Margaery Tyrell",
    "Charles Dance": "Tywin Lannister",
    "Oona Chaplin": "Talisa Maegyr",
    "Rose Leslie": "Ygritte",
    "Joe Dempsie": "Gendry",
    "Kristofer Hivju": "Tormund Giantbane",
    "Gwendoline Christie": "Brienne of Tarth",
    "Iwan Rheon": "Ramsay Bolton",
    "Hannah Murray": "Gilly",
    "Michiel Huisman": "Daario Naharis",
    "Nathalie Emmanuel": "Missandei",
    "Dean-Charles Chapman": "Tommen Baratheon",
    "Indira Varma": "Ellaria Sand",
    "Tom Wlaschiha": "Jaqen H ghar",
    "Michael McElhatton": "Roose Bolton",
    "Jonathan Pryce": "The High Sparrow",
    "Jacob Anderson": "Grey Worm",
};

// Define an array of image data
const imageData = [
    { name: "Robb Stark", src: "./assets/images/Robb Stark.jpg" },
    { name: "Arya Stark", src: "./assets/images/Arya Stark.jpg" },
    { name: "Bran Stark", src: "./assets/images/Bran Stark.jpg" },
    { name: "Brienne of Tarth", src: "./assets/images/Brienne of Tarth.jpg" },
    { name: "Bronn", src: "./assets/images/Bronn.jpg" },
    { name: "Catelyn Stark", src: "./assets/images/Catelyn Stark.jpg" },
    { name: "Cersei Lannister", src: "./assets/images/Cersei Lannister.jpg" },
    { name: "Daario Naharis", src: "./assets/images/Daario Naharis.jpg" },
    { name: "Daenerys Targaryen", src: "./assets/images/Daenerys Targaryen.jpg" },
    { name: "Davos Seaworth", src: "./assets/images/Davos Seaworth.jpg" },
    { name: "Eddard Ned Stark", src: "./assets/images/Eddard Ned Stark.jpg" },
    { name: "Ellaria Sand", src: "./assets/images/Ellaria Sand.jpg" },
    { name: "Gendry", src: "./assets/images/Gendry.jpg" },
    { name: "Gilly", src: "./assets/images/Gilly.jpg" },
    { name: "Grey Worm", src: "./assets/images/Grey Worm.jpg" },
    { name: "High Sparrow", src: "./assets/images/High Sparrow.jpg" },
    { name: "Jaime Lannister", src: "./assets/images/Jaime Lannister.jpg" },
    { name: "Jaqen H ghar", src: "./assets/images/Jaqen H ghar.jpg" },
    { name: "Jeor Mormont", src: "./assets/images/Jeor Mormont.jpg" },
    { name: "Joffrey Baratheon", src: "./assets/images/Joffrey Baratheon.jpg" },
    { name: "Jon Snow", src: "./assets/images/Jon Snow.jpg" },
    { name: "Jorah Mormont", src: "./assets/images/Jorah Mormont.jpg" },
    { name: "Khal Drogo", src: "./assets/images/khal drogo.jpg" },
    { name: "Margaery Tyrell", src: "./assets/images/Margaery Tyrell.jpg" },
    { name: "Melisandre", src: "./assets/images/Melisandre.jpg" },
    { name: "Missandei", src: "./assets/images/Missandei.jpg" },
    { name: "Petyr Littlefinger Baelish", src: "./assets/images/Petyr littlefinger Baelish.jpg" },
    { name: "Ramsay Bolton", src: "./assets/images/Ramsay Bolton.jpg" },
    { name: "Robert Baratheon", src: "./assets/images/Robert Baratheon.jpg" },
    { name: "Roose Bolton", src: "./assets/images/Roose Bolton.jpg" },
    { name: "Samwell Tarly", src: "./assets/images/Samwell Tarly.jpg" },
    { name: "Sandor Clegane", src: "./assets/images/Sandor Clegane.jpg" },
    { name: "Sansa Stark", src: "./assets/images/Sansa Stark.jpg" },
    { name: "Shae", src: "./assets/images/Shae.jpg" },
    { name: "Stannis Baratheon", src: "./assets/images/Stannis Baratheon.jpg" },
    { name: "Talisa Maegyr", src: "./assets/images/Talisa Maegyr.jpg" },
    { name: "Theon Greyjoy", src: "./assets/images/Theon Greyjoy.jpg" },
    { name: "Tommen Baratheon", src: "./assets/images/Tommen Baratheon.jpg" },
    { name: "Tormund Giantbane", src: "./assets/images/Tormund Giantbane.jpg" },
    { name: "Tyrion Lannister", src: "./assets/images/Tyrion Lannister.jpg" },
    { name: "Tywin Lannister", src: "./assets/images/Tywin Lannister.jpg" },
    { name: "Varys", src: "./assets/images/Varys.jpg" },
    { name: "Viserys Targaryen", src: "./assets/images/Viserys Targaryen.jpg" },
    { name: "Ygritte", src: "./assets/images/Ygritte.jpg" },
];


// Function to create elements for each character and append to the container
function populateCharacters() {
    const container = document.getElementById("image-container");
    imageData.forEach(image => {
        const div = document.createElement("div");
        div.classList.add("item");

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.name;

        const h4 = document.createElement("h4");

         // Create an anchor tag for the name
        const anchor = document.createElement("a");
        anchor.href = "#" + image.name.toLowerCase(); // Link to an element with the same id as the name
        anchor.textContent = image.name;


        // Append the anchor tag to the h4 element
        h4.appendChild(anchor);


        // Create a star button for adding to favorites
        const starButton = document.createElement("button");
        starButton.textContent = "⭐"; // Star emoji
        starButton.classList.add("star-button");

        // Add click event listener to the star button
        starButton.addEventListener("click", function(event) {
            event.stopPropagation(); // Prevent image click event from firing
            addToFavorites(image);
        });

        div.appendChild(img);
        div.appendChild(h4);
        div.appendChild(starButton);
        container.appendChild(div);
    });
}

// Function to display more details about a character when the image is clicked
function displayCharacterDetails(character) {
    // Implementation to display character details (e.g., in a modal or a separate section)
    console.log("Displaying details for:", character.name);
}

// Function to add a character to the favorites list
function addToFavorites(character) {
    // Implementation to add character to favorites list
    console.log("Adding to favorites:", character.name);
    document.addEventListener("DOMContentLoaded", function() {
        populateCharacters();
        addImageClickEvent();
    });
}


// Function to add click event listener to all images in the image container
function addImageClickEvent() {
    const images = document.querySelectorAll("#image-container img");
    images.forEach(image => {
        image.addEventListener("click", function() {
            displayCharacterDetails(imageData.find(char => char.src === image.src));
        });
    });
}

// Call the function to add click event listener to images
addImageClickEvent();


populateCharacters();

const uniqueImageData = imageData.filter((image, index, self) =>
    index === self.findIndex((t) => t.name === image.name)
);

// Function to create and append image elements
function createImageElements() {
    // Get the container element where you want to append images
    const container = document.getElementById("image-container");

    container.innerHTML = "";

    // Loop through the image data array
    imageData.forEach((image, index) => {
        // Create a new img element
        const img = document.createElement("img");

        // Set the src attribute to the image URL
        img.src = image.src;

        // Set the alt attribute to the image name
        img.alt = image.name;

        // Create a div for each image and assign a class
        const div = document.createElement("div");
        div.className = `img${index + 1}`;

        // Append the image to the div
        div.appendChild(img);

        // Create a heading element for the image name
        const heading = document.createElement("h4");
        heading.textContent = image.name;
        heading.style.border = "2px solid black"; // Black border
        heading.style.backgroundColor = "black"; // Black fill
        heading.style.color = "white"; // White text
        heading.style.textAlign = "center"; // Centered text

        // Append the heading to the div
        div.appendChild(heading);

        // Append the div to the container
        container.appendChild(div);
    });
}

// Call the function to create and append image elements when the DOM content is loaded
document.addEventListener("DOMContentLoaded", createImageElements);

// Anchoring some images
const container = document.getElementById("image-container");
const imageUrls =  ["assets/images/Arya Stark.jpg", "assets/images/Bran Stark.jpg", "assets/images/Brienne of Tarth.jpg", "assets/images/Bronn.jpg", "assets/images/Catelyn Stark.jpg", "assets/images/Cersei Lannister.jpg", "assets/images/Daario Naharis.jpg", "assets/images/Daenerys Targaryen.jpg", "assets/images/Davos Seaworth.jpg", "assets/images/Eddard Ned Stark.jpg", "assets/images/Ellaria Sand.jpg", "assets/images/Gendry.jpg", "assets/images/Gilly.jpg", "assets/images/Grey Worm.jpg", "assets/images/High Sparrow.jpg", "assets/images/Jaime Lannister.jpg", "assets/images/Jaqen H ghar.jpg", "assets/images/Jeor Mormont.jpg", "assets/images/Joffrey Baratheon.jpg", "assets/images/Jon Snow.jpg", "assets/images/Jorah Mormont.jpg", "assets/images/khal drogo.jpg", "assets/images/Margaery Tyrell.jpg", "assets/images/Melisandre.jpg", "assets/images/Missandei.jpg", "assets/images/Petyr littlefinger Baelish.jpg", "assets/images/Ramsay Bolton.jpg", "assets/images/Robb Stark.jpg", "assets/images/Robert Baratheon.jpg", "assets/images/Roose Bolton.jpg", "assets/images/Samwell Tarly.jpg", "assets/images/Sandor Clegane.jpg", "assets/images/Sansa Stark.jpg", "assets/images/Shae.jpg", "assets/images/Stannis Baratheon.jpg", "assets/images/Talisa Maegyr.jpg", "assets/images/Theon Greyjoy.jpg", "assets/images/Tommen Baratheon.jpg", "assets/images/Tormund Giantbane.jpg", "assets/images/Tyrion Lannister.jpg", "assets/images/Tywin Lannister.jpg", "assets/images/Varys.jpg", "assets/images/Viserys Targaryen.jpg", "assets/images/Ygritte.jpg"];

imageUrls.forEach(url => {
    // Create anchor element
    const anchor = document.createElement("a");
    anchor.href = url;

    const img = document.createElement("img");
    img.src = url;
    img.alt = "Image";
    anchor.appendChild(img);

    // Append anchor to container
    container.appendChild(anchor);
    document.getElementById('image-container').appendChild(anchor);
});


// Function to add button functionality to all images in the image container
function addButtonFunctionality() {
    // Get all the image elements in the container
    const images = document.querySelectorAll("#image-container img");

    // Loop through each image element
    images.forEach(image => {
        // Add an event listener to each image element
        image.addEventListener("click", function() {
            // Call the getApi function when an image is clicked
            displayCharacterDetails(imageData.find(char => char.src === image.src));
            getApi();
        });
    });
}

// Call the function to add button functionality when the DOM content is loaded
//document.addEventListener("DOMContentLoaded", addButtonFunctionality);

const fetchButton = document.getElementById('fetch-button');
// Fetching data from API

const newPage = document.getElementById('new-page');
const pageContent = document.getElementById('page-content');

function getApi() {
    // event.preventDefault();

    const requestUrl = 'https://thronesapi.com/api/v2/Characters';

    fetch(requestUrl)
        .then(function (response) {
            console.log('response:', response)
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            responseData = data;
            const pageContent = document.getElementById('page-content');
            data.forEach(function (character) {
                const imageData = document.createElement('div');
                const link = document.createElement('a');
                link.textContent = character.name; // Assuming name is the property to be displayed
                link.href = character.html_url; // Assuming html_url is the property containing the URL
                pageContent.appendChild(link); // Append link to page content
                pageContent.appendChild(imageData); // Append image data to page content
            });
        });
}


// imageUrls.getElementById('img').addEventListener('click', getApi);
//fetchButton.addEventListener('click', getApi);
getApi();





// fetch request gets a list of all the repos for the node.js organization. All data lives here in the link
// const requestUrl = 'https://thronesapi.com/api/v2/Characters'w