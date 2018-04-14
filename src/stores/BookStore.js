import {decorate, observable, computed} from 'mobx';
import axios from 'axios';

class BookStore {
  constructor() {
    this.books = [];
    this.query = "";
    this.loading = true;
  }

fetchBooks() {
  return axios.get('https://the-index-api.herokuapp.com/api/books/')
          .then(res => res.data)
          .then(books => {
            this.books = books;
            this.loading = false;
          })
          .catch(err => console.error(err));
}

get filteredBooks() {
  if (this.books) {
    return this.books.filter(book => {
      return `${book.title}`
      .toLowerCase()
      .includes(this.query);
    });
  }
  return [];
}

getBookById(id) {
  return this.books.find(book => book.id == id);
}

}



decorate(BookStore, {
  books: observable,
  query: observable,
  loading: observable,
  filteredBooks: computed
})


const bookStore =  new BookStore()
bookStore.fetchBooks();

export default bookStore;
