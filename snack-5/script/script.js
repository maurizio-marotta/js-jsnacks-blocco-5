// *SNACK 5*
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bikes = [
  
  {
    name : 'bmx',
    peso : 15,
  },

  {
    name : 'triciclo',
    peso : 9,
  },

  {
    name : 'bici',
    peso : 7,
  },

  {
    name : 'tandem',
    peso : 25,
  },

  {
    name : 'minibici',
    peso : 3,
  },
]

// Troviamo la bici più leggera

const bikesDot = bikes.sort(function(a, b){return a.peso-b.peso})
console.log(bikesDot);

const {name, peso} = bikes[0];
console.log(name, peso, bikes[0]);

const message = `La bici da corsa più leggera è la ${name} che pesa ${peso}kg`
console.log(message);