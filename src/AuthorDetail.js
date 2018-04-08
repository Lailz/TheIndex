import React from 'react';

import BooksDetail from './BooksDetail';

function AuthorDetail(props) {

  const booksDetail = props.currentAuthor.books && props.currentAuthor.books.map((book) =>
    <BooksDetail key={props.currentAuthor.id} book={book} currentAuthor={props.currentAuthor} />
  );

  return (
<div className="author col-xs-10">
    <div>
        <h3>{props.currentAuthor.first_name} {props.currentAuthor.last_name}</h3>
        <img src={props.currentAuthor.imageUrl} className="img-thumbnail"/>
    </div>
    <table className='mt-3 table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Authors</th>
                <th>Color</th>
            </tr>
        </thead>
        <tbody>
            {booksDetail}
        </tbody>
    </table>
</div>

);
}



export default AuthorDetail;
