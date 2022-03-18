import "../scss/main.scss";
import { fetchRecipes } from "./fetchRecipe";
import { lightIcon, darkIcon } from "./icons"

class Render {
    constructor(_targetID) {
        this.targetID = _targetID;
        this.target = this.getTargetElement();
    }

    getTargetElement() {
        return document.getElementById(this.targetID);
    }

    injectContent(content) {
        this.target.innerHTML += content;
    }
}

const getRecipeCard = ({ recipeTitle, recipeImg, recipeDescription, recipeURL }) => {

    var title = recipeTitle
    var description = recipeDescription

    if (recipeTitle.length > 20) {
        title = recipeTitle.substring(0, 20) + "...";
    }

    if (recipeDescription.length > 50) {
        description = recipeDescription.substring(0, 50) + "...";
    }

    return `
		<div class="col">
			<div class="card shadow">
				<img
					src="${recipeImg}" width="90" height="200"
					class="card-img-top"
				/>
				<div class="card-body">
					<h5 class="card-title">
						${title}
					</h5>
					<p class="card-text">
						${description}
					</p>
					<a target="_blank" href="${recipeURL}" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
	`;
};

const renderRecipes = async () => {
    const recipes = await fetchRecipes();

    const recipeCards = recipes.map((recipe) => {
        return getRecipeCard({
            recipeTitle: recipe.post_title,
            recipeImg: recipe.post_img_url_src,
            recipeDescription: recipe.post_description,
            recipeURL: recipe.post_url
        });
    });

    console.log(recipeCards);

    const renderer = new Render("recipeContainer");
    renderer.injectContent(recipeCards.join(" "));
};

renderRecipes();

const lightThemeToggler = document.getElementById("toggleLight")
const darkThemeToggler = document.getElementById("toggleDark")

var theme = localStorage.getItem("theme")

if (theme === null) {
    localStorage.setItem("theme", "light")
    theme = "light"

    document.getElementById("toggleLight").style.display = "none"
}

if (theme === "dark") {
    const bodyElement = document.body

    bodyElement.classList.toggle("dark-mode")

    document.body.classList.toggle("dark-mode")
    document.getElementById("toggleLight").style.display = "none"
} else {
    const bodyElement = document.body

    bodyElement.classList.toggle("dark-mode")

    document.body.classList.toggle("light-mode")
    document.getElementById("toggleDark").style.display = "none"
}

lightThemeToggler.addEventListener("click", () => {
    const bodyElement = document.body

    localStorage.setItem("theme", "light")

    bodyElement.classList.toggle("light-mode")

    document.getElementById("toggleDark").style.display = "block"
    document.getElementById("toggleLight").style.display = "none"
})

darkThemeToggler.addEventListener("click", () => {
    const bodyElement = document.body

    localStorage.setItem("theme", "dark")

    bodyElement.classList.toggle("dark-mode")

    document.getElementById("toggleDark").style.display = "none"
    document.getElementById("toggleLight").style.display = "block"
})










// Check if "theme" exists in localStorage
    // If theme is null, set it to "light"
    // change display property of toggleLight to none

// If theme is light
    // Change display property of toggleLight to none

// If theme dark
    //  Change display property of toggleDark to none


// When toggleLight is clicked
    // Change display property of toggleLight to none
    // Change display property of toggleDark to block
    // Change body class to light-mode
    // Set theme to "light" in localStorage

// When toggleDark is clicked
    // Change display property of toggleDark to none
    // Change display property of toggleLight to block
    // Change body class to dark-mode
    // Set theme to "dark" in localStorage