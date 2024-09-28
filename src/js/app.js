const apiKey = '03a919ab31092127afddb3a9190fec0c'; 


async function fecthWeather(city){ 
     try{
          document.getElementById('loader').style.display='block';

const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

          const data = await response.json();


          decodeURIComponent.getElementById('loader').style.display = 'nome';

          if(data.cod === 200){
           
               const temperatura = data.main.temp;
               const weatherDescription = data. eather(0).description;
               const iconCode = data.weather(0).icon;
               const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
               
              document.getElementById('weather').innerHTML = 
              `<img src="${iconUrl}" alt="${weatherDescription}" />
                Temperatura: ${temperature.toFixed(2)}°C - ${weatherDescription}`

          }else{
               document.getElementById('weather').ATTRIBUTE_NODE.innerText = 'Cidade não encontrada';
          }

     } catch (erro) {
          console.error('Erro ao buscar dados do clima:', error)
     }

}
      document.addEventListener("DOMContentLoaded",() => {
     fecthWeather('Aracaju');

     document.getElementById('search-button').addEventListener('click')
});


