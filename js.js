// Описати своїми словами навіщо потрібні функції у програмуванні.
// це така підпрограма, що вбачає у себе виконання певних алгоритмів з даними, що потрібно обробити. також до неї можна багаторазово звертатись з різних місць основної програми. 
// дл'я нписання срощенного коду
// Описати своїми словами, навіщо у функцію передавати аргумент.
// аргумент потрібно передавати у функцію, щоб функція мала можливість працювати саме з привединими даними(параметри/аргументи)
// Що таке оператор return та як він працює всередині функції?
// return - це оператор, що повертає результат вшд виконання функції в основний код

// Завдання
// Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами. 
//Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

// Технічні вимоги:
// Отримати за допомогою модального вікна браузера два числа.
// Отримати за допомогою модального вікна браузера математичну операцію, яку потрібно виконати. Сюди може бути введено +, -, *, /.
// Створити функцію, в яку передати два значення та операцію.
// Вивести у консоль результат виконання функції.

let num1 = null
let num2 = null

do{
    num1 = +prompt("first num?")
    num2 = +prompt("second num?")
} while(isNaN(num1) || isNaN(num2))
let operation = prompt("opperation?")

function calc(num1, num2, operation){
    let result = null
        switch (operation){
            case '+':
                result = num1+num2;
                break;
            case '-':
                result = num1-num2;
                break;
            case '*':
                result = num1*num2;
                break;
            case '/':
                result = num1/num2;
                break;
            default:
                console.log("Операция не распознана. Повторите ввод.");
        }
        return result;
    }
console.log(calc(num1, num2, operation))