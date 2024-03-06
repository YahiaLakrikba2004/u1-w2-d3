const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 277,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: 96,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Owen Lars',
    height: 178,
    mass: 120,
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    name: 'Beru Whitesun lars',
    height: 165,
    mass: 75,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
  },
  {
    name: 'R5-D4',
    height: 97,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
  },
  {
    name: 'Biggs Darklighter',
    height: 183,
    mass: 84,
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
]

/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/

/*let charactersNames = []

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "charactersNames" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
const charactersNames = []

for (const character of starWarsCharacters) {
  charactersNames.push(character.name)
}

console.log(charactersNames)

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/
const femaleCharacters = starWarsCharacters.filter(
  (character) => character.gender === 'female'
)
const femaleNames = femaleCharacters.map((character) => character.name)

console.log(femaleNames)

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

const eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  'blue-gray': [],
}

console.log(eyeColor)

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
for (const character of starWarsCharacters) {
  switch (character.eye_color) {
    case 'blue':
      eyeColor.blue.push(character)
      break
    case 'yellow':
      eyeColor.yellow.push(character)
      break
    case 'brown':
      eyeColor.brown.push(character)
      break
    case 'red':
      eyeColor.red.push(character)
      break
    case 'blue-gray':
      eyeColor['blue-gray'].push(character)
      break
    default:
      // Handle any other eye colors here (if needed)
      break
  }
}

console.log(eyeColor)
/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
/*let crewMass = 0
let index = 0

while (index < starWarsCharacters.length) {
  crewMass += starWarsCharacters[index].mass
  index++
}

console.log('Total crew mass:', crewMass, 'kg')

/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
// Calcolo della massa totale dell'equipaggio
let crewMass = 0
for (const character of starWarsCharacters) {
  crewMass += character.mass
}

// Verifica della tipologia di carico
if (crewMass < 500) {
  console.log('Ship is under loaded')
} else if (crewMass >= 500 && crewMass < 700) {
  console.log('Ship is half loaded')
} else if (crewMass >= 700 && crewMass < 900) {
  console.log('Warning: Load is over 700')
} else if (crewMass >= 900 && crewMass < 1000) {
  console.log('Critical Load: Over 900')
} else {
  console.log('DANGER! OVERLOAD ALERT: escape from ship now!')
}

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/
// Create a new array to store modified characters
const updatedCharacters = []

for (const character of starWarsCharacters) {
  // Check if gender is "n/a" and update it to "robot"
  if (character.gender === 'n/a') {
    updatedCharacters.push({ ...character, gender: 'robot' })
  } else {
    updatedCharacters.push(character)
  }
}

console.log(updatedCharacters)

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/

const uniqueNames = []

for (const name of charactersNames) {
  if (!uniqueNames.includes(name)) {
    uniqueNames.push(name)
  }
}

console.log('Original charactersNames length:', charactersNames.length)
console.log('Unique charactersNames length:', uniqueNames.length)

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
// Array di personaggi di Star Wars
/*const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 277,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  // ... altri personaggi ...
]

// Funzione per selezionare casualmente un personaggio
function selectRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * starWarsCharacters.length)
  return starWarsCharacters[randomIndex]
}

// Esegui la funzione e stampa le proprietà del personaggio selezionato
const randomCharacter = selectRandomCharacter()
console.log(`Il personaggio selezionato è ${randomCharacter.name}.`)
console.log(`Altezza: ${randomCharacter.height} cm`)
console.log(`Peso: ${randomCharacter.mass} kg`)
console.log(`Colore dei capelli: ${randomCharacter.hair_color}`)
console.log(`Colore della pelle: ${randomCharacter.skin_color}`)
console.log(`Colore degli occhi: ${randomCharacter.eye_color}`)
console.log(`Anno di nascita: ${randomCharacter.birth_year}`)
console.log(`Genere: ${randomCharacter.gender}`)*/
