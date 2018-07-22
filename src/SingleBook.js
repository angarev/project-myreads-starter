import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import withoutCover from './img/no_cover.jpg'


class SingleBook extends Component{

    render() {

      const { book, changeShelf, books } = this.props;
      const cover = (book.imageLinks && book.imageLinks.thumbnail) ? book.imageLinks.thumbnail : withoutCover

      // default value of shelf
      let currentShelf = 'none';


      books.forEach((item)=>{
        if (item.id === book.id) {
          currentShelf = item.shelf;
        }
      })

      return (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <Link to={`/books/${book.id}`}>
                  <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${cover}")`,
                  }}></div>
                </Link>
                <div className="book-shelf-changer">
                  <select onChange={(e) => changeShelf(book, e.target.value)} defaultValue={ currentShelf }>
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