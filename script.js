let c = document.querySelector(".clock");
let d = document.querySelector(".date");
let ch = document.querySelector(".rel-hidden");
let dh = document.querySelector(".date-hidden");


setInterval(() => {
  let today = new Date();
  let hh = today.getHours();
  let mm = today.getMinutes();
  let ss = today.getSeconds();
  let date = today.toDateString();
  let day = today.getDate();
  let month = today.getMonth();
  let week = today.getDay();

  c.innerText = `${padding(hh)} : ${padding(mm)} : ${padding(ss)}`;
  d.innerText = `${getWeek(week)}`;
  ch.innerText = `${padding(hh)} : ${padding(mm)} : ${padding(ss)}`;
  dh.innerText = `${getWeek(week)}  ${padding(day)} de ${getMonth(month)}`;;
});

function padding(n) {
  return n.toString().padStart(2, "0")
}
// funcao para traduzir meses
function getMonth(month) {
  var monthName = ["Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ]
  return monthName[month];
}
// funcao para traduzir dias da semana
function getWeek(week) {
  var diasSemana = ["Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
  ]
  return diasSemana[week];
}

//Login
var objPeople = [{
  username: "Farmer",
  password: "test"
}]

//funcao de verificacao de utilizador
function getInfo() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log("O seu username: " + username + " e a password: " + password);
  for (var i = 0; i < objPeople.length; i++) {
    if (username == objPeople[i].username && password == objPeople[i].password) {
      console.log("password correta");
      enterBackPage();
    } else {
      console.log("Password Errada");
    }
  }
}

//############################ Menu depois do login #################################
function enterBackPage(){
  var a = document.getElementById("BackPage");
  var b = document.getElementById("FrontPanel")
  var img = document.getElementById("BackImage")
  a.style.display="block";
  b.style.display="none";
  img.style.display="none"
  console.log("cheguei aqui");
}
