document.addEventListener('DOMContentLoaded', function () {
    const saveButton = document.getElementById('saveNote');
    const noteInput = document.getElementById('noteInput');
    const notesContainer = document.getElementById('notesContainer');
    let currentNoteId = null;

    // Ф-я нотатки
    function addNote(content, id) {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.setAttribute('data-id', id);

        const noteContent = document.createElement('p');
        noteContent.textContent = content;

        const editButton = document.createElement('button');
        editButton.textContent = 'Редагувати';
        editButton.onclick = function () {
            noteInput.value = content; // Вставляємо в textarea для редагування
            currentNoteId = id; // Вказуємо на яку нотатку редагувати
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        deleteButton.onclick = function () {
            notesContainer.removeChild(noteDiv); // Видаляємо нотатку з контейнера
        };

        noteDiv.appendChild(noteContent);
        noteDiv.appendChild(editButton);
        noteDiv.appendChild(deleteButton);
        notesContainer.appendChild(noteDiv);
    }

    // Обробка натискання на кнопку "Зберегти"
    saveButton.addEventListener('click', function () {
        const noteContent = noteInput.value.trim();
        if (noteContent === '') return;

        if (currentNoteId !== null) {
            // Якщо є поточний ID, оновлюємо існуючу нотатку
            const noteDiv = notesContainer.querySelector(`.note[data-id="${currentNoteId}"]`);
            noteDiv.querySelector('p').textContent = noteContent;
            currentNoteId = null; // Скидаємо поточний ID після редагування
        } else {
            // Якщо немає поточного ID, додаємо нову нотатку
            const newId = Date.now(); // Генерація унікального ID
            addNote(noteContent, newId);
        }

        noteInput.value = ''; // Очищаємо поле після збереження
    });
});





// // Отримуємо елементи
// const profileImageContainer = document.querySelector('.profile-image-container');
// const iconsContainer = document.querySelector('.icons-container');

// // Додаємо слухач події на наведення на фото
// profileImageContainer.addEventListener('mouseenter', () => {
//     iconsContainer.style.opacity = '1';
//     iconsContainer.style.visibility = 'visible';
//     iconsContainer.style.top = '110%';  // Зміщуємо іконки вниз
// });

// // Додаємо слухач події на відведення курсору
// profileImageContainer.addEventListener('mouseleave', () => {
//     iconsContainer.style.opacity = '0';
//     iconsContainer.style.visibility = 'hidden';
//     iconsContainer.style.top = '100%';  // Іконки повертаються в початкове положення
// });
