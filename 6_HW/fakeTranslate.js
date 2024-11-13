// Объект dictionary для хранения переводов
const dictionary = {
    "hello": "здравствуйте",
    "world": "мир",
    "friend": "друг",
    "good": "хорошо",
    "day": "день",
    "night": "ночь",
    "love": "любовь",
    "peace": "мир",
    "cat": "кот",
    "dog": "собака",
    "water": "вода",
    "fire": "огонь",
    "earth": "земля",
    "wind": "ветер",
    "sun": "солнце",
    "moon": "луна",
    "tree": "дерево",
    "flower": "цветок",
    "book": "книга",
    "computer": "компьютер"
};

// Допишите код для fakeTranslate
export function fakeTranslate(word) {
    return new Promise((resolve, reject) => {
        // Имитация асинхронной операции с задержкой
        setTimeout(() => {
            if (dictionary[word.toLowerCase()]) // проверка наличия слова в dictionary
                resolve(dictionary[word.toLowerCase()]); // если есть, возвращаем перевод слова
            else // если слово не найдено
                reject(`Перевод слова ${word} не обнаружен`) // сообщение о том что перевод слова не найдено
        }, 1000); // Задержка 1 секунда
    });
}
