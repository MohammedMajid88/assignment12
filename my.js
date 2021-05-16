function getEvenNumbers(numbers) {
	return numbers.filter(number => number % 2 === 0);
}


function getAverage(numbers) {
	return numbers.reduce((sum, number) => sum + number) / numbers.length;
}


function getMaxNumber(numbers) {
	return numbers.reduce((max, current) => (current > max) ? current : max);
}


function getEvenOdd(numbers) {
	return numbers.map(number => `${number} is ${(number % 2 === 0 ? 'Even' : 'Odd')}`);
}


function isNarcissistic(number) {
	const digitArray = Array.from(String(number), Number);
	return digitArray
		.map(digit => digit ** digitArray.length)
		.reduce((sum, value) => sum + value) === number;
}


function allPositive(numbers) {
	return numbers.every(number => number > 0);
}


function containsZero(numbers) {
	return numbers.some(number => number === 0);
}


function joinStrings(strings, separator = ',') {
	return strings.reduce((concat, string) => concat + separator + string);
}





function containsZero(arry) {
    for (let i = 0; i =  arry.lenght; i++) {
        if(arrry[i] == 0)
        return true;
    }
    return false;
}




function allPasitive(arry) {
    for (let i = 0; i < array.length; i++) {
        if (arry[i] < 0)
        return false;
        
    }
    return true;
}




const array = ['a', 'b', 'c']
function joinStrings(array, separator) {
    console.log(array.join(separator));
   
   
}
joinStrings(array, '*');




















