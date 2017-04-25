var range = 40;
var currentNumber = 0;
var numbersInPlay = [0];

var generateRandomNumber = function() {
  var number = 0;
  if (numbersInPlay.length === range + 1) {
    // Do nothing
  }
  else {
    while (numbersInPlay.includes(number)) {
      number = Math.floor(Math.random() * range) + 1;
    };
    numbersInPlay.push(number)
    return number;
  }
};

var numberToString = function(number) {
  var numberString = "";
  if (number <= 10) {
		switch((number).toString()) {
      case '1':
        numberString = "one";
        break;
      case '2':
        numberString = 'two';
        break;
      case '3':
        numberString = 'three';
        break;
      case '4':
        numberString = 'four';
        break;
      case '5':
        numberString = 'five';
        break;
      case '6':
        numberString = 'six';
        break;
      case '7':
        numberString = 'seven';
        break;
      case '8':
        numberString = 'eight';
        break;
      case '9':
        numberString = 'nine';
        break;
      case '10':
        numberString = 'ten';
        break;
      }
  }
  else {
    switch(Math.floor(number / 10).toString()) {
      case '1':
        switch(number.toString()) {
        	case '11':
          	return 'eleven';
          case '12':
          	return 'twelve';
          case '13':
          	return 'thirteen';
          case '14':
          	return 'fourteen';
          case '15':
          	return 'fifteen';
          case '16':
          	return 'sixteen';
          case '17':
          	return 'seventeen';
          case '18':
          	return 'eighteen';
          case '19':
          	return 'nineteen';
        }
        break;
      case '2':
        numberString += 'twenty';
        break;
      case '3':
        numberString += 'thirty';
        break;
      case '4':
        numberString += 'forty';
        break;
      case '5':
        numberString += 'fifty';
        break;
      case '6':
        numberString += 'sixty';
        break;
      case '7':
        numberString += 'seventy';
        break;
      case '8':
        numberString += 'eighty';
        break;
      case '9':
        numberString += 'ninety';
        break;
  	}
    switch((number % 10).toString()) {
      case '1':
        numberString += "-one";
        break;
      case '2':
        numberString += '-two';
        break;
      case '3':
        numberString += '-three';
        break;
      case '4':
        numberString += '-four';
        break;
      case '5':
        numberString += '-five';
        break;
      case '6':
        numberString += '-six';
        break;
      case '7':
        numberString += '-seven';
        break;
      case '8':
        numberString += '-eight';
        break;
      case '9':
        numberString += '-nine';
        break;
    }
  }
  return numberString;
};

$(function() {  
  $('.start').on('click', function(event) {
    var valueRange = $(this).attr('id');
    switch(valueRange) {
      case 'forty':
        range = 40;
        break;
      case 'sixty':
        range = 60;
        break;
      case 'onehundred':
        range = 100;
        break;
      default:
        range = 0;
    }
    $('#range').html(range);
  });
  $('#next').on('click', function(event) {
    currentNumber = generateRandomNumber();
    var numberInWords = numberToString(currentNumber);
    $('#output-in-words').html(numberInWords);
    setTimeout(function() {$('#output-as-number').html(currentNumber);}, 5000);
    setTimeout(function() {$('#'+currentNumber).toggleClass("inPlay");}, 10000);
  });
});