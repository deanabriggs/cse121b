/* W05: Programming Tasks */

/* (#3) Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {    
    temples.forEach((temple) => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = `${temple.templeName}`;
        let img = document.createElement("img");
        img.src = `${temple.imageUrl}`;
        img.alt = `Picture of ${temple.templeName} Temple`;
        
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        data = await response.json();
        console.log(data);
        templeList.push(...data);
        displayTemples(templeList);
    } else {
        console.error("Failed to fetch temples:", response.status);
    }
}

/* reset Function */
function reset(){
    document.querySelector("#temples").innerHTML = "";
}

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.getElementById("filtered").value;
    switch(filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;

        case "older":
            let determinerDate = new Date(1950, 0, 1);
            displayTemples(temples.filter(temple => Date.parse(temple.dedicated) < determinerDate));
            break;
        
        case "all":
            displayTemples(templeList);
            break;
    }
}

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});

getTemples();
