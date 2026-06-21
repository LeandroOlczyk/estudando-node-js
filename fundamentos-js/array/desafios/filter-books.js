function filterBooks(books, minRating) {
  return books.filter(book => book.rating >= minRating)
}

let books, minRating, result

console.log('------ Fist Test------ ')
books = [{ title: "The Hobbit", author: "J.R.R. Tolkien", rating: 4.8 }, { title: "Twilight", author: "Stephenie Meyer", rating: 2.3 }]
minRating = 3
result = filterBooks(books, minRating)
console.log(result)

console.log('------ Second Test------ ')
books = [{ title: "Book One", author: "Author One", rating: 5 }, { title: "Book Two", author: "Author Two", rating: 5 }, { title: "Book Three", author: "Author Three", rating: 5 }]
minRating = 5
result = filterBooks(books, minRating)
console.log(result)