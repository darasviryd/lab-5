// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Установка движка представлений на ejs
app.set('view engine', 'ejs');

// Подключение каталога "public" для файлов статики (если требуется)
// app.use(express.static('public'));

// Базовый маршрут для "/"
app.get('/', (req, res) => {
    res.send('In progress...');
});

// Обработка ошибки 404 (страница не найдена)
app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});

// Настройка прослушивания порта 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

