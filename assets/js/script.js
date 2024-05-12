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
    let container = document.getElementById("image-container");
    imageData.forEach(function(image) {
        let div = document.createElement("div");
        div.classList.add("item");

        let img = document.createElement("img");
        img.src = image.src;
        img.alt = image.name;

        let h4 = document.createElement("h4");

         // Create an anchor tag for the name
        let anchor = document.createElement("a");
        anchor.href = "#" + image.name.toLowerCase(); // Link to an element with the same id as the name
        anchor.textContent = image.name;


        // Append the anchor tag to the h4 element
        h4.appendChild(anchor);
        div.appendChild(img);
        div.appendChild(h4);
        container.appendChild(div);
    });
}

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
const imageUrls = ["assets/images/Arya Stark.jpg", "assets/images/Bran Stark.jpg", /* add more image URLs */ ];

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
});

// Fetching data from API
function getApi(event) {
    event.preventDefault();
    const requestUrl = 'https://thronesapi.com/api/v2/Characters';
    fetch(requestUrl)
        .then(function(response) {
            console.log('response:', response);
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            const container = document.getElementById("image-container");

            data.forEach((box, index) => {
                const createTableRow = document.createElement('div');
                const tableData = document.createElement('div');
                const link = document.createElement('a');

                link.textContent = box.html_url;
                link.href = box.html_url;

                tableData.appendChild(link);
                createTableRow.appendChild(tableData);
                container.appendChild(createTableRow);
            });
        });
}

// Attach click event listener to the element with id 'imageUrl'
const imageUrl = document.getElementById('imageUrl');
imageUrl.addEventListener('click', getApi);



// fetch request gets a list of all the repos for the node.js organization. All data lives here in the link
const requestUrl = 'https://thronesapi.com/api/v2/Characters'
// fetch request gets a list of all the repos for the node.js organization. All data lives here in the link
// const requestUrl = 'https://thronesapi.com/api/v2/Characters'w