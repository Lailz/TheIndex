import React from 'react';
import {observer} from 'mobx-react';

import BookRow from './BookRow';

function BookTable(props) {
  const bookRows = props.books && props.books.map(book =>
    <BookRow key={book.title} book={book}/>);
  return (
    <table className='mt-3 table'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Authors</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {bookRows}
      </tbody>
    </table>
  );
}

export default observer(BookTable);
