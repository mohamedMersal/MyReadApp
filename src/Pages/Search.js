import React from 'react';
import { Link } from 'react-router-dom';
import ShelfSearch from '../Components/ShelfSearch';


export default function Search(props) {
  const setText = props.setText;
  const text = props.text;
  // console.log(query);
  const searchBooks = props.searchBooks;
  // console.log(searchBooks);
  const updateShelf = props.updateShelf;
  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={'/'} className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ShelfSearch 
            searchBooks={searchBooks} 
            updateShelf={updateShelf}
          />
        </div>
      </div>
    </>
  )
}
