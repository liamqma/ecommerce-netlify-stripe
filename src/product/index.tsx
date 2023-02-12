import { useParams } from 'react-router-dom';

import "./index.css"
import productsData from "../data/products";
import { useCart } from "../hooks/cart";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "media-gallery": any;
            "slider-component": any;
            "modal-opener": any;
            "product-form": any;
        }
    }
}

function Product() {
    const [, { addItem }] = useCart();
    const { id } = useParams();

    const product = productsData.find(p => p.id === id);
    if (!product) throw new Error("Product not found");

    const addItemToCart = () => {
        addItem(["price_1MZtglBx9e7RzSyHvkmq5o0M", "price_1MXMkEBx9e7RzSyHf1WhESI3"][Math.floor(Math.random() * 2)])
    }

    return (
        <>
            <section className="shopify-section section">
                <section className="page-width section-template--15459810574504__main-padding">
                    <div className="product product--large product--stacked grid grid--1-col grid--2-col-tablet">
                        <div className="grid__item product__media-wrapper">
                            <media-gallery role="region" className="product__media-gallery" aria-label="Gallery Viewer" data-desktop-layout="stacked">
                                <slider-component className="slider-mobile-gutter">
                                    <ul className="product__media-list grid grid--peek list-unstyled slider slider--mobile">
                                        {product.images.map((image, index) =>
                                            <li key={index} id="Slide-template--15459810574504__main-24773563875496" className="product__media-item grid__item slider__slide" data-media-id="template--15459810574504__main-24773563875496">
                                                <div className="product__media media gradient global-media-settings" style={{ paddingTop: "150.00000000000003%" }}>
                                                    <img src={image} loading="lazy" width="973" height="1460" alt="" />
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </slider-component>
                            </media-gallery>
                        </div>
                        <div className="product__info-wrapper grid__item">
                            <div className="product__info-container product__info-container--sticky">
                                <h1 className="product__title">
                                    {product.name}
                                </h1>
                                <div className="no-js-hidden" role="status">
                                    <div className="price price--large price--show-badge">
                                        <div className="price__container">
                                            <div className="price__regular">
                                                <span className="price-item price-item--regular">
                                                    ${product.price}.00 AUD
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-form__buttons">
                                    <button onClick={addItemToCart} type="submit" name="add" className="product-form__submit button button--full-width button--secondary">
                                        <span>Add to cart</span>
                                    </button>
                                </div>
                                <div>
                                    <form method="post" action="/cart/add" id="product-form-installment" acceptCharset="UTF-8" className="installment caption-large" >
                                        <input type="hidden" name="form_type" value="product" />
                                        <input type="hidden" name="utf8" value="✓" />
                                        <input type="hidden" name="id" value="42007872536744" />
                                    </form>
                                </div>
                                <div className="product__description rte" dangerouslySetInnerHTML={{ __html: product.description }} />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="shopify-section section">
                <div className="multicolumn color-background-1 background-primary no-heading">
                    <div className="page-width section-template--15459810574504__1643899285fb6b3031-padding isolate">
                        <slider-component className="slider-mobile-gutter">
                            <ul className="multicolumn-list contains-content-container grid grid--1-col grid--2-col-desktop grid--3-col-tablet">
                                <li className="multicolumn-list__item grid__item">
                                    <div className="multicolumn-card content-container">
                                        <div className="multicolumn-card__info">
                                            <h3>Shipping</h3>
                                            <div className="rte">
                                                <p>Shipping rates are calculated by the size of the package and shipped via Canada Post within 10 business days.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="multicolumn-list__item grid__item">
                                    <div className="multicolumn-card content-container">
                                        <div className="multicolumn-card__info">
                                            <h3>Returns</h3>
                                            <div className="rte">
                                                <p>All artworks can be returned in their original packaging and original condition within 14 days of receipt if it is not to your liking.</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </slider-component>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;