const bookstore = {
  books: ['Ulysses', 'The Great Gatsby'],
  displayBookstore() {
    const renderTarget = document.getElementById('bookstore');
    const bookList = this.books.map((book) => `<p>${book}</p>`);
    renderTarget.innerHTML = bookList.join('');
  },
  removeBook(title) {
    let newList = this.books.filter((book) => book != title);
    this.books = newList;
  },
};

bookstore.removeBook('The Great Gatsby');
