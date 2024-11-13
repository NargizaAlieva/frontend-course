import { fakeTranslate } from './fakeTranslate.js'; // импорт метода fakeTranslate из fakeTranslate.js

let favorites = [];

// Функция для перевода слова с использованием fakeTranslate
async function translateWord() {
    const word = document.getElementById("wordInput").value.trim();
    if (!word) {
        alert("Введите слово для перевода.");
        return;
    }
    try {
        // Используйте fakeTranslate для перевода
        const translation = await fakeTranslate(word);
        document.getElementById("translationResult").innerText = translation;
        document.getElementById("saveButton").disabled = false; // Разблокировка кнопки сохранения
    } catch (error) {
        // Покажите сообщение об ошибке
        document.getElementById("translationResult").innerText = error; // Вывод сообщения об ошибке
    }
}

// Сохранение перевода в избранное
function saveTranslation() {
    const word = document.getElementById("wordInput").value.trim();
    const translation = document.getElementById("translationResult").innerText;

    favorites.push({ word, translation });
    updateFavorites();
    // Заблокировать кнопку "Сохранить в избранное" после сохранения
    document.getElementById("saveButton").disabled = true;

    alert(`Сохранено: ${word} - ${translation}`);
}

// Обновление списка избранного
function updateFavorites() {
    const favoritesList = document.getElementById("favoritesList");
    favoritesList.innerHTML = ""; // Очистить список

    if (favorites.length === 0) {
        const message = document.createElement("li");
        message.innerText = "Нет избранных переводов.";
        favoritesList.appendChild(message);
    } else {
        favorites.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.innerText = `${item.word} - ${item.translation}`;
            
            const removeButton = document.createElement("button");
            removeButton.innerText = "Удалить";
            removeButton.addEventListener("click", () => removeFavorite(index));
            
            listItem.appendChild(removeButton);
            favoritesList.appendChild(listItem);
        });
    }
}

// Удаление перевода из избранного
function removeFavorite(index) {
    favorites.splice(index, 1); // удаляем элемент под индексом index
    updateFavorites();
    alert("Перевод удален из избранного.");
}

// Добавьте обработчики событий для кнопок
document.getElementById("translateButton").addEventListener("click", translateWord); // при нажатии на кнопку translateButton вызывает функцию translateWord
document.getElementById("saveButton").addEventListener("click", saveTranslation);// при нажатии на кнопку saveButton вызывает функцию saveTranslation

