//Задача 1: https://karmazzin.gitbooks.io/eloquentjavascript_ru/content/chapters/chapter2.html#%D1%82%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA-%D0%B2-%D1%86%D0%B8%D0%BA%D0%BB%D0%B5

//Мое решение:
const brick = "#";

for (let brickLine = "#"; brickLine.length < 8; brickLine = brickLine + brick)
	console.log(brickLine);

//Ответ из учебника (так для себя):
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);





//Задача 2: https://karmazzin.gitbooks.io/eloquentjavascript_ru/content/chapters/chapter2.html#fizzbuzz


//Мое решение, часть 1:
//Вопрос 1: ничего, что счетчик в 1 начинается? В учебнике рекомендовали с 0 начинать.

for (i = 1; i < 101; i++) {
	if (i % 3 != 0 && i % 5  != 0)
		console.log(i);
	else if (i % 3 == 0)
		console.log("Fizz");
	else
		console.log ("Buzz");
	};

//Вопрос 2: Со скобками не работает, а без скобок - да... Как так?

for (i = 1; i < 101; i++) {
	if (i % 3 != 0 && i % 5  != 0) {
		console.log(i)
	};
	else if (i % 3 == 0) {
		console.log("Fizz")
	};
	else
		{console.log ("Buzz")};
	};

//Вопрос 3: а почему вот этот код не работает? Что-то не могу сообразить, запала логика)


for (i = 1; i < 101; i++) {
	if (i % 3 != 0 && i % 5 != 0)
	console.log(i);
	else if (i % 3 == 0 && i % 5 != 0)
	console.log("Fizz");
	else (i % 3 != 0 && i % 5 == 0)
	console.log("Buzz");
 };

//Часть 2:

for (i = 1; i < 101; i++) {
	if (i % 3 != 0 && i % 5  != 0)
		console.log(i);
	else if (i % 3 == 0 && i % 5 == 0)
		console.log("FizzBuzz");
	else if (i % 3 == 0)
		console.log("Fizz");
	else
		console.log ("Buzz");
	};


//Ответ из учебника:

for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}


// Задача 3: https://karmazzin.gitbooks.io/eloquentjavascript_ru/content/chapters/chapter2.html#%D1%88%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D0%BD%D0%B0%D1%8F-%D0%B4%D0%BE%D1%81%D0%BA%D0%B0


deckLength = prompt ("Введи длину доски:", " ");
deckHeight = prompt ("Введи высоту доски", " ");

//Если высота доски - четное число

if (deckHeight % 2 == 0) {

	for (var i = 1; i <= deckHeight / 2; i++)
		{
			//Цикл для нечетной строки
			for (var lineOne = ""; lineOne.length < deckLength; lineOne += "# ");
			//console.log(lineOne + "\n");

			//Цикл для четной строки
			for (var lineTwo= ""; lineTwo.length < deckLength; lineTwo += " #");
			//Рисуем 2 строки	
			console.log(lineOne + "\n" , lineTwo + "\n");
	};
}


//Если высота доски - нечетное число

else {

	for (var i = 1; i <= deckHeight / 2; i++)
		{
			//Цикл для нечетной строки
			for (var lineOne = ""; lineOne.length < deckLength; lineOne += "# ");
			//console.log(lineOne + "\n");

			//Цикл для четной строки
			for (var lineTwo= ""; lineTwo.length < deckLength; lineTwo += " #");
			//Рисуем 2 строки	
			console.log(lineOne + "\n" , lineTwo + "\n");
	};
			console.log(lineOne + "\n");
};


//Вопрос 4 - почему не работает с let? И вообще - var, let, const - принципиально, что выбирать?





//Решение из учебника:

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);

//Вопрос 5: NaN, null, undefined. В чем разница и надо ли мне ее сейчас знать?





