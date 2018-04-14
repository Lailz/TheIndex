import React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';

import Loading from './Loading';
import SearchBar from './SearchBar';
import BookTable from './BookTable';

function BookList(props) {

  const books = props.bookStore.books;
  const bookColor = props.match.params.bookColor;

  return (
    props.bookStore.loading ? <Loading /> :
            <div className="books">
              <h3>Books</h3>
              <SearchBar store={props.bookStore}/>
              {bookColor &&
                <Link to="/books">
                <button className="btn">All Books</button>
              </Link>}
              <BookTable books={bookColor ? books.filter(book => book.color === bookColor) : books} />
            </div>
  );
}


export default observer(BookList);
