// 1)	Выведите чётные числа
// 			При помощи цикла for выведите чётные числа от 2 до 10.
// 			Для проверки на чётность используйте оператор получения остатка от деления % - if (i % 2 == 0)


// Решение
// for ( let i = 2; i <= 10; i++) {
// 	if ( i % 2 == 0) {
// 		console.log ( i );
// 	}
// }

// 		1.1) Перепишите код, заменив цикл for на while, без изменения поведения цикла.


// Решение
// let i = 0;
// while (i < 3) {
// 	i++;
// 	console.log( `number ${i}!` );
// }
	


// 		2) 

// 		Перепишите код в двух синтаксисах (одну можно закомментировать) Function Expression и стрелочной функцией
// 		Сейчас в функцию ask передаются анонимные каллбек функции, дайте им имена и передавайте как каллбек через переменную описания.


// // Решение первое Function Expression
// let ask = function(answer) {
//   console.log("Вы согласны?");
//   if (answer === "yes") 
//   	console.log("Вы согласились.");
//   else 
//   	console.log("Вы отказались.");
//   return answer
// }

// ask ("no")


// Решение второе Стрелочная функция
let ask = (answer) => {
  console.log("Вы согласны?");
  if ((answer === "yes") || (answer === "Yes")){
  	console.log("Вы согласились.");
  }
  else {
  	console.log("Вы отказались.");
  }
}

ask ("Yes")


// // Решение третье
// function question() { console.log("Вы согласны?"); }
// function answerYes() { console.log("Вы согласились."); }
// function answerNo() { console.log("Вы отказались."); }

// let ask = function (answer) {
// 	question()
// 	answer()
// }

// ask (answerNo);
