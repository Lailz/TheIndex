import React from 'react';


function BooksDetail(props) {

return (
  <tr>
      <td>{props.book}</td>
      <td>{props.currentAuthor.first_name} {props.currentAuthor.last_name}</td>
      <td>
          <button className="btn" style={{backgroundColor: `${props.book}`}}/>
      </td>
  </tr>
);
}















export default BooksDetail;
