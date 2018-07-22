import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class SingleBook extends Component{

    render() {

      const { book, books, changeShelf } = this.props;

      return (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <Link to={`/books/${book.id}`}>
                  <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
                  }}></div>
                </Link>
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading </option>
                    <option value="wantToRead">Want to Read </option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title || "No title available"}</div>
              {book.authors && book.authors.map((author) =>(
                  <div className="book-authors" key={author}>{author || "No author available"}</div>
              ))}

            </div>
          </li>
      )
    }
}

export default SingleBook;