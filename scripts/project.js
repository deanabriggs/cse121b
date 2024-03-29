/* ChatGPT was used to help identify issues and figure out some code concepts to apply to this project */
const myApiNinjaKey = "B6Fj6jjEGtwbShQAek5TtQ==2EVLcZjpyptQs0w3";
const dogDetail = [];
const dogNameList = [];
const breedsNameData = [];

const dogsElement = document.querySelector('#dogs');
const shed = document.getElementById('shed');
const coat = document.getElementById('coat');
const groom = document.getElementById('groom');
const drool = document.getElementById('drool');
const nprotect = document.getElementById('nprotect');
const nplay = document.getElementById('nplay');
const ntrain = document.getElementById('ntrain');
const nenergy = document.getElementById('nenergy');
const nbark = document.getElementById('nbark');
const kids = document.getElementById('kids');
const otherDogs = document.getElementById('otherDogs');
const strange = document.getElementById('stranger');
const protect = document.getElementById('protect');
const play = document.getElementById('play');
const train = document.getElementById('train');
const energy = document.getElementById('energy');
const bark = document.getElementById('bark');

const getBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    if (!response.ok) {
        throw new Error(`Failed to fetch breeds: ${response.status}`);
    }
    const data = await response.json();

    for (const breedName in data.message) {
        const breedTypes = data.message[breedName];

        if(!dogNameList.includes(breedName)) {
            dogNameList.push(breedName.trim());
        }

        if (breedTypes.length !== 0) {
            breedTypes.forEach(subBreed => {
                let fullName = `${subBreed.trim() + " " + breedName.trim()}`;
                if (!dogNameList.includes(fullName)) {
                    dogNameList.push(fullName);
                }
            });
        }
    }
    getDogDetails(dogNameList);
};

const getDogDetails = async (breeds) => {
    await Promise.all(breeds.map(async (dogName) => {
        const response = await fetch('https://api.api-ninjas.com/v1/dogs?&name=' + dogName, {
            headers: {'X-Api-Key': myApiNinjaKey}
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const dogInfo = await response.json();
        if (dogInfo && dogInfo.length > 0) {
            dogInfo.forEach(dog => {
                const {name, ...traits} = dog;
                const newDog = {[name]: traits};

                if (!dogDetail.some(existingDog => Object.keys(existingDog)[0] === name)) {
                    dogDetail.push(newDog);
                }
            });
        } 
    }));
    displayDogs(dogDetail);
};

const filterDogs = (dogData) => {
    document.querySelector("#dogs").innerHTML = "";
    const filteredDogs = dogData.filter(dog => {
        const traits = Object.values(dog)[0];
        return (
            (!shed.checked || parseInt(traits.shedding) < 3) &&
            (!coat.checked || parseInt(traits.coat_length) < 3) &&
            (!groom.checked || parseInt(traits.grooming) < 3) &&
            (!drool.checked || parseInt(traits.drooling) < 3) &&
            (!nprotect.checked || parseInt(traits.protectiveness) < 3) &&
            (!nplay.checked || parseInt(traits.playfulness) < 3) &&
            (!ntrain.checked || parseInt(traits.trainability) < 3) &&
            (!nenergy.checked || parseInt(traits.energy) < 3) &&
            (!nbark.checked || parseInt(traits.barking) < 3) &&
            (!kids.checked || parseInt(traits.good_with_children) > 3) &&
            (!otherDogs.checked || parseInt(traits.good_with_other_dogs) > 3) &&
            (!strange.checked || parseInt(traits.good_with_strangers) > 3) &&
            (!protect.checked || parseInt(traits.protectiveness) > 3) &&
            (!play.checked || parseInt(traits.playfulness) > 3) &&
            (!train.checked || parseInt(traits.trainability) > 3) &&
            (!energy.checked || parseInt(traits.energy) > 3) &&
            (!bark.checked || parseInt(traits.barking) > 3)
        )
    });
    displayDogs(filteredDogs);
};

const displayDogs = async (filteredData) => {

    filteredData.sort((a, b) => {
        const dogNameA = Object.keys(a)[0];
        const dogNameB = Object.keys(b)[0];
        return dogNameA.localeCompare(dogNameB);
    })

    filteredData.forEach((dogInfo) => {
        let dogName = Object.keys(dogInfo)[0];
        let dt = dogInfo[dogName];

        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = `${dogName}`
        let img = document.createElement("img");
        img.src = `${dt.image_link}`;
        img.alt = `Picture of ${dogName}`;
        
        let p1 = document.createElement("p");
        let life = `Life: ${dt.min_life_expectancy}-${dt.max_life_expectancy}`;
        let weight = `Weight: ${dt.min_weight_female}-${dt.max_weight_male}`;
        let height = `Height: ${dt.min_height_female}-${dt.max_height_male}`;
        p1.textContent = life + ` | ` + weight + ` | ` + height;

        let p2 = document.createElement("p");
        let shed = `Shed: ${dt.shedding}`;
        let coat = `Coat Lgth: ${dt.coat_length}`;
        let groom = `Groom: ${dt.grooming}`;
        let drool  = `Drool: ${dt.drooling}`;
        p2.textContent = shed + ` | ` + coat + ` | ` + groom + ` | ` + drool;

        let p3 = document.createElement("p");
        let kids = `Kids: ${dt.good_with_children}`;
        let dogs = `Other Dogs: ${dt.good_with_other_dogs}`;
        let strangers = `Stangers: ${dt.good_with_strangers}`;
        let protect = `Protect: ${dt.protectiveness}`;
        p3.textContent = kids + ` | ` + dogs + ` | ` + strangers + ` | ` + protect;
        
        let p4 = document.createElement("p");
        let play = `Playful: ${dt.playfulness}`;
        let train = `Trainable: ${dt.trainability}`;
        let energy = `Energy: ${dt.energy}`;
        let bark = `Bark: ${dt.barking}`;
        p4.textContent = play + ` | ` + train + ` | ` + energy + ` | ` + bark;
        
        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);
        dogsElement.appendChild(article);
    });
};

shed.addEventListener("change", () => filterDogs(dogDetail));
coat.addEventListener("change", () => filterDogs(dogDetail));
groom.addEventListener("change", () => filterDogs(dogDetail));
drool.addEventListener("change", () => filterDogs(dogDetail));
nbark.addEventListener("change", () => filterDogs(dogDetail));
nprotect.addEventListener("change", () => filterDogs(dogDetail));
nplay.addEventListener("change", () => filterDogs(dogDetail));
ntrain.addEventListener("change", () => filterDogs(dogDetail));
nenergy.addEventListener("change", () => filterDogs(dogDetail));
kids.addEventListener("change", () => filterDogs(dogDetail));
otherDogs.addEventListener("change", () => filterDogs(dogDetail));
strange.addEventListener("change", () => filterDogs(dogDetail));
protect.addEventListener("change", () => filterDogs(dogDetail));
play.addEventListener("change", () => filterDogs(dogDetail));
train.addEventListener("change", () => filterDogs(dogDetail));
energy.addEventListener("change", () => filterDogs(dogDetail));
bark.addEventListener("change", () => filterDogs(dogDetail));

getBreeds();
getDogDetails(dogNameList);
