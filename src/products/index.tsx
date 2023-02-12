import { Link } from "react-router-dom";

import "./index.css"
import productsData from "../data/products";

function Products() {
    return (
        <div className="section-template--15459810279592__product-grid-padding">
            <div id="ProductGridContainer">
                <div className="collection page-width">
                    <div className="loading-overlay gradient"></div>
                    <ul id="product-grid" data-id="template--15459810279592__product-grid" className="grid grid--2-col product-grid grid--3-col-desktop">
                        {productsData.map((item, index) =>
                            <li key={index} className="grid__item">
                                <div className="card-wrapper underline-links-hover">
                                    <div className="card card--standard card--media" style={{ "--ratio-percent": "125.0%" } as React.CSSProperties}>
                                        <div className="card__inner color-background-1 ratio" style={{ "--ratio-percent": "125.0%" } as React.CSSProperties}>
                                            <div className="card__media">
                                                <div className="media media--transparent media--hover-effect">
                                                    <img src={item.images[0]} alt={item.name} className="motion-reduce" />
                                                    <img src={item.images[1]} alt={item.name} className="motion-reduce" loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__content">
                                            <div className="card__information">
                                                <h3 className="card__heading h5">
                                                    <Link to={`/products/${item.id}`} className="full-unstyled-link">
                                                        {item.name}
                                                    </Link>
                                                </h3>
                                                <div className="card-information"><span className="caption-large light"></span>
                                                    <div className="price ">
                                                        <div className="price__container">
                                                            <div className="price__regular">
                                                                <span className="visually-hidden visually-hidden--inline">Regular price</span>
                                                                <span className="price-item price-item--regular">
                                                                    ${item.price}.00 AUD
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Products;
