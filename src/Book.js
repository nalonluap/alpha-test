import React, { useState } from "react";

import images from './images';


function  Book({ book, index, addToFavorite, favorite, remove }) {
  const cleanedDate = new Date(book.released).toDateString();
  const authors = book.authors.join(', ');

  const showLike = (index, favorite) => {
    if (favorite.includes(index)) {
      return (
        <button className="like-button _fill" onClick={() => addToFavorite(index)}>
          <svg width="25" height="21" viewBox="0 0 25 21" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3999 1C16.2343 1 15.1656 1.36015 14.2237 2.07046C13.3206 2.75144 12.7193 3.61879 12.3654 4.24949C12.0114 3.61875 11.4101 2.75144 10.5071 2.07046C9.5651 1.36015 8.49644 1 7.33082 1C4.078 1 1.625 3.5942 1.625 7.03437C1.625 10.7509 4.68529 13.2938 9.31816 17.1432C10.1049 17.797 10.9966 18.538 11.9235 19.3283C12.0457 19.4326 12.2026 19.49 12.3654 19.49C12.5281 19.49 12.6851 19.4326 12.8072 19.3283C13.7342 18.5379 14.6259 17.7969 15.4131 17.1428C20.0454 13.2938 23.1057 10.7509 23.1057 7.03437C23.1057 3.5942 20.6527 1 17.3999 1Z"/>
          </svg>
        </button>
      );
    }
    return (
      <button className="like-button" onClick={() => addToFavorite(index)}>
        <svg width="25" height="21" viewBox="0 0 25 21" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3999 1C16.2343 1 15.1656 1.36015 14.2237 2.07046C13.3206 2.75144 12.7193 3.61879 12.3654 4.24949C12.0114 3.61875 11.4101 2.75144 10.5071 2.07046C9.5651 1.36015 8.49644 1 7.33082 1C4.078 1 1.625 3.5942 1.625 7.03437C1.625 10.7509 4.68529 13.2938 9.31816 17.1432C10.1049 17.797 10.9966 18.538 11.9235 19.3283C12.0457 19.4326 12.2026 19.49 12.3654 19.49C12.5281 19.49 12.6851 19.4326 12.8072 19.3283C13.7342 18.5379 14.6259 17.7969 15.4131 17.1428C20.0454 13.2938 23.1057 10.7509 23.1057 7.03437C23.1057 3.5942 20.6527 1 17.3999 1Z"/>
        </svg>
      </button>
    );
  };

  /* let imageIndex = (index % 6) - imageOffset;
  if (imageIndex < 0) {
    imageIndex = 6 - ((-imageIndex) % 6);
  }
  console.log(imageOffset); */

  return (
    <div className="book" key={index}>

      {showLike(index, favorite)}

      <button className="remove-button" onClick={() => remove(index)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
        </svg>
      </button>

      <img src={images[index % 6].screenshot} alt="book" width="240" />

      <h3>Book {index + 1}</h3>
      <h2>{book.name}</h2>

      <div className="details">
        <p>👨: {authors}</p>
        <p>📖: {book.numberOfPages} pages</p>
        <p>🏘️: {book.country}</p>
        <p>⏰: {cleanedDate}</p>
      </div>


    </div>
  );
}

export default Book;
