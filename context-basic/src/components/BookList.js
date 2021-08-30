import React from "react";
import Book from "./Book";
import "./BookList.css";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  // console.log('gelenler', books)


  return (
    <BookContext.Consumer>
      {value => {
        return (
          <section className="page-section bg-light" id="portfolio">
            <div className="container">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">BookFolio</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
              <div className="row">{value.map((book, index) => {
                return <Book book={book} key={index} />;
              })}</div>
            </div>
          </section>
        )
      }}
    </BookContext.Consumer>
  );
};

export default BookList;
