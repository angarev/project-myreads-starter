import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListWithBooks from './ListWithBooks';
import Search from './Search';
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

  render() {
    return (
        <div className="app">
          <Route exact path='/' render={() => (
              <ListWithBooks books={this.state.books} />
          )}/>
          <Route path='/search' render={() => (
              <Search />
          )}/>
        </div>
    )
  }
}

export default BooksApp
