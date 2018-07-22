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

  changeShelf = ( newBook, newShelf ) => {
    BooksAPI.update(newBook, newShelf).then(response =>{

      // set shelf for new or updated book
      newBook.shelf = newShelf

      // get list of books without updated or new book
      var updatedBooks = this.state.books.filter( book => book.id !== newBook.id )

      // add book to array and set new state
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
              <Search changeShelf={ this.changeShelf } />
          )}/>
          <Route path='/books/:id' component={PreviewBook}/>
        </div>
    )
  }
}

export default BooksApp
