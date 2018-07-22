import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SingleBook from './SingleBook';

class ListWithBooks extends Component {
  render() {

    const {books, changeShelf } = this.props;
    
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
                <div key={shelf} className="list-books-content">
                  <div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">{shelves[shelf]}</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {books.filter(book => book.shelf === shelf).map((book) => {
                            return (
                                <SingleBook key={book.title}
                                            book={book}
                                            books = {books}
                                            changeShelf={ changeShelf }
                                />
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