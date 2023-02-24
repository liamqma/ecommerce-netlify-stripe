import "./index.css"

import { Link } from "react-router-dom";

function SectionCollections() {
    return (
        <div className="section-template--15459810279592__product-grid-padding">
            <div id="ProductGridContainer">
                <div className="collection page-width">
                    <div className="loading-overlay gradient"></div>
                    <ul id="product-grid" data-id="template--15459810279592__product-grid" className="grid grid--2-col product-grid grid--3-col-desktop">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) =>
                            <li key={index} className="grid__item">
                                <div className="card-wrapper underline-links-hover">
                                    <div className="card card--standard card--media" style={{ "--ratio-percent": "125.0%" } as React.CSSProperties}>
                                        <div className="card__inner color-background-1 ratio" style={{ "--ratio-percent": "125.0%" } as React.CSSProperties}>
                                            <div className="card__media">
                                                <div className="media media--transparent media--hover-effect">
                                                    <img src="https://cdn.shopify.com/s/files/1/0610/0100/7272/products/Gargantua6_1500x.jpg?v=1645200403" alt={index.toString()} className="motion-reduce" />
                                                    <img src="https://cdn.shopify.com/s/files/1/0610/0100/7272/products/Gargantua6_1500x.jpg?v=1645200403" alt={index.toString()} className="motion-reduce" loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card__content">
                                            <div className="card__information">
                                                <h3 className="card__heading h5">
                                                    <Link to="/collections/collection-1" className="full-unstyled-link">
                                                        Item Name
                                                    </Link>
                                                </h3>
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

export default SectionCollections;
