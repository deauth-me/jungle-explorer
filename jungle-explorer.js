const jungle = document.getElementById('jungle');
const napalmButton = document.getElementById('napalm');
const regenerateButton = document.getElementById('regenerate');
const interactButton = document.getElementById('interact');

let organisms = [];

function regenerateJungle() {
  jungle.innerHTML = '';
  organisms = generateOrganisms();
  for (const organism of organisms) {
    const organismDiv = document.createElement('div');
    organismDiv.classList.add('organism');
    const organismName = document.createElement('div');
    organismName.classList.add('organism-name');
    organismName.textContent = organism.name;
    organismDiv.appendChild(organismName);
    jungle.appendChild(organismDiv);
  }
}

function generateOrganisms() {
    const organismNames = [
        'Monkey', 'Toucan', 'Elephant', 'Jaguar',
        'Bamboo', 'Banana', 'Palm', 'Mango'
      ];
    
      const generatedOrganisms = [];
    
      for (let i = 0; i < 16; i++) {
        const organismName = organismNames[Math.floor(Math.random() * organismNames.length)];
        generatedOrganisms.push({ name: organismName });
      }
    
      return generatedOrganisms;
    }
    
    function napalmEvent() {
      const survivingOrganisms = organisms.filter(organism => organism.name !== 'Bamboo' && organism.name !== 'Banana');
      organisms = survivingOrganisms;
      jungle.innerHTML = '';
    
      for (const organism of organisms) {
        const organismDiv = document.createElement('div');
        organismDiv.classList.add('organism');
        const organismName = document.createElement('div');
        organismName.classList.add('organism-name');
        organismName.textContent = organism.name;
        organismDiv.appendChild(organismName);
        jungle.appendChild(organismDiv);
      }
    }
    
    napalmButton.addEventListener('click', napalmEvent);
    regenerateButton.addEventListener('click', regenerateJungle);
    interactButton.addEventListener('click', animateInteraction);
    
    regenerateJungle();

    
    

function animateInteraction() {
  const organisms = document.querySelectorAll('.organism');
  const monkeys = document.querySelectorAll('.monkey');
  const bananas = document.querySelectorAll('.banana');
  const jaguars = document.querySelectorAll('.jaguar');

  // Monkey eats banana
  monkeys.forEach((monkey) => {
    bananas.forEach((banana) => {
      if (Math.abs(monkey.offsetLeft - banana.offsetLeft) <= 50 &&
          Math.abs(monkey.offsetTop - banana.offsetTop) <= 50) {
        banana.remove();
      }
    });
  });

  // Jaguar eats monkey
  jaguars.forEach((jaguar) => {
    monkeys.forEach((monkey) => {
      if (Math.abs(jaguar.offsetLeft - monkey.offsetLeft) <= 50 &&
          Math.abs(jaguar.offsetTop - monkey.offsetTop) <= 50) {
        monkey.remove();
      }
    });
  });
}

    
    