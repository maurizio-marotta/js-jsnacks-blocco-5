const utenti = [
  
  {
    firstname : 'Mario',
    lastname  : 'balotelli',
    age       : 23, 
  },

  {
    firstname : 'francesco',
    lastname  : 'totti',
    age       : 27, 
  },

  {
    firstname : 'giorgio',
    lastname  : 'chiellini',
    age       : 57, 
  },

  {
    firstname : 'leonardo',
    lastname  : 'bonucci',
    age       : 68, 
  },

  {
    firstname : 'gian',
    lastname  : 'buffon',
    age       : 75, 
  },

  {
    firstname : 'ciro',
    lastname  : 'immobile',
    age       : 33, 
  },
]

const minorenni = utenti.filter((utente) => (utente.age < 18));
console.log(minorenni);

const over65 = utenti.filter((utente) => (utente.age > 65));
console.log(over65);
