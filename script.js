/* Новые элементы должны добавляться в список по нажатию на Enter */
const input = document.querySelector('#input');
const items = document.querySelector('.items');

input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {

        const groceryText = input.value;

        const newPoint = document.createElement('div');
        newPoint.classList.add('point');
        newPoint.textContent = groceryText;

        if (groceryText != '') {
            items.append(newPoint);
        }

        input.value = '';
    }
})

for (const item of groceryText) {
    item.addEventListener('click', function() {
        item.classList.toggle('decoration');
    })
}

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */