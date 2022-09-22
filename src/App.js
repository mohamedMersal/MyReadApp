import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import * as BooksAPI from './BooksAPI';
import Home from "./Pages/Home";
import Search from "./Pages/Search";

function App() {
  const [booksData, setBooksData] = useState([]);
  const [text, setText] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  // Start Get All Book
  const getBooks = async () => {
    const res = await BooksAPI.getAll();
      setBooksData(res);
  };
  useEffect(() => {
    getBooks();
    // console.log('App =>', booksData);
  }, []);
  // End Get All Book

  // Start Update
  const updateShelf = async (book, nameShelf) => {
    await BooksAPI.update(book, nameShelf);
     getBooks();
     
  };
  // End Update

  // Start Search
const bookSearch = async () => {
  if(text) {
    const res = await BooksAPI.search(text);
    const x = res.map((bookSearch) => {
      booksData.forEach((book) =>{
        if(bookSearch.id === book.id) bookSearch.shelf = book.shelf 
      });
      return bookSearch
    })
    if(x.error){
      setSearchBooks([]);
    } else {
      setSearchBooks(x)
    };
  };
};
useEffect(() => {
  bookSearch()
}, [text, searchBooks]);
  // End Search

  return (
    <>
    <div className="app">
    <Routes>
      <Route path={'/'} element={ <Home 
                                    books={booksData}
                                    updateShelf={updateShelf}
                                  /> }/> 
      <Route path={'/'} element={ <Home/> }/> 
      <Route path={'search'} element={ <Search 
                                        text={text}
                                        setText={setText}
                                        searchBooks={searchBooks}
                                        updateShelf={updateShelf}
                                        /> }/>     
    </Routes>
    </div>

    </>
  );
}

export default App;
