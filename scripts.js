// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// Team`s Information
/*
  Information of the teams and players.
  For now is used const, but when trade players between teams change for let
*/
let teams = [
  { name: "Corinthians",
    players: [
    {name: "Cássio", position: "GK", hability: 34, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Walter", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "C. França", position: "GK", hability: 42, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Fagner", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Gil", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Manoel", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "D. Avelar", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "B. Mendez", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Ralf", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Jr. Urso", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Sornoza", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Pedrinho", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "M. Vital", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Clayson", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Everaldo", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Gustagol", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "M. Boselli", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "V. Love", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0}
    ], nameCoach: "Fabio Carille"
},
  { name: "Palmeiras",
    players: [
    {name: "F. Prass", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Jailson", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Weverton", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "M. Rocha", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "D.Barbosa", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Luan", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "G. Gómez", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "V. Hugo", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "F. Melo", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "B. Henrique", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Ramires", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Zé Rafael", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "G. Scarpa", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Dudu", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "L. Adriano", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Borja", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "W. Bigode", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Deyverson", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  ], nameCoach: "Mano Menezes"
},  
  { name: "São Paulo",
  players: [
  {name: "T. Volpi", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Jean", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Junior", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Juanfran", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Reinaldo", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "B. Alves", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Arboleda", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "A. Martins", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Tche Tche", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Liziero", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Hernanes", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Dani Alves", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Éverton", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Antony", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Pablo", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Raniel", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "A. Pato", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "J. Toró", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
], nameCoach: "Cuca"  
},
  { name: "Santos",
  players: [
  {name: "Vanderlei", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Everson", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "John", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "V. Ferraz", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Jorge", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "L. Veríssimo", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "G. Henrique", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "F. Aguilar", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Alisson", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "D. Pituca", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "C. Sánchez", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "J. Mota", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "C. Cueva", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Y. Solteldo", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Marinho", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "D. González", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "E. Sasha", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Kaio", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
], nameCoach: "Jorge Sampaoli"  
},
]
let indexTeam = [teams[0].name, teams[1].name, teams[2].name, teams[3].name]
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Create a new player 
class player {
  constructor(namePl, teamName){
    this.indexTeam = indexTeam.indexOf(teamName);    
    this.nameTeam = teamName;
    this.players = teams[this.indexTeam].players;
    this.nameCoach = namePl;
    this.formation = ["3-4-3", "3-5-2", "4-4-2", "4-3-3", "Select Best"]
    this.listGame = [];
  }

  //Function to choose the eleven players that will go to the match
  elevenPlayers(formation) {

    // Get only players with the same position;        
    let players__GK = this.players.filter(playerGK => playerGK.position === "GK");
    let players__DE = this.players.filter(playerDE => playerDE.position === "DE");
    let players__MF = this.players.filter(playerMF => playerMF.position === "MF");
    let players__OF = this.players.filter(playerOF => playerOF.position === "OF");
    let players__ALL = this.players.filter(playerOF => playerOF.position === "OF" || playerOF.position === "MF" || playerOF.position === "DE");
    // The Eleven Players
    // let listGame = [];
    
    switch (formation) {
      case "3-4-3":
        // Choosing the GK
        this.listGame.push(players__GK.sort((a, b) => b.hability - a.hability)[0]);
        // Choosing 3 DE
        for(let i = 0; i < 3; i++){this.listGame.push(players__DE.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 4 MF
        for(let i = 0; i < 4; i++){this.listGame.push(players__MF.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 3 AT
        for(let i = 0; i < 3; i++){this.listGame.push(players__OF.sort((a, b) => b.hability - a.hability)[i])};
        break;

      case "3-5-2":
        // Choosing the GK
        this.listGame.push(players__GK.sort((a, b) => b.hability - a.hability)[0]);
        // Choosing 3 DE
        for(let i = 0; i < 3; i++){this.listGame.push(players__DE.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 5 MF
        for(let i = 0; i < 4; i++){this.listGame.push(players__MF.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 2 AT
        for(let i = 0; i < 2; i++){this.listGame.push(players__OF.sort((a, b) => b.hability - a.hability)[i])};
        break;

      case "4-4-2":
        // Choosing the GK
        this.listGame.push(players__GK.sort((a, b) => b.hability - a.hability)[0]);
        // Choosing 4 DE
        for(let i = 0; i < 4; i++){this.listGame.push(players__DE.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 4 MF
        for(let i = 0; i < 4; i++){this.listGame.push(players__MF.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 2 AT
        for(let i = 0; i < 2; i++){this.listGame.push(players__OF.sort((a, b) => b.hability - a.hability)[i])};
        break;

      case "4-3-3":
        // Choosing the GK
        this.listGame.push(players__GK.sort((a, b) => b.hability - a.hability)[0]);
        // Choosing 4 DE
        for(let i = 0; i < 4; i++){this.listGame.push(players__DE.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 3 MF
        for(let i = 0; i < 3; i++){this.listGame.push(players__MF.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 3 AT
        for(let i = 0; i < 3; i++){this.listGame.push(players__OF.sort((a, b) => b.hability - a.hability)[i])};
        break;

      case "Select Best":
        
        this.listGame.push(players__GK.sort((a, b) => b.hability - a.hability)[0]);
        // Choosing 10 best players
        for(let i = 0; i < 10; i++){this.listGame.push(players__ALL.sort((a, b) => b.hability - a.hability)[i])};
        break;
    }    
  }

  choosePlayer(){
    // Choose one player to have a chance to score in a game
    let random10 = Math.floor(Math.random()*10);
    // Giving a probability of 50% to a OF player to score, 30% to a MF player and 20% to a DE player
    if (random10 <= 2) {
      let arrPlayer = this.listGame.filter((player) => player.position === "DE");
      if (arrPlayer.length === 0){
        let index = Math.floor(Math.random()*this.listGame.length);
        return this.listGame[index];        
      } else {
        let index = Math.floor(Math.random()*arrPlayer.length);
        return arrPlayer[index];
      }
    } else if (random10 > 2 && random10 <= 5){
      let arrPlayer = this.listGame.filter((player) => player.position === "MF");
      if (arrPlayer.length === 0){
        let index = Math.floor(Math.random()*this.listGame.length);
        return this.listGame[index];        
      } else {
        let index = Math.floor(Math.random()*arrPlayer.length);
        return arrPlayer[index];
      }
    } else {
      let arrPlayer = this.listGame.filter((player) => player.position === "OF");
      if (arrPlayer.length === 0){
        let index = Math.floor(Math.random()*this.listGame.length);
        return this.listGame[index];        
      } else {
        let index = Math.floor(Math.random()*arrPlayer.length);
        return arrPlayer[index];
      }
    }
  }
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// Create a computer
class computer {
  constructor(name) {
    this.indexTeam = indexTeam.indexOf(name);
    this.nameTeam = teams[this.indexTeam].name;
    this.players = teams[this.indexTeam].players;
    this.listGamePC = [] 
    this.player = "";
  }

  elevenPlayers(){
    // Get only players with the same position;        
    let playersPC__GK = this.players.filter(playerGK => playerGK.position === "GK");
    let playersPC__ALL = this.players.filter(playerOF => playerOF.position === "OF" || playerOF.position === "MF" || playerOF.position === "DE");
    // Choosing GK
    this.listGamePC.push(playersPC__GK.sort((a, b) => b.hability - a.hability)[0]);
    // Choosing 10 best players
    for(let i = 0; i < 10; i++){this.listGamePC.push(playersPC__ALL.sort((a, b) => b.hability - a.hability)[i])};
    return this.listGamePC;
  }  
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Choose a random player to single event
//First Thought: Giving a probability of 33% to a OF player to score, 33% to a MF player and 33% to a DE player
function choosePlayer(arr){
  //
  let listPlayerPC = arr
  // Choose one player to have a chance to score in a game
  let random10 = Math.floor(Math.random()*1000);
  //
  if (random10 <= 333) {
    let arrPlayer = listPlayerPC.filter((player) => player.position === "DE");
    if (arrPlayer.length === 0){
      let index = Math.floor(Math.random()*listPlayerPC.length);
      player = listPlayerPC[index];
      return player 
    } else {
      let index = Math.floor(Math.random()*arrPlayer.length);
      player = arrPlayer[index];
      return player;
    }

  } else if (random10 > 333 && random10 <= 333){
    let arrPlayer = listPlayerPC.filter((player) => player.position === "MF");
    if (arrPlayer.length === 0){
      let index = Math.floor(Math.random()*listPlayerPC.length);
      player = listPlayerPC[index];
      return player         
    } else {
      let index = Math.floor(Math.random()*arrPlayer.length);
      player = arrPlayer[index];
      return player;
    }

  } else {
    let arrPlayer = listPlayerPC.filter((player) => player.position === "OF");
    if (arrPlayer.length === 0){
      let index = Math.floor(Math.random()*listPlayerPC.length);
      player = listPlayerPC[index];
      return player        
    } else {
      let index = Math.floor(Math.random()*arrPlayer.length);
      player = arrPlayer[index];
      return player;
    }
  }
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Choose a random player to score
//First Thought: Giving a probability of 50% to a OF player to score, 30% to a MF player and 20% to a DE player
function choosePlayerGoal(arr){
  //
  let listPlayerPC = arr
  // Choose one player to have a chance to score in a game
  let random10 = Math.floor(Math.random()*10);
  //
  if (random10 <= 2) {
    let arrPlayer = listPlayerPC.filter((player) => player.position === "DE");
    if (arrPlayer.length === 0){
      let index = Math.floor(Math.random()*listPlayerPC.length);
      player = listPlayerPC[index];
      return player 
    } else {
      let index = Math.floor(Math.random()*arrPlayer.length);
      player = arrPlayer[index];
      return player;
    }

  } else if (random10 > 2 && random10 <= 5){
    let arrPlayer = listPlayerPC.filter((player) => player.position === "MF");
    if (arrPlayer.length === 0){
      let index = Math.floor(Math.random()*listPlayerPC.length);
      player = listPlayerPC[index];
      return player         
    } else {
      let index = Math.floor(Math.random()*arrPlayer.length);
      player = arrPlayer[index];
      return player;
    }

  } else {
    let arrPlayer = listPlayerPC.filter((player) => player.position === "OF");
    if (arrPlayer.length === 0){
      let index = Math.floor(Math.random()*listPlayerPC.length);
      player = listPlayerPC[index];
      return player        
    } else {
      let index = Math.floor(Math.random()*arrPlayer.length);
      player = arrPlayer[index];
      return player;
    }
  }
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Random of events
//Chance of nothing happens 75%, chance of a gol happens 15%, chance of yellow card happens 8%, chance of a red card happens 2%
function gameEvents(home, away, playersHome, playersAway) {
  let teamHome = home;
  let teamAway = away;
  
  //List the eleven players that will play
  let listElevenHome = playersHome;
  let listElevenAway = playersAway;

  // Score
  let homeScore = 0;
  let awayScore = 0;

  //Calculate probability of a event happens
  let probability = Math.floor(Math.random()*100);
  if (probability <= 2) {
    let chooseTeam = Math.floor(Math.random()*10);
    if (chooseTeam <= 4) {
      let player = choosePlayer(listElevenHome);
      listElevenHome = listElevenHome.slice(listElevenHome.indexOf(`${player.name}`),1)
      console.log(`${player.name} foi expulso`);
      return [teamHome, player.name, 0, 0, 1]
    } else {
      let player = choosePlayer(listElevenAway);
      listElevenAway = listElevenAway.slice(listElevenAway.indexOf(`${player.name}`),1)
      console.log(`${player.name} foi expulso`);
      return [teamAway, player.name, 0, 0, 1]
    }
  } else if (probability > 2 && probability <= 10) {
      let chooseTeam = Math.floor(Math.random()*10);
      if (chooseTeam <= 4) {        
        let player = choosePlayer(listElevenHome);
        if (player.yellowCard === 1) {
          listElevenHome = listElevenHome.slice(listElevenHome.indexOf(`${player.name}`),1)
          console.log(`${player.name} foi expulso`);
          return [teamHome, player.name, 0, 1, 1]
        } else {
          // listElevenHome[listElevenHome.indexOf(`${player.name}`)].yellowsCard = 1;
          console.log(`${player.name} levou cartão amarelo`);
          return [teamHome, player.name, 0, 1, 0]
        }
      } else {
        let player = choosePlayer(listElevenAway);
        if (player.yellowCard === 1) {
          listElevenAway = listElevenAway.slice(listElevenAway.indexOf(`${player.name}`),1)
          console.log(`${player.name} foi expulso`);
          return [teamAway, player.name, 0, 1, 1]
        } else {
          // listElevenAway[listElevenAway.indexOf(`${player.name}`)].yellowsCard = 1;
          console.log(`${player.name} levou cartão amarelo`);
          return [teamAway, player.name, 0, 1, 0]
        }
      }
  } else if (probability > 10 && probability <= 25) {
      //Calculate the average of the habilities players
      let aveHabHome = Math.floor(listElevenHome.reduce((acc, curValue) => parseInt(acc) + parseInt(curValue.hability), 0) / listElevenHome.length);
      let aveHabAway = Math.floor(listElevenAway.reduce((acc, curValue) => parseInt(acc) + parseInt(curValue.hability), 0) / listElevenHome.length);
      let probHome = 50 + (aveHabHome - aveHabAway)
      let probability = Math.floor(Math.random()*100)
      if (probability <= probHome) {
        let player = choosePlayerGoal(listElevenHome);
        // parseInt(listElevenHome[listElevenHome.indexOf(`${player.name}`)].gol) += 1;
        homeScore += 1;
        console.log(`GOL! ${player.name} é o nome do craque`);
        console.log(`${home} ${homeScore} x ${awayScore} ${away}`);
        return [teamHome, player.name, 1, 0, 0]
      } else {
        let player = choosePlayerGoal(listElevenAway);
        // parseInt(listElevenAway[listElevenAway.indexOf(`${player.name}`)].gol) += 1;
        awayScore += 1;
        console.log(`GOL! ${player.name} é o nome do craque`);
        console.log(`${home} ${homeScore} x ${awayScore} ${away}`);
        return [teamAway, player.name, 1, 0, 0]
      }     
  } else { 
      console.log("Nada ocorreu");
      return ["--", "--", 0, 0 , 0]
    }  
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// A game of 90sec with happens 90 random Game events - PC x PC
function game(home, away) {
  let teamHome = new computer(home);
  let teamAway = new computer(away);
    
  //List the eleven players that will play
  let listElevenHome = teamHome.elevenPlayers();
  let listElevenAway = teamAway.elevenPlayers();

  // Score
  let homeScore = 0;
  let awayScore = 0;

  //Table of historic Events [teamName, playerName, goal, yellow Card, redCard]
  let historyEvents = [];

  //Game Events 
  let gameTime = 0;
  let gameEvent = setInterval(function () {      
    if (gameTime < 90) {
      historyEvents.push(gameEvents(teamHome.nameTeam, teamAway.nameTeam, listElevenHome,listElevenAway));
      //Time of the game
      gameTime += 1;
      console.log(gameTime);
      //Atualization of the score
      homeScore = historyEvents.filter(goal => ((goal[0] === teamHome.nameTeam) && (goal[2] === 1))).length;
      awayScore = historyEvents.filter(goal => ((goal[0] === teamAway.nameTeam) && (goal[2] === 1))).length;
      
    } else {clearInterval(gameEvent);
      console.log(historyEvents);
      console.log(homeScore);
      console.log(awayScore);}}
      , 1000);    
  }
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game Start
// Creating components
let startGame = document.querySelector('.startGame');

//create a input with the players name
let inputName = document.createElement('input');
inputName.classList.add('inputName');
inputName.classList.add('marginBottom');

//div Cor
let corDiv = document.createElement('div');
corDiv.classList.add('divTeams');

//div Pal
let palDiv = document.createElement('div');
palDiv.classList.add('divTeams');

//div SP
let spDiv = document.createElement('div');
spDiv.classList.add('divTeams');
    
//div San
let sanDiv = document.createElement('div');
sanDiv.classList.add('divTeams');

//logo Cor
let corLogo = document.createElement('img');
corLogo.setAttribute('src','/images/logo-do-corinthians-256.png');
corLogo.classList.add('logo');

//logo Pal
let palLogo = document.createElement('img');
palLogo.setAttribute('src','/images/logo-palmeiras-256.png');
palLogo.classList.add('logo');

//logo SP
let spLogo = document.createElement('img')
spLogo.setAttribute('src','/images/logo-sao-paulo-256.png')
spLogo.classList.add('logo')

//logo San
let sanLogo = document.createElement('img')
sanLogo.setAttribute('src','/images/logo-santos-256.png')
sanLogo.classList.add('logo')

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

//Call the body
let gameSpace = document.getElementsByClassName('gameSpace');
let body = document.querySelector('.backgroundSpace');

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game Start
// Function to act on the Start Game button
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
  divTeams.appendChild(corDiv);
  corDiv.appendChild(corLogo);
  corDiv.appendChild(corButton);
  
  //Palmeiras
  divTeams.appendChild(palDiv);
  palDiv.appendChild(palLogo);
  palDiv.appendChild(palButton);
  
  //São Paulo
  divTeams.appendChild(spDiv);
  spDiv.appendChild(spLogo);
  spDiv.appendChild(spButton);
  
  //Santos
  divTeams.appendChild(sanDiv);
  sanDiv.appendChild(sanLogo);
  sanDiv.appendChild(sanButton);
  
  //Button to the next step
  divGame.appendChild(newGame);
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game Start
// Function to act on the buttons to choose a team

//Variables to know which team is active
let corActive = false;
let palActive = false;
let spActive = false;
let sanActive = false;

//Enable or disable team Cor
corDiv.onclick = function() {  
  if (corActive) {
    corActive = !corActive;
    corDiv.classList.remove('buttonActiveCor');
  } else {
    corActive = !corActive;
    palActive = false;
    spActive = false;
    sanActive = false;
    corDiv.classList.add('buttonActiveCor');
    palDiv.classList.remove('buttonActivePal');
    spDiv.classList.remove('buttonActiveSP');
    sanDiv.classList.remove('buttonActiveSan');    
  }
}

//Enable or disable team Pal
palDiv.onclick = function() {  
  if (palActive) {
    palActive = !palActive;
    palDiv.classList.remove('buttonActivePal');
  } else {
    palActive = !palActive;
    corActive = false;
    spActive = false;
    sanActive = false;
    palDiv.classList.add('buttonActivePal');
    corDiv.classList.remove('buttonActiveCor');
    spDiv.classList.remove('buttonActiveSP');
    sanDiv.classList.remove('buttonActiveSan');    
  }
}

//Enable or disable team SP
spDiv.onclick = function() {  
  if (spActive) {
    spActive = !spActive;
    spDiv.classList.remove('buttonActiveSP');
  } else {
    spActive = !spActive;
    corActive = false;
    palActive = false;
    sanActive = false;
    spDiv.classList.add('buttonActiveSP');
    corDiv.classList.remove('buttonActiveCor');
    palDiv.classList.remove('buttonActivePal');
    sanDiv.classList.remove('buttonActiveSan');    
  }
}

//Enable or disable team San
sanDiv.onclick = function() {  
  if (sanActive) {
    sanActive = !sanActive;
    sanDiv.classList.remove('buttonActiveSan');
  } else {
    sanActive = !sanActive;
    corActive = false;
    palActive = false;
    spActive = false;
    sanDiv.classList.add('buttonActiveSan');
    corDiv.classList.remove('buttonActiveCor');
    palDiv.classList.remove('buttonActivePal');
    spDiv.classList.remove('buttonActiveSP');    
  }
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game Start
// Function to act after the selection of the team
let startGame2st = newGame.onclick = function() {
  
  //Create a new player
  let playerName = inputName.value;
  function playerTeam() {
    if (corActive) {
      return "Corinthians"
    } else if (spActive) {
      return "São Paulo"
    } else if (palActive) {
      return "Palmeiras"
    } else return "Santos"
  }
  
  //Remove image, button and title from the start
  body.removeChild(gameSpace[0]);
  
  // Call the function createChampioship
  createChampioship(playerName, playerTeam())
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Team Information
//Creating components for the team information

// Create components for the game space
let divGame = document.createElement('div');
divGame.classList.add('gameSpace')

// Create components for the team information
let divTeamInfo = document.createElement("div")
let teamNameInfo = document.createElement("h1")
teamNameInfo.classList.add("h1Team")
let coachNameInfo = document.createElement("h2");
coachNameInfo.classList.add("h2Team")

//Create middle div
let divMiddle = document.createElement("div")
divMiddle.classList.add("divMiddle")

//Create components for the name of the players
let divPlayersInfo = document.createElement("div")
let playersDiv = document.createElement("div")
playersDiv.classList.add("divListInfo")
let playersList = document.createElement("ul")
playersList.classList.add("playersList")
let playerListTitle = document.createElement("li")
playerListTitle.classList.add("liTitle")
playerListTitle.innerHTML = "Jogadores"

//Create components for the position of the players
let positionDiv = document.createElement("div")
positionDiv.classList.add("divListInfoPosHab")
let positionList = document.createElement("ul")
positionList.classList.add("playersList")
let positionListTitle = document.createElement("li")
positionListTitle.classList.add("liTitle")
positionListTitle.innerHTML = "Posição"

//Create components for the hability of the players
let habilityDiv = document.createElement("div")
habilityDiv.classList.add("divListInfoPosHab")
let habilityList = document.createElement("ul")
habilityList.classList.add("playersList")
let habilityListTitle = document.createElement("li")
habilityListTitle.classList.add("liTitle")
habilityListTitle.innerHTML = "Força"

//DOM - Create components for the next game
let divMiddleRight = document.createElement("div")
divMiddleRight.classList.add("divMiddleRight")
let nextGameDiv = document.createElement("div")
let nextGameTeam = document.createElement("h2")
nextGameTeam.classList.add("h2NextOp")

//DOM - Create div for the formation
let divFormation = document.createElement("div")
let titleFormation = document.createElement("h2")
titleFormation.classList.add("h2NextOp")

//DOM - Create buttons for choose the formation
let formation1Button = document.createElement('button')
formation1Button.innerHTML = "3-4-3";
formation1Button.classList.add("formationButton")
let formation2Button = document.createElement('button')
formation2Button.innerHTML = "3-5-2";
formation2Button.classList.add("formationButton")
let formation3Button = document.createElement('button')
formation3Button.innerHTML = "4-4-2";
formation3Button.classList.add("formationButton")
let formation4Button = document.createElement('button')
formation4Button.innerHTML = "4-3-3";
formation4Button.classList.add("formationButton")
let formation5Button = document.createElement('button')
formation5Button.innerHTML = "Selecionar Melhores";
formation5Button.classList.add("formationButton")

//DOM - Create a button to start match
let newMatch = document.createElement('button')
newMatch.innerHTML = "Jogo";
newMatch.classList.add('startGame');
newMatch.classList.add('textCenter');
newMatch.classList.add('nextButColor');

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation
// Function to act on the buttons to choose a formation

//Variables to know which formation is active
let for1Active = false;
let for2Active = false;
let for3Active = false;
let for4Active = false;
let for5Active = false;

//Enable or disable formation
formation1Button.onclick = function() {  
  if (for1Active) {
    for1Active = !for1Active;
    formation1Button.classList.remove('buttonActiveForm');
  } else {
    for1Active = !for1Active;
    for2Active = false;
    for3Active = false;
    for4Active = false;
    for5Active = false;
    formation1Button.classList.add('buttonActiveForm');
    formation2Button.classList.remove('buttonActiveForm');
    formation3Button.classList.remove('buttonActiveForm');
    formation4Button.classList.remove('buttonActiveForm');
    formation5Button.classList.remove('buttonActiveForm');    
  }
}

formation2Button.onclick = function() {  
  if (for2Active) {
    for2Active = !for2Active;
    formation2Button.classList.remove('buttonActiveForm');
  } else {
    for2Active = !for2Active;
    for1Active = false;
    for3Active = false;
    for4Active = false;
    for5Active = false;
    formation2Button.classList.add('buttonActiveForm');
    formation1Button.classList.remove('buttonActiveForm');
    formation3Button.classList.remove('buttonActiveForm');
    formation4Button.classList.remove('buttonActiveForm');
    formation5Button.classList.remove('buttonActiveForm');    
  }
}

formation3Button.onclick = function() {  
  if (for3Active) {
    for3Active = !for3Active;
    formation3Button.classList.remove('buttonActiveForm');
  } else {
    for3Active = !for3Active;
    for2Active = false;
    for1Active = false;
    for4Active = false;
    for5Active = false;
    formation3Button.classList.add('buttonActiveForm');
    formation2Button.classList.remove('buttonActiveForm');
    formation1Button.classList.remove('buttonActiveForm');
    formation4Button.classList.remove('buttonActiveForm');
    formation5Button.classList.remove('buttonActiveForm');    
  }
}

formation4Button.onclick = function() {  
  if (for4Active) {
    for4Active = !for4Active;
    formation4Button.classList.remove('buttonActiveForm');
  } else {
    for4Active = !for4Active;
    for2Active = false;
    for3Active = false;
    for1Active = false;
    for5Active = false;
    formation4Button.classList.add('buttonActiveForm');
    formation2Button.classList.remove('buttonActiveForm');
    formation3Button.classList.remove('buttonActiveForm');
    formation1Button.classList.remove('buttonActiveForm');
    formation5Button.classList.remove('buttonActiveForm');    
  }
}

formation5Button.onclick = function() {  
  if (for5Active) {
    for5Active = !for5Active;
    formation5Button.classList.remove('buttonActiveForm');
  } else {
    for5Active = !for5Active;
    for2Active = false;
    for3Active = false;
    for4Active = false;
    for1Active = false;
    formation5Button.classList.add('buttonActiveForm');
    formation2Button.classList.remove('buttonActiveForm');
    formation3Button.classList.remove('buttonActiveForm');
    formation4Button.classList.remove('buttonActiveForm');
    formation1Button.classList.remove('buttonActiveForm');    
  }
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// Function to create a Player
function createPlayer(name, nameTeam) {
  return new player(name, nameTeam)
}   
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Function to create a champioship
function createChampioship(name, team) {
    
  //Create a new player    
  let player1 = createPlayer(name, team)
  console.log(player1);
    
  //DOM - Add the gaming area;
  body.appendChild(divGame)
    
  //Creating the champioship table
  let champioship = []
  
  //Updating the champioship table with the player`s team & create a player
  champioship.push({teamName: team, Command: "Player", GP: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, P: 0})
  let pcList = indexTeam.filter((nameTeam) => nameTeam !== team);
    
  //Updating the champioship table with the PC`s team & creating the PC
  let pcTeams = [];
  for (let i = 0; i < pcList.length; i++) {
    champioship.push({teamName: pcList[i], Command: "PC", GP: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, P: 0})
    pcTeams.push(new computer(pcList[i])) 
  }
  console.log(champioship);

  //Start at round 1
  let round = 1;
  let maxRound = 3;
  //Mapping of the rounds and games
  let gamesPL = [
              [[champioship[0].teamName,champioship[3].teamName], [champioship[1].teamName,champioship[2].teamName]],
              [[champioship[0].teamName,champioship[2].teamName], [champioship[1].teamName,champioship[3].teamName]],
              [[champioship[0].teamName,champioship[1].teamName], [champioship[2].teamName,champioship[3].teamName]]
              ];

  teamInformation(player1, round, gamesPL);

}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
function teamInformation(player1, round, games) {
  //DOM - adding components - Team Information
  if (player1.nameTeam === "Corinthians") {
    divTeamInfo.classList.add("divTeamInfo")
    divTeamInfo.classList.add("corColor")
  } else if (player1.nameTeam === "Palmeiras") {
    divTeamInfo.classList.add("divTeamInfo")
    divTeamInfo.classList.add("palColor")
  } else if (player1.nameTeam === "São Paulo") {
    divTeamInfo.classList.add("divTeamInfo")
    divTeamInfo.classList.add("spColor")
  } else {
    divTeamInfo.classList.add("divTeamInfo")
    divTeamInfo.classList.add("sanColor")
  }
  divGame.appendChild(divTeamInfo)
  
  //DOM - Adding information of the team
  teamNameInfo.innerHTML = player1.nameTeam;
  divTeamInfo.appendChild(teamNameInfo);
  coachNameInfo.innerHTML = "Técnico: " + player1.nameCoach;
  divTeamInfo.appendChild(coachNameInfo);

  //DOM - Creating components - Player Information
  divGame.appendChild(divMiddle)
  if (player1.nameTeam === "Corinthians") {
    divPlayersInfo.classList.add("divPlayersInfo")
    divPlayersInfo.classList.add("corColor")
  } else if (player1.nameTeam === "Palmeiras") {
    divPlayersInfo.classList.add("divPlayersInfo")
    divPlayersInfo.classList.add("palColor")
  } else if (player1.nameTeam === "São Paulo") {
    divPlayersInfo.classList.add("divPlayersInfo")
    divPlayersInfo.classList.add("spColor")
  } else {
    divPlayersInfo.classList.add("divPlayersInfo")
    divPlayersInfo.classList.add("sanColor")
  }
  divMiddle.appendChild(divPlayersInfo)

  //DOM - Adding name of the player
  divPlayersInfo.appendChild(playersDiv)
  playersDiv.appendChild(playersList)
  playersList.appendChild(playerListTitle)
  for (let i = 0; i < player1.players.length; i++) {
    let playerName = document.createElement("li");
    playerName.innerHTML = player1.players[i].name;
    playerName.classList.add("liList")
    playersList.appendChild(playerName)
  };

  //DOM - Adding position of the player
  divPlayersInfo.appendChild(positionDiv)
  positionDiv.appendChild(positionList)
  positionList.appendChild(positionListTitle)
  for (let i = 0; i < player1.players.length; i++) {
    let positionName = document.createElement("li");
    positionName.innerHTML = player1.players[i].position;
    positionName.classList.add("liList")
    positionList.appendChild(positionName)
  };

  //DOM - Adding hability of the player
  divPlayersInfo.appendChild(habilityDiv)
  habilityDiv.appendChild(habilityList)
  habilityList.appendChild(habilityListTitle)
  for (let i = 0; i < player1.players.length; i++) {
    let habilityName = document.createElement("li");
    habilityName.innerHTML = player1.players[i].hability;
    habilityName.classList.add("liList")
    habilityList.appendChild(habilityName)
  };
  
  //DOM - Adding Information of the next game
  if (player1.nameTeam === "Corinthians") {
    nextGameDiv.classList.add("divTeamInfo")
    nextGameDiv.classList.add("corColor")
  } else if (player1.nameTeam === "Palmeiras") {
    nextGameDiv.classList.add("divTeamInfo")
    nextGameDiv.classList.add("palColor")
  } else if (player1.nameTeam === "São Paulo") {
    nextGameDiv.classList.add("divTeamInfo")
    nextGameDiv.classList.add("spColor")
  } else {
    nextGameDiv.classList.add("divTeamInfo")
    nextGameDiv.classList.add("sanColor")
  }
  divMiddle.appendChild(divMiddleRight)
  divMiddleRight.appendChild(nextGameDiv)
  nextGameTeam.innerHTML = "Próximo adversário: " + games[round - 1][0][1];
  nextGameDiv.appendChild(nextGameTeam);

  //DOM - Adding Information of the formation
  if (player1.nameTeam === "Corinthians") {
    divFormation.classList.add("divFormation")
    divFormation.classList.add("corColor")
  } else if (player1.nameTeam === "Palmeiras") {
    divFormation.classList.add("divFormation")
    divFormation.classList.add("palColor")
  } else if (player1.nameTeam === "São Paulo") {
    divFormation.classList.add("divFormation")
    divFormation.classList.add("spColor")
  } else {
    divFormation.classList.add("divFormation")
    divFormation.classList.add("sanColor")
  }  
  divMiddleRight.appendChild(divFormation)
  titleFormation.innerHTML = "Selecione a formação para o próximo jogo:"
  divFormation.appendChild(titleFormation)
  divFormation.appendChild(formation1Button)
  divFormation.appendChild(formation2Button)
  divFormation.appendChild(formation3Button)
  divFormation.appendChild(formation4Button)
  divFormation.appendChild(formation5Button)

  //DOM - add button to go to the game
  divMiddleRight.appendChild(newMatch)
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>








// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// function round(){
    //   let i = 0;
    //   let cronometer = setInterval(() => {
      //     i += 1;
      //     console.log(i);     
      //     return (i)}
//      , 1000)
//   if (cronometer <= 5){clearInterval(cronometer)}
// }

// round();

// let teste = new player("Corinthians")
// let teste1 = new computer(1)
// teste.elevenPlayers("4-3-3")
// teste1.elevenPlayers()
// let cronometer = setInterval(() => game("Corinthians", "Palmeiras")
//    , 1000)
// console.log(teste1.choosePlayer())