// import functions and grab DOM elements

const animals = [ 
    { id: '1',
        name:'Dog',
        img:'./assets/alchemy-logo.png',
        description: 'Cutest things in the world'
    },
    { id: '2',
        name: 'Elephant',
        img: './assets/alchemy-logo.png',
        description: 'Big Cuties'
    },
    { id: '3',
        name: 'Zebra',
        img: './assets/alchemy-logo.png',
        description: 'Cool skin'
    }
];

const animalContainer = document.getElementById('animal-container');

function render(animal) {
    const animalCard = document.createElement('div');
    animalCard.classList.add('card');
    const animalName = document.createElement('h2');
    animalName.textContent = animal.name;
    const animalImage = document.createElement('img');
    animalImage.src = animal.img;
    const animalDescript = document.createElement('p');
    animalDescript.textContent = animal.description;
    animalCard.append(animalName, animalImage, animalDescript);
    return animalCard;
}

for (let booger of animals) {
    const animalElements = render(booger);
    animalContainer.appendChild(animalElements);
}



// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
