Исходный код:

```javascript
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
  }, 3000);
}
```

Выведет:
Bad: undefined
Bad: undefined
Bad: undefined
Bad: undefined

Потому что var имеет глобальную область видимости и поэтому, когда начинает выполняться setTimeout i уже будет равна 4

Два варианта модификации кода:
Первый

```javascript
const arr = [10, 12, 15, 21];

setTimeout(() => {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
  }
}, 3000);
```

Вывод:
Bad: 10
Bad: 12
Good: 15
Good: 21

В данном случае var изменяется внутри setTimeout, поэтому по истечению 3 секунд выведется 10, 12, 15, 21, т.к. i будет изменяться в пределах цикла

Второй:

```javascript
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
  }, 3000);
}
```

Вывод:
Bad: 10
Bad: 12
Good: 15
Good: 21

Здесь переменная объявлена через let, который имеет блочную область видимости, поэтому каждый setTimeout захватывает текущее значение i.
