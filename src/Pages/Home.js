import React from 'react'
import { Link } from 'react-router-dom';
import ShelfItem from '../Components/ShelfItem';

export default function Home({books, updateShelf}) {
  // console.log('Home =>', books);
  return (
  <>
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {/* Shelf Item */}
          <ShelfItem 
          section="Currently Reading" 
          shelfName= 'currentlyReading'
          books={books}
          updateShelf={updateShelf}
          />


          <ShelfItem 
          section="Want To Read" 
          shelfName= 'wantToRead'
          books={books}
          updateShelf={updateShelf}
          />


          <ShelfItem 
          section="Reading" 
          shelfName= 'read'
          books={books}
          updateShelf={updateShelf}
          />

          
        </div>
      </div>
      <div className="open-search">
            <Link to={'/search'}>Add a book</Link>
      </div>
    </div>
  </>
  )
}
