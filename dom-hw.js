// 1)	
// 	Создайте input type text и три кнопки
// 	кнопки должны иметь следующий функционал (должны запускать соотвествующие фунции)
// 	1. Кнопка "Очистить input" (удалять содержимое value тега input)
// 	2. Кнопка заблокировать инпут (disabled setAttribute)
// 	3. Кнопка разблокировать инпут (disabled removeAttribute)
// 	или input.disabled = true/false;

let clearBut = document.querySelector('.clear-but');
let blockBut = document.querySelector('.block-but');
let unblockBut = document.querySelector('.unblock-but');
let input = document.querySelector('input');

clearBut.addEventListener('click', clearInput);
blockBut.addEventListener('click', blockInput);
unblockBut.addEventListener('click', unblockInput);

function clearInput() {
	input.value = '';
};
function blockInput() {
	input.setAttribute('disabled', true);
};
function unblockInput() {
	input.removeAttribute('disabled');
};



// 2) 
// 	Создайте в HTML два текстовых инпута и кнопку
// 	Напишите функцию, которая будет по нажатию на кнопку
// 	менять содержимое инпутов (value) местами


let changeBut = document.querySelector('.change-but');
changeBut.addEventListener('click', changeValue)

function changeValue() {
	let input1 = document.getElementById('input1');
	let input2 = document.getElementById('input2');
	let input1Value = input1.value;
	let input2Value = input2.value;
	input1.value = input2Value;
	input2.value = input1Value;
};
