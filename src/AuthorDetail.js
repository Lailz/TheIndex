import React from 'react';
import {observer} from 'mobx-react';

import Loading from './Loading';
import BookTable from './BookTable';


function AuthorDetail(props) {

    const author = props.authorStore.getAuthorById(props.match.params.authorID);
    const books = author.books.map(book => props.bookStore.getBookById(book));
    console.log(author);
    console.log(books);

    return (
      props.authorStore.loading || props.bookStore.loading ? <Loading /> :
      <div className="author col-xs-10">
        <div>
          <h3>{author.first_name} {author.last_name}</h3>
          <img src={author.imageUrl} className="img-thumbnail"/>
        </div>
        <BookTable books={books} />
      </div>
    )
  }

export default observer(AuthorDetail);
