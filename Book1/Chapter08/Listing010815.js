const bookstore = {
  books: ['Ulysses', 'The Great Gatsby'],
  removeBook(title) {
    let newList = this.books.filter((book) => book != title);
    this.books = newList;
    this.displayBookstore();
  },
  displayBookstore() {
    const renderTarget = document.getElementById('bookstore');
    const bookList = this.books.map((book) => `<p>${book}</p>`);
    renderTarget.innerHTML = bookList.join('');

    shoppingCart.displayCart(this.removeBook.bind(this));
  },
};
