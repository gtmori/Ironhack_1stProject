/*
  Information of the teams and players.
  For now is used const, but when trade players between teams change for let
*/
let teams = [
  { name: "Corinthians",
    players: [
    {name: "Cássio", position: "GK", hability: 34, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Walter", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Caique França", position: "GK", hability: 42, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Fagner", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Gil", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Manoel", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Danilo Avelar", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Bruno Mendez", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Ralf", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Jr. Urso", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Sornoza", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Pedrinho", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Mateus Vital", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Clayson", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Everaldo", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Gustagol", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Mauro Boselli", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Vagner Love", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0}
    ], nameCoach: "Fabio Carille"
  },

  { name: "Palmeiras",
    players: [
    {name: "F. Prass", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Jailson", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Weverton", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Marcos Rocha", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Diogo Barbosa", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Luan", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "G. Gómez", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Vitor Hugo", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Felipe Melo", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "B. Henrique", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Ramires", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Zé Rafael", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "G. Scarpa", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Dudu", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Luiz Adriano", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Borja", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Willian Bigode", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
    {name: "Deyverson", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  ], nameCoach: "Mano Menezes"
  },
  
  { name: "São Paulo",
  players: [
  {name: "Tiago VOlpi", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Jean", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Junior", position: "GK", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Juanfran", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Reinaldo", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Bruno Alves", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Arboleda", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "A. Martins", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Tche Tche", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Liziero", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Hernenes", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
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
  {name: "Victor Ferraz", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Jorge", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Lucas Veríssimo", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Gustavo Henrique", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Felipe Aguilar", position: "DE", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Alisson", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Diego Pituca", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Carlos Sánchez", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Jean Mota", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "C. Cueva", position: "MF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Y. Solteldo", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Marinho", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Derlis González", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "E. Sasha", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
  {name: "Kaio", position: "OF", hability: 50, redCard: 0, yellowCard: 0, gols: 0},
], nameCoach: "Jorge Sampaoli"  
},
]

module.exports = teams;