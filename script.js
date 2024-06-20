const makeArray = ['toyota','honda','audi','bmw','mercedes','chevrolet','ford','dodge']
const modelArray = ['camry','civic','challenger','mustang','corvette','accord','tahoe']
const yearArray = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009']
let carObjectArray = []
let allPropertiesArray = []
const button = document.querySelector('#button')
button.style.backgroundColor = 'rgb(225, 0, 0)'
button.style.color = 'rgb(100,100,100)'
button.style.cursor = 'pointer'
button.style.width = '170px'
button.style.height = '40px'


const input = document.createElement('input')
document.body.appendChild(input)
input.style.visibility = 'hidden'
input.style.marginLeft = '520px'
input.style.marginTop = '100px'
input.style.width = '300px'
input.style.height = '30px'
input.style.fontSize = '30px'
input.style.textAlign = 'center'
input.style.backgroundColor = 'rgb(100,100,100)'
input.style.color = 'rgb(225, 0, 0)'
input.type = "text"
input.placeholder= "enter answer"
const container = document.querySelector(".container");
const display = document.createElement('div');
container.appendChild(display)
display.style.visibility = 'hidden'
display.style.color = 'rgb(225,0,0)'
display.style.marginLeft = '400px'
let allPropertiesIndex1
let allPropertiesIndex2
let allPropertiesIndex3
let displayPropsArray = []
let displayProp1
let displayProp2
let displayProp3
let car
let cars
let carIndex
let displayPropsIndex1
let displayPropsIndex2
let displayPropsIndex3
let a1;
let a2;
let a3;
let gotAnswer = false;
let details = [];

const rightAnswerFX = new Audio('./assets/correct-6033.mp3')
rightAnswerFX.volume = 0.4
function rightAA () {
  rightAnswerFX.play()
}
const wrongAnswerFX = new Audio('./assets/wrong-answer-129254.mp3')
wrongAnswerFX.volume = 0.4
function wrongAA () {
  wrongAnswerFX.play()
}
const audio = new Audio('./assets/drag-racing-2-6842.mp3')
audio.volume = 0.2
function playAudio() {
  audio.play()
}

const fetchData = async () => {
let makeIndex = Math.floor(Math.random()* makeArray.length)
let modelndex = Math.floor(Math.random()* modelArray.length)
let yearIndex = Math.floor(Math.random()* yearArray.length)
let make = makeArray[makeIndex]
let model = modelArray[modelndex]
let year = yearArray[yearIndex]
let urlArray = [
 `https://api.api-ninjas.com/v1/cars?make=${make}`,
 `https://api.api-ninjas.com/v1/cars?model=${model}`,
 `https://api.api-ninjas.com/v1/cars?year=${year}`  ]
let urlIndex = Math.floor(Math.random()* urlArray.length)
const url = urlArray[urlIndex]

const response = await axios.get(url,{
headers: {'X-Api-Key': 'DH3+/u87DadarpguiemjfQ==WDiZqjnbsOWzJECV'}
})
cars = response.data

carObjectArray = [...cars]

carIndex = Math.floor(Math.random()* carObjectArray.length)
car = carObjectArray[carIndex]

for (let property in car) {
    if (property === 'make' || property === 'model' || property === 'year' || property === 'fuel_type') {
       console.log('')
    } else {
      allPropertiesArray.push(property)
    }
}
allPropertiesIndex1 =  Math.floor(Math.random()* allPropertiesArray.length)
allPropertiesIndex2 =  Math.floor(Math.random()* allPropertiesArray.length)
allPropertiesIndex3 =  Math.floor(Math.random()* allPropertiesArray.length)

displayProp1 = allPropertiesArray[allPropertiesIndex1]
displayProp2 = allPropertiesArray[allPropertiesIndex2]
displayProp3 = allPropertiesArray[allPropertiesIndex3]
a1 = car[displayProp1]
a2 = car[displayProp2]
a3 = car[displayProp3]

const escaper = document.querySelector('.escape-button')
escaper.addEventListener('click', (e) => {
         window.close();

})
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (String(input.value) === String(a1)) {
           rightAA()
          display.innerHTML = `<h2>Nice job!</h2>`
          setTimeout(() => {
            input.value = ''
          }, 1000)

        } else {
          wrongAA()
            display.innerHTML = `<h2>sorry, better luck next time!</h2>`
            setTimeout(() => {
              input.value = ''

            }, 1000)

        }
      }
   }
)

}

fetchData()

button.addEventListener('click', (e) => {
  input.style.visibility = 'visible'
   fetchData()
   displayData()
   playAudio()
   displayImage()
   removeVid()
   button.innerText = 'car loading'
   setTimeout(() => {
    button.innerText = 'Click to load next car'
   }, 500)

})

function removeVid() {
  vid = document.querySelector('video')
  if (vid) {
    document.body.removeChild(vid)
  }
}

let vid = document.createElement('video')
vid.src = './assets/135728 (720p).mp4'
vid.loop = true
vid.muted = true
vid.autoplay = true
vid.style.width = '100vw'
vid.style.height = '100vh'
vid.style.objectFit = 'cover'
document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.overflow = 'hidden'
vid.style.top = '0'
vid.style.left = '0'
vid.style.width = '100vw'
vid.style.height = '100vh'
document.body.appendChild(vid)

let img = document.createElement('img')
img.src = './assets/pexels-jay-pizzle-3802510.jpg'
img.style.visibility = 'hidden'
img.style.height = '400px'
img.style.width = '550px'
img.style.marginLeft = '400px'
document.body.appendChild(img)

function displayImage() {
  img.style.visibility = 'visible'
}

function displayData() {
  display.innerHTML = `<h2>The ${car.year} ${car.make} ${car.model}</h2>`
  setTimeout(() => {
    display.style.visibility = 'visible'
   }, 1000)
  display.style.visibility = 'hidden'
  setTimeout(() => {
   display.style.visibility = 'visible'
    display.innerHTML = `<h2>${displayProp1}: ${a1}</h2>`
 }, 2000)
  display.style.visibility = 'hidden'
  setTimeout(() => {
    display.style.visibility = 'visible'
    display.innerHTML = `<h2>${displayProp2}: ${a2}</h2>`
  }, 3000)
  display.style.visibility = 'hidden'
  setTimeout(() => {
    display.style.visibility = 'visible'
    display.innerHTML = `<h2>${displayProp3}: ${a3}</h2>`
  }, 4000)
  display.style.visibility = 'hidden'
  setTimeout(() => {
    display.style.visibility = 'visible'
    display.innerHTML =  `<h2>What was the ${displayProp1} for the ${car.year} ${car.make} ${car.model}?</h2>`
  }, 5000)
}

