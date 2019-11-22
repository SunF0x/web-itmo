function createTable() {
	let height = document.getElementById('form').children[0].value;
	let width = document.getElementById('form').children[1].value;
	/*document.getElementById возвращает ссылку на элемент, который имеет атрибут id с указанным значением
	ниже получение разметки дочерних элементов*/
	document.getElementById('tab').innerHTML += '<table id="table"><tbody id="tbody"></tbody></table>';
	for (let i = 0; i < height; i++){
		document.getElementById('tbody').innerHTML += '<tr></tr>';  /*tr-контенер для созд строки,td-задает кажд ячейку*/
		for (let j = 0; j < width; j++){
			document.getElementById('tbody').children[i].innerHTML += '<td><form><input type="text" value="textarea"></input><input type="button" value="Сохранить" onclick="saveText(' + i + ', ' + j + ')"></input><form></td>';
		}
	}
	document.getElementById('func').removeChild(document.getElementById('form')); /*removeChild удаляет начальную форму*/
	for (let k = 0; k < 5; k++){
		document.getElementById('func').innerHTML += '<div class="funcs"></div>';
	}		/*это под 5 ячеек с различными функциями*/
	localStorage.setItem('height', height);  /*в веб-хранилище, добавить пару новых значений*/
	localStorage.setItem('width', width);
	document.getElementById('func').children[0].innerHTML += '<form><input type="text" value="Введите ширину таблицы" oninput="changeButtonText()"></input><select><option disabled selected>Рамка</option><option>hidden</option><option>dotted</option><option>dashed</option><option>solid</option></select><input id="prim" type="button" onclick="changeTableWidth()" value="Применить"></input></form>';
	document.getElementById('func').children[1].innerHTML += '<input type="button" onclick="createHeader()" value="Добавить заголовок"></input>';
	document.getElementById('func').children[2].innerHTML += '<form><input type="text" value="Удалить строку" id="remRow"></input><input type="button" onclick="deleteRow()" value="Удалить строку"></input></form>';
	document.getElementById('func').children[3].innerHTML += '<input type="button" onclick="magic()" value="Magic!"></input>';
	document.getElementById('func').children[4].innerHTML += '<input type="button" onclick="removeTable()" value="Удалить таблицу"></input>';
}

function saveText(row, column) {
	let cell = document.getElementById('tbody').children[row].children[column];/*ячейка-форма-текст внутри*/
	let mustRemove = cell.children[0];
	let savedText = mustRemove.children[0].value;
	cell.removeChild(mustRemove);	/*удаляем форму из ячейки*/
	cell.innerHTML += '<p>' + savedText + '</p>';
}

function changeTableWidth() {
	document.getElementById('table').style = 'width: ' + document.getElementsByTagName('select')[0].previousSibling.value + 'px; border: 2px ' + document.getElementsByTagName('select')[0].value + ' black;';
}
/*взяли значение со страницы и использовали*/
function createHeader() {
	document.getElementById('tbody').innerHTML = '<tr><td>Табличка для вас</td></tr>' + document.getElementById('tbody').innerHTML;
}

function deleteRow() {
	let row = document.getElementById('remRow').value;
	let limit = document.getElementById('tbody').children.length;
	if ((1 <= row) && (row <= limit) && (Math.floor(row) == row)){
		document.getElementById('tbody').children[row-1].remove();
		return;
	}
	alert("Значение не корректно, попробуйте еще раз")
	return;
}

function magic(){
	let mag = Math.ceil(Math.random() * 5);
	let row = Math.floor(Math.random() * localStorage.getItem('height')), column = Math.floor(Math.random() * localStorage.getItem('width'));
	let randomCell = document.getElementById('tbody').children[row].children[column].firstChild;
	switch (mag){
		case 1:
			randomCell.parentNode.innerHTML += '<form><input type="text" value="textarea"></input><input type="button" value="Сохранить" onclick="saveText(' + row + ', ' + column + ')"></input><form>';
			document.getElementById('tbody').children[row].children[column].firstChild.remove();
			break;
		case 2:
			let fc1 = Math.floor(Math.random() * 256), fc2 = Math.floor(Math.random() * 256), fc3 = Math.floor(Math.random() * 256);
			randomCell.style = 'color: rgb('+fc1+', '+fc2+', '+fc3+');';
			break;
		case 3:
			let bg1 = Math.floor(Math.random() * 256), bg2 = Math.floor(Math.random() * 256), bg3 = Math.floor(Math.random() * 256);
			randomCell.style = 'background-color: rgb('+bg1+', '+bg2+', '+bg3+');';
			break;
		case 4:
			let font = Math.cell(Math.random() * 11 + 14);
			randomCell.style = 'font-size: '+font+'px;';
			break;
		case 5:
			location.replace('https://learn.javascript.ru');
			break;
	}
	
}

function removeTable(){
	document.getElementById('func').innerHTML = '<form id="form"><input name="height" type="text" value="height"></input><input name="width" type="text" value="width"></input><input type="submit" onclick="createTable()"></input></form>';
	document.getElementById('tab').innerHTML = '';
}

