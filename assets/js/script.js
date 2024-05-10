const characterMapping = {
    "Lord Bronn": "Jerome Flynn",

}

const actor = characterMapping["Lord Bronn"]

console.log("Actor is:", actor)

//<img src="" data-character="Lord Bronn" />



function getApi() {
    // fetch request gets a list of all the repos for the node.js organization. All data lives here in the link
    const requestUrl = 'https://thronesapi.com/api/v2/Characters';


    //fetch is a inbuilt javascript library. fetch gets data from the requestURL
    fetch(requestUrl)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

// 1. character mapping (Laxmi)
// 2. make actor api work pass in the actors, to handle the response. 
// 