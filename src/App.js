import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BooksList from './BooksList';

import './css/App.css';

function App() {
  const [books, setBooks] = useState(null);

  // const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  // const fetchData = async () => {
  //   const response = await axios.get(apiURL)
  //   setBooks(response.data)
  // }
  // fetchData();


  useEffect(() => {
    const apiUrl = 'https://www.anapioficeandfire.com/api/books?pageSize=30';
    axios.get(apiUrl).then((resp) => {
      const allBooks = resp.data;
      setBooks(allBooks);
    });
  }, [setBooks]);




  const [favorite, setFavorite] = useState([]);


  const addToFavorite = id => {
    if (!favorite.includes(id)) {
      setFavorite(favorite.concat(id));
    } else {
      removeFavorite(id);
    }
  };

 // const [imageOffset, setImageOffset] = useState(0);
  const remove = index => {
    let temp = [...books.slice(0, index), ...books.slice(index + 1)];
    setBooks(temp);
  //  setImageOffset( imageOffset+1 );
  };

  const removeFavorite = id => {
    let index = favorite.indexOf(id);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
  };


  const [filtered, filter] = useState(false);


  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>

      <div>
        <button className="filter-button" onClick={() => filter(!filtered)}>
          Filter Books
        </button>
      </div>

      <BooksList books={books} addToFavorite={addToFavorite} favorite={favorite} filtered={filtered} remove={remove} />

    </div>
  );
}

export default App;
