/*
Você criará um sistema de gerenciamento de biblioteca. Comece inicializando o sistema com os dados fornecidos e criando a estrutura da função principal.
Crie uma variável chamada libraryData com estes dados iniciais exatos:
*/

let libraryData = {
    books: [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
            genre: "Fiction",
            isRead: false,
            rating: 0,
            borrowed: false,
            borrowedBy: "",
            borrowDate: ""
        }
    ],
    readers: [
        {
            name: "John Smith",
            favoriteGenre: "Fiction",
        }
    ]
}

function manageLibrary(actions, data) {
    let results = [];

    for (let i = 0; i < actions.length; i++) {
        const currentAction = actions[i];
        const currentData = data[i];

        switch (currentAction) {
            case 'printBooks':
                results.push(libraryData.books);
                break

            case 'printReaders':
                results.push(libraryData.readers);
                break

            case 'addBook':
                const newBook = {
                    id: libraryData.books.length + 1,
                    title: currentData.title,
                    author: currentData.author,
                    year: currentData.year,
                    genre: currentData.genre,
                    isRead: false,
                    rating: 0,
                    borrowed: false,
                    borrowedBy: "",
                    borrowDate: ""
                };

                libraryData.books.push(newBook);
                results.push("Book added successfully!");
                break

            case 'searchByTitle':
                const searchResults = [];
                const searchText = currentData.toLowerCase();

                for (const book of libraryData.books) {
                    const bookTitle = book.title.toLowerCase();

                    if (bookTitle.includes(searchText)) {
                        searchResults.push(book);
                    };
                };

                results.push(searchResults);
                break

            case 'filterByGenre':
                const searchGender = [];
                const searchByGenre = currentData.toLowerCase();

                for (const book of libraryData.books) {
                    const bookGenre = book.genre.toLowerCase();

                    if (bookGenre.includes(searchByGenre)) {
                        searchGender.push(book);
                    };
                };

                results.push(searchGender);
                break

            default:
                results.push("Invalid action!");
                break
        }
    }
    return results;
};

let actions, data, result

actions = ["addBook", "addBook", "addBook", "filterByGenre", "printBooks"]
data = [{ title: "Dune", author: "Frank Herbert", year: 1965, genre: "Science Fiction" }, { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance" }, { title: "Foundation", author: "Isaac Asimov", year: 1951, genre: "Science Fiction" }, "Science Fiction", null]


result = manageLibrary(actions, data);
console.log(result);

/*

[
  "Book added successfully!",
  "Book added successfully!",
  "Book added successfully!",
  [
    {
      id: 2,
      title: "Dune",
      author: "Frank Herbert",
      year: 1965,
      genre: "Science Fiction",
      isRead: false,
      rating: 0,
      borrowed: false,
      borrowedBy: "",
      borrowDate: ""
    },
    {
      id: 4,
      title: "Foundation",
      author: "Isaac Asimov",
      year: 1951,
      genre: "Science Fiction",
      isRead: false,
      rating: 0,
      borrowed: false,
      borrowedBy: "",
      borrowDate: ""
    }
  ],
  [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Fiction",
      isRead: false,
      rating: 0,
      borrowed: false,
      borrowedBy: "",
      borrowDate: ""
    },
    {
      id: 2,
      title: "Dune",
      author: "Frank Herbert",
      year: 1965,
      genre: "Science Fiction",
      isRead: false,
      rating: 0,
      borrowed: false,
      borrowedBy: "",
      borrowDate: ""
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      genre: "Romance",
      isRead: false,
      rating: 0,
      borrowed: false,
      borrowedBy: "",
      borrowDate: ""
    },
    {
      id: 4,
      title: "Foundation",
      author: "Isaac Asimov",
      year: 1951,
      genre: "Science Fiction",
      isRead: false,
      rating: 0,
      borrowed: false,
      borrowedBy: "",
      borrowDate: ""
    }
  ]
]


*/