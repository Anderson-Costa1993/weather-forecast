const key = "d6cf77531fd16000c016c56ec9f3df72"

function renderizaDados (dados) {
  document.querySelector(".cidade").innerHTML =  dados.name;
  document.querySelector(".temperatura").innerHTML =   Math.floor(dados.main.temp) + " C°";
  document.querySelector(".temperatura-min").innerHTML = "Min " + Math.floor(dados.main.temp_min) + "°"
  document.querySelector(".temperatura-max").innerHTML = "Max " + Math.floor(dados.main.temp_max) + "°"
  document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
  document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
  console.log(dados)
}

async function buscaCidade(city) {
const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

if (city == dados.name) {
  renderizaDados(dados)
} else {
  document.querySelector(".input-cidade").value = "São Paulo"
  return alert ('Cidade não encontrada! Respeite letras maiusculas e minusculas' )
}
}

function cliqueiNoBotao () {
  const city = document.querySelector(".input-cidade").value
  buscaCidade(city)
}


cliqueiNoBotao ()