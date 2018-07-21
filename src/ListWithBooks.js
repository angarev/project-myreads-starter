import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ListWithBooks extends Component {
  render() {

    const {books} = this.props;
    
    const shelves = {
      currentlyReading: 'Currently Reading',
      wantToRead: 'Want To Read',
      read: 'Read',
    };

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          {Object.keys(shelves).map((shelf) => {
            return (
                <div className="list-books-content">
                  <div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">{shelves[shelf]}</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {books.filter(book => book.shelf === shelf).map((book) => {
                            return (
                                <li key={book.id}>
                                  <div className="book">
                                    <div className="book-top">
                                      <div className="book-cover" style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage: `url("${book.imageLinks.smallThumbnail}")`,
                                      }}></div>
                                      <div className="book-shelf-changer">
                                        <select>
                                          <option value="move" disabled>Move
                                            to...
                                          </option>
                                          <option
                                              value="currentlyReading">Currently
                                            Reading
                                          </option>
                                          <option value="wantToRead">Want to
                                            Read
                                          </option>
                                          <option value="read">Read</option>
                                          <option value="none">None</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div
                                        className="book-title">{book.title}</div>
                                    <div
                                        className="book-authors">{book.authors}</div>
                                  </div>
                                </li>
                            );
                          })

                          }
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
            );
          })}


          <div className="open-search">
            {/*Add link to search page*/}
            <Link to='/search' title='Add book'>Add Book</Link>
          </div>
        </div>
    );
  }
}

export default ListWithBooks;