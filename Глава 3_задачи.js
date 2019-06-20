//Задача 1: https://karmazzin.gitbooks.io/eloquentjavascript_ru/content/chapters/chapter3.html#%D0%BC%D0%B8%D0%BD%D0%B8%D0%BC%D1%83%D0%BC


function Min(number1, number2) {
  if (number1 < number2)
    return number1;
  else
    return number2;
};


console.log(Min(-1, 15));

//Решение из учебника:
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}



//Задача 2

//Часть 1

function isEven(number) {
  
  if (number == 0)
    return true;
  else if (number == 1)
    return false;
  else
    return isEven(number - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//Часть 2

function isEven(number) {
  if (number < 0)
    number = number * (-1);

  if (number == 0)
    return true;
  else if (number == 1)
    return false;
  else
    return isEven(number - 2);
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


//Решение из учебника:

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

//Задача 3: https://karmazzin.gitbooks.io/eloquentjavascript_ru/content/chapters/chapter3.html#%D1%81%D1%87%D0%B8%D1%82%D0%B0%D0%B5%D0%BC-%D0%B1%D0%BE%D0%B1%D1%8B

//Часть 1

function countBs(yourText) {

  let Bs = 0;

  for (i = 0; i <= yourText.length; i++)
    if (yourText.charAt(i) === 'B')
      Bs +=1;

  console.log('Количество букв B в строке:', Bs);

};

console.log(countBs("BOb"));

//Часть 2

function countChar(yourText, yourSymbol) {

  let yourSymbolQuant = 0;

  for (i = 0; i <= yourText.length; i++)
    if (yourText.charAt(i) === yourSymbol)
      yourSymbolQuant +=1;

  console.log('Количество букв', 'yourSymbol', 'в строке:', yourSymbolQuant);

};

console.log(countChar("kakkerlak", "k"));














