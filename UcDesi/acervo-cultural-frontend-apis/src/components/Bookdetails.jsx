import React from 'react';
import '../assets/css/Bookdetails.css';

const BookDetails = ({ author, description, genre, id, image, isbn, published, publisher, title }) => {
  return (
    <div className="book-details">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h2>by {author}</h2>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>ISBN:</strong> {isbn}</p>
      <p><strong>Published Date:</strong> {published}</p>
      <p><strong>Publisher:</strong> {publisher}</p>
    </div>
  );
};

export default BookDetails;