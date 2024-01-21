const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random Picture");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121b";
newSection.appendChild(newH2)
const newPara2 = document.createElement('p2');
newPara2.innerText = "Welcome to Javascript Language";
newSection.appendChild(newPara2);
document.body.appendChild(newSection);

const newSec2 = document.createElement("section2");
newSec2.innerHTML = "<h2>Easier Way</h2><p>I'll use this style to code</p>";
document.body.appendChild(newSec2);