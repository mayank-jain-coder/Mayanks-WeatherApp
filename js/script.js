const apiKey = "5ee32ffc2e05e4a41f1549a1a8b4a2c2";

document.getElementById("searchBtn").addEventListener("click", () => {
    const city=document.getElementById("cityInput").value;
    if(city){
        getWeather(city);
    }else{
        alert("Please enter a city name")
    }
});

async function getWeather(city) {
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const response=await fetch(url);
        const data=await response.json();

        if(data.cod===200){
            document.getElementById("result").innerHTML=`
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}℃</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        }else{
            document.getElementById("result").innerHTML=`<p>City not found!!</p>`;
        }
    }catch(error){
        document.getElementById("result").innerHTML=`<p>Error while fetching data!!</p>`;
    }
}