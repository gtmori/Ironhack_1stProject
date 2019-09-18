
  let startGame = document.querySelector('.startGame');

  //create a input with the players name
  let inputName = document.createElement('input');
  inputName.classList.add('inputName');
  inputName.classList.add('marginBottom');

  //button Cor
  let corButton = document.createElement('button');
  corButton.innerHTML = "Corinthians";
  corButton.classList.add('buttonTeam');
  corButton.classList.add('corColor');
  //button Pal
  let palButton = document.createElement('button');
  palButton.innerHTML = "Palmeiras";
  palButton.classList.add('buttonTeam');
  palButton.classList.add('palColor');
  //button SP
  let spButton = document.createElement('button')
  spButton.innerHTML = "São Paulo";
  spButton.classList.add('buttonTeam');
  spButton.classList.add('spColor');
  //button San
  let sanButton = document.createElement('button')
  sanButton.innerHTML = "Santos";
  sanButton.classList.add('buttonTeam');
  sanButton.classList.add('sanColor');
  //Button Next
  let newGame = document.createElement('button')
  newGame.innerHTML = "Next";
  newGame.classList.add('startGame');
  newGame.classList.add('textCenter');
  newGame.classList.add('nextButColor');

startGame.onclick = function() {

  //Remove image, button and title from the start
  let startSpace = document.getElementsByClassName('startSpace');
  let body = document.querySelector('.backgroundSpace');
  body.removeChild(startSpace[0]);

  //Add the gaming area;
  let divGame = document.createElement('div');
  divGame.classList.add('gameSpace')
  body.appendChild(divGame)

  // Add title asking the players name; 
  let h2TagName = document.createElement('h2');
  h2TagName.classList.add('titleBegin');
  h2TagName.innerHTML = "Olá professor(a), qual o seu nome?";
  divGame.appendChild(h2TagName);

  //Add Input to colect the name;
  divGame.appendChild(inputName);

  // Add title asking the whick team he choose; 
  let h2TagTeam = document.createElement('h2');
  h2TagTeam.classList.add('titleBegin');
  h2TagTeam.innerHTML = "Qual time gostaria de treinar?";
  h2TagTeam.classList.add('marginBottom');
  divGame.appendChild(h2TagTeam);

  // Add buttons to select teams
  let divTeams = document.createElement('div');
  divTeams.classList.add('divTeams');
  divTeams.classList.add('marginBottom');
  divGame.appendChild(divTeams);

  //Corinthians
  let corDiv = document.createElement('div');
  corDiv.classList.add('divTeams');
  divTeams.appendChild(corDiv);

  let corLogo = document.createElement('img');
  corLogo.setAttribute('src','/images/logo-do-corinthians-256.png');
  corLogo.classList.add('logo');
  corDiv.appendChild(corLogo);
  corDiv.appendChild(corButton);

  //Palmeiras
  let palDiv = document.createElement('div');
  palDiv.classList.add('divTeams');
  divTeams.appendChild(palDiv);

  let palLogo = document.createElement('img');
  palLogo.setAttribute('src','/images/logo-palmeiras-256.png');
  palLogo.classList.add('logo');
  palDiv.appendChild(palLogo);
  palDiv.appendChild(palButton);

  //São Paulo
  let spDiv = document.createElement('div');
  spDiv.classList.add('divTeams');
  divTeams.appendChild(spDiv);

  let spLogo = document.createElement('img')
  spLogo.setAttribute('src','/images/logo-sao-paulo-256.png')
  spLogo.classList.add('logo')
  spDiv.appendChild(spLogo);
  spDiv.appendChild(spButton);

  //Santos
  let sanDiv = document.createElement('div');
  sanDiv.classList.add('divTeams');
  divTeams.appendChild(sanDiv);

  let sanLogo = document.createElement('img')
  sanLogo.setAttribute('src','/images/logo-santos-256.png')
  sanLogo.classList.add('logo')
  sanDiv.appendChild(sanLogo);
  sanDiv.appendChild(sanButton);

  //Button to the next step
  divGame.appendChild(newGame);
}

newGame.onclick = function() {

  
  //Remove image, button and title from the start
  let gameSpace = document.getElementsByClassName('gameSpace');
  let body = document.querySelector('.backgroundSpace');
  body.removeChild(gameSpace[0]);

  //Add the gaming area;
  let divGame = document.createElement('div');
  divGame.classList.add('gameSpace')
  body.appendChild(divGame)
}