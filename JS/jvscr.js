let str="Hello, Katya"
document.write(str, '<br>');
function WordCount(str) { 
  return str.split(" ").length;
}

document.write('Количество слов и букв: ', str.length,' и ', WordCount(str), '<br>');
document.write('URL: ', document.URL,'<br>');
document.write('Имя протокола: ', document.location.protocol,'<br>');
document.write('Имя файла: ', document.location.pathname.split('.')[0],'<br>');
document.write('Расширение: ', document.location.pathname.split('.')[1],'<br>');
/*split разделяет на массив,а точка это как разделение*/
let param = window.location.search.replace( '?', '');
document.write('Подстрока параметров: ', param,'<br>');



let anc = 'Anchor';
document.write('Анкор: ', anc.anchor('ban'), '<br>');
document.write('Анкор 2: ', anc.anchor('ban2'), '<br>');

document.write('<a href="https://mail.ru" target="_blank" id="mail.ru">Mail</a><br>')
document.write('<a href="https://www.kinopoisk.ru/film/585727/" target="_blank" id="Goodomens">Сериал</a><br>')

document.write('<img src="https://i.pinimg.com/originals/07/42/4b/07424b22791ce710a90860cb52780aee.jpg" style="width: 30%" id="new"><br>')
document.write('<img src="https://i.pinimg.com/originals/07/42/4b/07424b22791ce710a90860cb52780aee.jpg" style="width: 50%" id="new"><br>')
document.write('Количество анкоров: ', document.anchors.length,'<br>');
document.write('Количество ссылок: ', document.links.length,'<br>');
document.write('Вывод имеющегося анкора: ', document.anchors[0].innerHTML, '<br>')
document.write('Количество картинок: ', document.images.length,'<br>');
document.write('Ширина первой картинки: ', document.images[0].width,'<br>');
document.write('Ширина самой широкой картинки: ', Math.max.apply(Math, Array.from(document.images).map(function(o) { return o.width; })), '<br>');
/* apply вызывает функ, приним единичный массив
map создаёт новый массив с результатом вызова указанной функции для каждого элемента массива*/
const reducer = (accumulator, currentValue) => accumulator + currentValue;
document.write('Cумма всех высот картинок: ', Array.from(document.images).map(function(o) { return o.height; }).reduce(reducer),'<br>');
/* currentValue второй элемент массива,accumulator перый, так как нет inintialV */

document.write('id первой ссылки: ', document.links[0].id,'<br>');
document.write('Название документа: ', document.title,'<br>');

for(i=0; i<10; i++){
  document.write('<form id="',i,'">')
  document.write('<input type="button" class="ban" value="Показать имя формы" onClick="alert(\'Показать имя формы\')"></input>')
  document.write('<input type="button" value="Поле1" onClick="alert(\'Нажми ок\')"></input>')
  document.write('<input type="button" value="Поле2"></input>')
  document.write('<input type="button" value="Принадлежность" onClick="alert(',i,')"></input>')	/*id формы,которой принадлежит кнопка*/
  document.write('<input type="button" value="Показать количество полей" onClick="alert(',document.forms[i].childElementCount+1,')"></input>')
  document.write('</form>')
}
for(i=0; i<10; i+=2){
  document.write(document.forms[i].id, ', ')
}
document.write('<form id="1"><input type="reset" value="Сбросить"></input><input type="text" placeholder="Введите что-нибудь"></input></form>')

