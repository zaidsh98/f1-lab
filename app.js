/* var userName = prompt('Whats Your Name')
alert('Welcome '+ userName)

var age = prompt("Enter Your Age")
if (age >=23 && age < 30 ){
  alert("You are born in the 90's")
}
else if (age >=30 && age < 40){
alert("You are born in the 80's")
}
else{
  alert("You are old to read this")
}

*/



/*var hour = prompt('what is the clock in 24 houres ??')
if (hour >=6 && hour <12){
  alert('Good Morning')
}
else if (hour >=12 && hour < 18){
  alert('Good AfterNoon')
}
else {
alert('Good Evning')
}

confirm("is your name "+ userName + " ?")
*/

var favF1 = prompt('Whats your favourite f1 car between ferrari and mercedes')

function pickedCar(){
while (favF1 !== 'ferrari' && favF1 !== 'mercedes' ){
  favF1 = prompt('try again!')
}
}
pickedCar();

var carCount = prompt('How many times you want to see the car? ')

function countingCar(){
var image = '' 

for (var i=0;i<carCount;i++){
if (favF1 === 'ferrari'){
  image ='<img src="https://www.autosportfoto.sk/images/14ef8a9dcf5373b521ad5cbd0d7eb202.jpg">'
}else if (favF1 === 'mercedes'){
image = '<img src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2020/09/05/download-2020-09-05t200457304-883050-1599317003.png?itok=pmRFzTlD">'
}
for (var z=1;z<=carCount;z++){
document.write(image + z)
if (z===carCount){
  break;
}

}

}
}
countingCar();
 
