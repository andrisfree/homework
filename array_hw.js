// 1)
// 		Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// 		То есть дефисы удаляются, а все слова после них получают заглавную букву.

// camelize("background-color")
// camelize('-webkit-transition');
// camelize("list-style-image");

// function camelize(str) {
// 	let result = [];
// 	let strSplit = str.split('-');
// 	for (let i = 0; i < strSplit.length; i++) {
// 		let word = strSplit[i].split('');
// 			if (word.length !== 0) {
// 				let upLetter = word[0].toUpperCase();
// 				word.shift();
// 				word.unshift(upLetter);
// 			};
// 		result = result.concat(word.join(''));
// 	};
// 	let finStr = result.join('');
// 			if (finStr.length !== 0) {let newStr = finStr[0].toLowerCase() + finStr.slice(1)
// 			console.log(newStr);
// 			} else { console.log(finStr) };
// };

// 2)
// 		Задача: написать функцию, принимающую массив чисел
// 		и возвращающую сумму всех его положительных элементов и отрицательных 
// 		чисел отдельно в виде нового массива

// 		например функция принимает как аргумент следующий массив
// 		arr = [1, -2, 3, 4, -9]

// 		и должна вернуть [8, -11]
// 		Сохраняйте вызов этой функции через деструктурирующее присваивание


let arr = [];
function sum(arr) {
	let sumPositive = 0;
	let sumNegative = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sumPositive += arr[i];
		} else {
			sumNegative += arr[i];
		};
	};
	return [sumPositive, sumNegative];
}
[sumPositive, sumNegative] = sum([1,9,18,15,39,943,1,-1,-5]);
console.log("Сумма положительных чисел: " + sumPositive, "Сумма отрицательных чисел: " + sumNegative);
