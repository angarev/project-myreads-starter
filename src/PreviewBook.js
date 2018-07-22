import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import withoutCover from './img/no_cover.jpg'

class PreviewBook extends Component{

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    BooksAPI.get(this.props.match.params.id).then((book) => {
      this.setState({
        authors: book.authors,
        name: book.title,
        image: book.imageLinks,
        disc: book.description,
        subtitle: book.subtitle,
        rating: book.averageRating,
        publisher: book.publisher,
        identifier: book.industryIdentifiers[0].identifier,
      })
    })
  }


  render() {

    const cover = (this.state.image && this.state.image.thumbnail) ? this.state.image.thumbnail : withoutCover;

    return (
        <div className="search-books">
          <div className="search-books-bar">

            {/*Add link to homepage*/}
            <Link className="close-search" to='/' title='Back'>Back</Link>

            <div className="preview-books-input-wrapper">
             <h4>{this.state.name}</h4>
            </div>
          </div>
          <div className="preview-content">
            <div className="preview-image">
              <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url("${cover}")`}} ></div>
            </div>
            <div className="preview-title">
              <h1>{this.state.name}</h1>
              <h4>{this.state.subtitle}</h4>
              {this.state.authors && this.state.authors.map((author, index) =>(
                  <span className="book-authors" key={author}>{ author || "No author available" } </span>
              ))}
              <h5><span className="rating">Rating:
                </span> {this.state.rating || "No rating"},
                <span>Publisher: </span> {this.state.publisher || "N/A"},
                <span> Identifier: </span>{this.state.identifier || "N/A"}</h5>
              <p>{this.state.disc || "No description available"}</p>
            </div>
          </div>

          <div className="open-search">
            {/*Add link to search page*/}
            <Link to='/search' title='Add book'>Add Book</Link>
          </div>
        </div>
    );
  }
}


export default PreviewBook;