
//Print only even numbers
var array= [1, 2, 3, 4, 5, 6];


var evenNumberS = array.filter(function(number){

	return number%2==0; 

});

console.log(evenNumberS);


//Square the Numbers 

var array= [1, 2, 3, 4, 5, 6];
var SquareNumbers = array.map(function(x){
	return x * x; 

});

console.log(SquareNumbers);

//Cities 1
var cities = [
{name: 'Los Angeles', temperature: 60.0},
{name: 'Atlanta', temperature: 52.0},
{name: 'Detroit', temperature: 48.0},
{name: 'New York', temperature: 80.0 }

];

var lowerTemperature = cities.filter(function(currentTemperature){
	return currentTemperature.temperature < 70.0; 

});

console.log(lowerTemperature)

//Cities 2
// var cityNames = cities.filter(function(names){
// 	return names.name[0]; 

cities.indexOf(0);

if (cities.indexOf()=== 'name:') {

};
