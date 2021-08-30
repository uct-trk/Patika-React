import React from 'react'
import './Book.css'

const Book = ({book}) => {
    console.log('tekil kitap',book)
    return (
        <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={book.imageURL} alt="" />
                </a>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{book.title}</div>
                    <div className="portfolio-caption-subheading text-muted">{book.author}</div>
                </div>
            </div>
            </div>
    )
}

export default Book
