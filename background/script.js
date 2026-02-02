var arr = [{
    team : 'CSK',
    captain : 'MSD',
    primary : '#25418A',
    secondary : 'yellow',
    trophies: '5',
    name: 'chennai super kings'
},
{
   team : 'RCB',
    captain : 'VIRAT KOHLI',
    primary : '#CF1520',
    secondary : '#1E2340',
    trophies: '1',
    name: 'Royal Challengers Bengaluru' 
},
{
    team : 'MI',
    captain : 'ROHIT SHARMA',
    primary : '#0B20C8',
    secondary : '#FDD676',
    trophies: '5',
    name: 'Mumbai Indians'
},
{
    team : 'KKR',
    captain : 'AJINKYA RAHANE',
    primary : 'purple',
    secondary : 'gold',
    trophies: '4',
    name: 'Kolkata Kinght Riders'
},
{
    team : 'SRH',
    captain : 'PAT CUMMINS',
    primary : '#F02A17',
    secondary : 'black',
    trophies: '1',
    name: 'Sunrisers Hyderabad'
},
{
    team : 'GT',
    captain : 'SHUNMAN GILL',
    primary : '#0A264C',
    secondary : 'silver',
    trophies: '1',
    name: 'Gujarat Titans'
}]

var box1 = document.querySelector('.box');
var btn = document.querySelector('button');
var main = document.querySelector('main');


btn.addEventListener('click', function(){
    var w = arr[Math.floor(Math.random() * arr.length)];

  box1.innerHTML = `
    <div style="padding:15px; color:white;">
      <h2 style="margin-bottom:10px;">${w.name}</h2>
      <p><b>Team Code:</b> ${w.team}</p>
      <p><b>Captain:</b> ${w.captain}</p>
      <p><b>Trophies:</b> ${w.trophies}</p>
      <p><b>Primary:</b> ${w.primary}</p>
      <p><b>Secondary:</b> ${w.secondary}</p>
    </div>
  `;

  box1.style.backgroundColor = w.primary;
  main.style.backgroundColor = w.secondary
})