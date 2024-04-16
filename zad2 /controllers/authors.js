// controllers/books.js
const books = [
    {
        id: 1,
        title: "Example Book",
        publishingYear: 2022,
        authorId: 1
    }
];

module.exports = {
    getBooks: (req, res) => {
        // Рендеринг представления books.ejs и передача массива books в качестве данных
        res.render('books', { books: books });
    }
};
