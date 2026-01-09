let button = document.querySelector('.search button')
let inputBox = document.querySelector('.search input')
let tempHeading = document.querySelector('.weather h1')
let cityHeading = document.querySelector('.weather h2')
let humanityText = document.querySelector('.humidity')
let windText = document.querySelector('.wind')
let  weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){ 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2c170b49e8fd1c63cd8d967eb48a0a43`)
    let data = await response.json()
    console.log(data)
    tempHeading.textContent = Math.round(data.main.temp) +'℃'
    cityHeading.textContent = data.name
    humanityText.textContent = data.main.humidity + '%'
    windText.textContent = data.wind.speed + 'km/hr'
    
    
let weatherStatus = data.weather[0].main
if(weatherStatus === 'Clouds'){
    weatherIcon.setAttribute('src','images/clouds.png')
}else if(weatherStatus === 'Clear'){
    weatherIcon.setAttribute('src','images/clear.png')
} else if(weatherStatus === 'Drizzle'){
    weatherIcon.setAttribute('src','images\drizzle.png')
}
}

button.addEventListener('click', function(){
    checkWeather(inputBox.value)
    console.log("Hello")
})