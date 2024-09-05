/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let a = str[0].toUpperCase()
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === ' ') {
      a += str[i+1].toUpperCase()
    } else {
      a += str[i+1]
    }
  };
return a
}

console.log(capitalizeWords('hello world from javascript'));