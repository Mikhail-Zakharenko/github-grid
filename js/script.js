"use strict";
console.log("Привет JS!");


// Координаты относительно окна браузера
// getBoundingClientRect();
// Получаем объект
const item = document.querySelectorAll('.card');
console.log(item);

// Получаем координаты относительно окна браузера
const getItemCoords = item[1].getBoundingClientRect();
console.log(getItemCoords);// DOMRect {x: 560.40625, y: -231, width: 417.59375, height: 292.203125, top: -231, …}

// Получение конкретной координаты top относительно окна браузера
const getItemTopCoord = item[1].getBoundingClientRect().top;
console.log(getItemTopCoord);// 64 - числовое значение нужной нам координаты, будет изменяться при прокручивании скролинга

// Получаем конкретную координату относительно документа
const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset; // Свойство window.pageYOffset - возвращает количество прокрученных пикселей в данном случае по вертикали
console.log(getItemTopDocumentCoord);// 64 - Будет равен всегда, даже при прокручивании скролинга
// Получение объекта по координатам
// Используем метод elementFromPoint(x, y);
const element = document.elementFromPoint(400, 100);
console.log(element);
