import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SingleBook from './SingleBook';


class Search extends Component {

  state = {
    query: '',
    newBooks: [],
    searchError: false
  }

  getBooks = (e) => {
    const query = e.target.value.trim()
    this.setState({ query: query })

    // Run the search
    if (query) {
      BooksAPI.search(query).then((books) => {
        books.length > 0 ?  this.setState({newBooks: books, searchError: false }) : this.setState({ newBooks: [], searchError: true })
      })

      // If query is empty reset state to default
    } else this.setState({newBooks: [], searchError: false })
  }

  render() {

    const { query, newBooks, searchError } = this.state
    const { books, changeShelf } = this.props

    return (
        <div className="search-books">
          <div className="search-books-bar">

            {/*Add link to homepage*/}
            <Link className="close-search" to='/' title='Back'>Back</Link>

            <div className="search-books-input-wrapper">
              <input type="text"
                     placeholder="Search by title or author"
                     value={ query }
                     onChange={ this.getBooks }
              />
            </div>
          </div>
          <div className="search-books-results">
            { newBooks.length > 0 && (
                <div>
                  <div className=''>
                    <h3>{ newBooks.length } books have been found</h3>
                  </div>
                  <ol className="books-grid">
                    {newBooks.map((book) => (
                        <SingleBook
                            book={ book }
                            books={ books }
                            key={ book.title }
                            changeShelf={ changeShelf }
                        />
                    ))}
                  </ol>
                </div>
            )}
            { searchError  && (
                <div>
                  <div className=''>
                    <h3>Nothing found. Please try again!</h3>
                  </div>
                </div>
            )}
          </div>
        </div>
    );
  }
}

export default Search;