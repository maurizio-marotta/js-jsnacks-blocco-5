const studenti = [
  
  {
    firstname : 'francesco',
    lastname  : 'totti',
    matricola : 10, 
    voti      : [ 1,2,2,1 ]
  },

  {
    firstname : 'ciro',
    lastname  : 'immobile',
    matricola : 17, 
    voti      : [ 5,6,7,8, ]
  },

  {
    firstname : 'gian',
    lastname  : 'buffon',
    matricola : 46, 
    voti      : [ 7,3,5,8 ]
  },

  {
    firstname : 'giorgio',
    lastname  : 'chiellini',
    matricola : 16, 
    voti      : [ 4,8,9,2 ]
  },

  {
    firstname : 'fabio',
    lastname  : 'cannavaro',
    matricola : 56, 
    voti      : [ 6,2,5,9 ]
  },

  {
    firstname : 'leonadro',
    lastname  : 'bonucci',
    matricola : 77, 
    voti      : [ 5,8,3,10 ]
  },
]

const studentiNuovo = studenti.map((studente, voti) => {
  const object = {
    completeName : `${studente.firstname} ${studente.lastname}`,
    matricola : studente.matricola,
    mediaVoto : mediaVoti(studente.voti),
  }
  return object;
})

console.log(studentiNuovo);

// FUNCTIONS

function mediaVoti (voti){
  let somma = 0
  for (let voto of voti){
    somma += voto;
  }

  const media = (somma / voti.length).toFixed(2);
  return media;
}