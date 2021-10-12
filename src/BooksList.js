import React from 'react';
import Book from './Book';

function BooksList({ books, addToFavorite, favorite, filtered, remove }) {
    return (
      <div className="books">
      {books &&
        books.map((book, index) => {

          if (filtered) {
            if (!favorite.includes(index)) {
              return false;
            }
          }

          return (
            <Book book={book} index={index} addToFavorite={addToFavorite} favorite={favorite} remove={remove} />
          );
        })}
      </div>
    );
}



export default BooksList;
