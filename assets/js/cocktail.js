// Select the container where the cocktail data will be displayed
const cocktailContainer = document.getElementById('cocktail-container');

// Function to render a single cocktail
function renderCocktail(cocktail) {
    // Create a container for each cocktail
    const cocktailDiv = document.createElement('div');
    cocktailDiv.classList.add('cocktail');

    // Create elements for cocktail name, image, and ingredients
    const cocktailName = document.createElement('h2');
    cocktailName.textContent = cocktail.strDrink;

    const cocktailImage = document.createElement('img');
    cocktailImage.setAttribute('src', cocktail.strDrinkThumb);
    cocktailImage.setAttribute('alt', cocktail.strDrink);

    const ingredientsList = document.createElement('ul');
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];
        if (ingredient) {
            const listItem = document.createElement('li');
            listItem.textContent = `${ingredient} - ${measure || ''}`;
            ingredientsList.appendChild(listItem);
        }
    }

    // Append elements to the cocktail div
    cocktailDiv.appendChild(cocktailName);
    cocktailDiv.appendChild(cocktailImage);
    cocktailDiv.appendChild(ingredientsList);

    // Append cocktail div to the main container
    cocktailContainer.appendChild(cocktailDiv);
}

// Function to fetch cocktail data from the API
function getCocktails() {
    const requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.drinks && data.drinks.length > 0) {
                // Loop through all cocktails and render each one
                data.drinks.forEach(cocktail => renderCocktail(cocktail));
            } else {
                console.error('No drinks found.');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call the function to fetch and display the cocktail data
getCocktails();