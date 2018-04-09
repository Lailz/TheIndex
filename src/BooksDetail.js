import React from 'react';


function BooksDetail(props) {
console.log(props);
return (
  <tr>
      <td>{props.book.title}</td>
      <td>{props.currentAuthor.first_name} {props.currentAuthor.last_name}</td>
      <td>
          <button className="btn" style={{backgroundColor: `${props.book.color}`}}/>
      </td>
  </tr>
);
}















export default BooksDetail;
