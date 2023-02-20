/*Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.*/
//let multiply;
export function getPercents(percent, number) {
  if (typeof percent !== "number" || typeof number !== "number") {
    return "Данные не корректны";
  } else if (percent < 0 || number < 0) {
    return "Необходимы положительные значения";
  } else {
    return (percent / 100) * number;
  }
}

let result = getPercents("a", 10);
console.log(result);
