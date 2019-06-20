# Выразительный Javascript (Конспект)




## Введение

- представлен в 1995 году (сначала для Netscape Navigator)
- гибкость, для быстроты освоения
- стандарт ECMAScript (European Computer Manufacturers Association), или ES
- ECMAScript 3 была доминирующей, распространённой версией во время подъёма языка, примерно с 2000 до 2010
		ES1 - 1997
		ES2 - 1998
		ES3 - 1999
		ES4 - не принята
		ES5 - 2009
		ES6/ES2015 - 2015 (`let` и `const` — альтернативы `var`)
		ES2016/ES7 - 2016 (оператор возведения в степень **)
		ES2017/ES8
		ES2018
		ES2019 …
    
    


###### Величины, типы и операторы

**Величины**
- 6 типов величин: числа, строки, булевы величины, объекты*, функции* и неопределённые величины

*Числа:*
- 64 бита для хранения
- примеры записи: 9.81; 2.998e8
- операторы: +; -; *; /; % (остаток от деления = сравнение по модулю в математике)
- специальные «числа»: `Infinity`; `-Infinity`; `NaN` («not a number», результат причудливых, бессмысленных операций)

*Строки:*
- для хранения текста («», ‘’)
- обратный слеш \   для заключения специальных символов («Экранирование символов»)
		\” двойные кавычки
		\n перевод строки
		\t табуляция
- операторы: + (соединение)

*Булевы величины (Boolean):*
- два значения – `true` и `false`

```javascript
    console.log(3 > 2)
    // → true

    console.log("Арбуз" <  "Яблоко")
    // → true
```
    
Строки сравниваются по алфавиту; строчные буквы «больше» заглавных (символы сравниваются не по алфавиту, а по коду Unicode - [Подробнее в другом месте](https://learn.javascript.ru/string))

```javascript
    console.log("арбуз" <  "Яблоко")
    // → false
```

*Неопределенные значения:*
`null` и `undefined` (отсутствие осмысленного значения)

> «Когда оператор применяется «не к тому» типу величин, JavaScript втихую преобразовывает величину к нужному типу, используя набор правил, которые не всегда соответствуют вашим ожиданиям». Если происходит какая-то хрень - посмотреть, где произошло случайное преобразование типов.


**Операторы:**
- символы и слова: например, `typeof` (выдаёт название типа величины, к которой он применяется)

```javascript
    console.log(typeof 4.5)
    // → number
```

- *Бинарные* (операторы, работающие с двумя величинами) и *Унарные* (с одной). Вычитание можно использовать и как унарный, и как бинарный оператор.

```javascript
    console.log(- (10 - 2))
    // → -8
```

- Еще операторы:
		< и > («меньше» и «больше»)
		>= (больше или равно)
		<= (меньше или равно)
		== (равно)   - есть одна величина, которая не равна самой себе – `NaN` («not a number»)
		!= (не равно)
		=== (две величины абсолютно идентичны, можно использовать чтоы подстраховаться от неожиданных преобразований типов)
		!== (две величины не абсолютно идентичны)

- *Логические операторы*
&& — логическое «и» (его результат – правда, только если обе величины, к которым он применяется, тоже правда)

```javascript
        console.log(true && false)
        // → false

        console.log(true && true)
        // → true
```


|| — логическое «или». Выдаёт `true`, если одна из величин `true`

```javascript
        console.log(false || true)
        // → true
        console.log(false || false)
        // → false
```


! — «нет». обращает данную величину на обратную. (`!true` - `false`, `!false` - `true`)

тройной оператор «? :». Оператор, у которого величина слева от вопросительного знака выбирает одну 		из двух величин, разделённых двоеточием. Когда величина слева true, выбираем первое значение. Когда `false`, второе

```javascript
        console.log(true ? 1 : 2);
        // → 1
        console.log(false ? 1 : 2);
        // → 2
 ```


[Приоритет операторов](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)




## Структура программ

- выражение - инструкция - блок
- названия переменных: нельзя использовать пробелы. Цифры тоже можно использовать, но не первым символом в названии. Нельзя использовать знаки пунктуации, кроме символов $ и _
- Окружение - коллекция переменных и их значений, которая существует в определённый момент (в том числе переменные, являющиеся частью программного стандарта)

###### Функции

- Выполнение функции называют *вызовом*
- Величины, передаваемые функциям, называются *аргументами*
- Когда функция производит значение, говорят, что она *возвращает* значение
- есть «родные» функции, также можно писать свои функции

- `alert` - вызов окна с сообщением

```javascript
     alert("С добрым утром!");
```
	
  
- `confirm` - возвращает булевское значение – `true`, если нажато OK, и `false`, если нажато Cancel

```javascript
    confirm("Ну что, поехали?");
```


- `prompt` - можно использовать, чтобы задать открытый вопрос. Первый аргумент – вопрос, второй – текст, с 	которого пользователь начинает. В диалоговое окно можно вписать строку текста, и функция вернёт его в 		виде строки.

```javascript
    prompt("Расскажи мне всё, что знаешь.", "...");
```


`alert`, `confirm`, `prompt` - эти функции нечасто используют, потому что нельзя изменять внешний вид этих окон — 	но они могут пригодиться для экспериментальных программ.

- `console.log` - выводит величины на какое-либо устройство вывода

```javascript
    var x = 30;
    console.log("the value of x is", x);
    // → the value of x is 30
```


- Прямое выполнение программы (сверху вниз) - Условное выполнение (при помощи ключевого слова `if`; ключевое слово `else` используется вместе с `if` для создания двух раздельных путей выполнения)

	Три ветки:
  
  ```javascript
    var num = Number(prompt("Выбери число", "0"));

    if (num < 10)
      alert("Маловато");
    else if (num < 100)
      alert("Нормально");
    else
      alert("Многовато");
  ```


###### Циклы: while и do, for
	
- возможность повторения

 `while`: выражение в скобках а затем тело цикла. Цикл выполняет инструкцию, пока выражение выдаёт истинный результат

```javascript
    var number = 0;

    while (number <= 12) {
      console.log(number);
      number = number + 2;
    }
    // → 0
    // → 2
    //   … и т.д.
    
```

   (лучше начинать счётчики с 0)


- `do`: всегда выполняет тело хотя бы один раз, а проверяет условие после первого выполнения. Поэтому и тестируемое выражение записывают после тела цикла.

```javascript
    do {
      var name = prompt("Who are you?");
    } while (!name);
    console.log(name);
```


- `for`: три части инструкции. Первая инициализирует цикл, обычно задавая начальное значение переменной. Вторая – выражение проверки необходимости продолжения цикла. Третья – обновляет состояние после каждого прохода.

```javascript
    for (var number = 0; number <= 12; number = number + 2)
      console.log(number);

    var result = 1;
    for (var counter = 0; counter < 10; counter = counter + 1)
      result = result * 2;
    console.log(result);
```


- короткое обновление переменных:

```javascript
    var = var +1
    var += 1;
    var++
```


- `switch` - аналог долгой последовательность `else if`.



## Функции

Функция, подсчитывающая квадрат заданного числа:

```javascript
var square = function(x) {
  return x * x;
};

console.log(square(12));   // или square(12);
// → 144
```

Есть более короткая версия:

```javascript
function square(x) {
  return x * x;
}
```

*Функция*: ключевое слово ```function (набор параметров) {тело, содержащее инструкции}```;

- инструкция ```return``` определяет значение, возвращаемое функцией (когда обработка программы доходит до return, она сразу же выходит из функции, и возвращает это значение в то место кода, откуда была вызвана функция)
- параметров может не быть - а может быть несколько (переменные, но их начальные значения задаются при вызове функции, а не в её коде).

```javascript
var makeNoise = function() {
  console.log("Хрясь!");
};

makeNoise();
// → Хрясь!
```
```javascript
var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

console.log(power(2, 10));
```

Переменные, созданные внутри функции (включая параметры), локальны внутри этой функции (vs *глобальные переменные* - заданы снаружи функции, видны на протяжении всей программы)

Функции можно задавать внутри функций, что приводит к нескольким уровням локальности. В JavaScript область видимости создают только функции.

*Новые версии - ```let```, которое работает как var, но создаёт переменные, локальные для любого данного блока, а не только для функции.

Нельзя объявить функцию внутри условия или цикла.


Возможность работать со ссылкой на какой-то экземпляр локальной переменной называется *замыканием*. Функция, замыкающая локальные переменные, называется *замыкающей*.

```javascript
function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```

Рекурсия - функция вызывает сама себя (внутри тела). Но - циклы работают быстрее!
