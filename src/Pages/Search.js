import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import ShelfSearch from '../Components/ShelfSearch';


export default function Search({updateShelf, booksData}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const onSearchQueryChange = async (e) => {
      // console.log(e.target.value);
      setSearchQuery(e.target.value);
      // console.log(searchQuery.length);
      if(searchQuery.length < 0){
        // setSearchResult([]);
        document.querySelector('.books-grid').style.display = 'none';

      }else{
        // document.querySelector('.books-grid').style.display = 'flex';
        if(searchQuery){
          const res = await BooksAPI.search(searchQuery);
          if(res.error === 'empty query'){
            setSearchResult([]);
          }else{
            const boooks = res.map((bookSearch) => {
              booksData.forEach((book) =>{
                if(bookSearch.id === book.id) bookSearch.shelf = book.shelf 
              });
              return bookSearch
            });
            if(boooks.error ){
              setSearchResult([]);
            } else {
              setSearchResult(boooks)
            };
          }
        }
      }
  };
useEffect(() => {},[])

  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={'/'} className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={searchQuery}
              onChange={onSearchQueryChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ShelfSearch 
            searchResult={searchResult} 
            updateShelf={updateShelf}
          />
        </div>
      </div>
    </>
  )
}
