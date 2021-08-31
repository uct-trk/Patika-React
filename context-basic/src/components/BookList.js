import React from "react";
import Book from "./Book";
import "./BookList.css";
import { BookContext } from "../context/BookContext";
import { ThemeContext } from "../context/ThemeContext";

const BookList = () => {

  return (
    <ThemeContext.Consumer>{(contextTheme) => (
      <BookContext.Consumer>
        {contextBook => {
          const { books } = contextBook;
          console.log('gelenler booklist', books)

          const { changeTheme, isDarkTheme, dark, light } = contextTheme;
          console.log("tema rengi",isDarkTheme)
          console.log("tema değiştir", changeTheme)
          const tema = isDarkTheme ? dark : light;
          console.log("tema", tema)

          return (
            <section className="page-section" style={{ background: tema.bg, color: tema.txt }} id="portfolio">
              <div className="container">
                <div className="text-center">
                  <h2 className="section-heading text-uppercase">BookFolio</h2>
                  <h3 className="section-subheading text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                  <button type="button" className="btn btn-sm btn-info" style={{ marginTop: '-70px' }}
                    onClick={changeTheme}>Change Theme</button>
                </div>
                <div className="row">{books.map((book, index) => {
                  return <Book book={book} key={index} />;
                })}</div>
              </div>
            </section>
          )
        }}
      </BookContext.Consumer>
    )}
    </ThemeContext.Consumer>
  );
};

export default BookList;
