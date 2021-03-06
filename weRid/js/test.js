﻿$(function(){
	$('.panel').tabSlideOut({							//Класс панели
		tabHandle: '.handle',						//Класс кнопки
		pathToTabImage: '/resource/svernut.jpg',				//Путь к изображению кнопки
		imageHeight: '122px',						//Высота кнопки
		imageWidth: '40px',						//Ширина кнопки
		tabLocation: 'left',						//Расположение панели top - выдвигается сверху, right - выдвигается справа, bottom - выдвигается снизу, left - выдвигается слева
		speed: 300,								//Скорость анимации
		action: 'click',								//Метод показа click - выдвигается по клику на кнопку, hover - выдвигается при наведении курсора
		topPos: '150px',							//Отступ сверху
		fixedPosition: true						//Позиционирование блока false - position: absolute, true - position: fixed
	});
});
