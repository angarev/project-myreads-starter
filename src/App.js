import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListWithBooks from './ListWithBooks';
import Search from './Search';
import PreviewBook from './PreviewBook';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //Make API call
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  // Set shelf for new or updated book, add book and set new state
  changeShelf = ( newBook, newShelf ) => {
    BooksAPI.update(newBook, newShelf).then(response =>{
      let updatedBooks;

      newBook.shelf = newShelf

      updatedBooks = this.state.books.filter( book => book.id !== newBook.id )

      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks })
    })
  }

  render() {
    return (
        <div className="app">
          <Route exact path='/' render={() => (
              <ListWithBooks
                  books={this.state.books}
                  changeShelf={ this.changeShelf }
              />
          )}/>
          <Route path='/search' render={({ history }) => (
              <Search
                  books={this.state.books}
                  changeShelf={ this.changeShelf }
              />
          )}/>
          <Route path='/books/:id' component={PreviewBook}/>
        </div>
    )
  }
}

export default BooksApp
