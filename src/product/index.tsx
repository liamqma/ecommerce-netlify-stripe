import { useState } from "react";
import { useParams } from 'react-router-dom';
import { css } from '@emotion/css'

import "./index.css"
import productsData from "../data/products";
import { useCart } from "../hooks/cart";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "media-gallery": any;
            "modal-opener": any;
            "product-form": any;
        }
    }
}

function Product() {
    const [, { addItem }] = useCart();
    const [showAddedToCartMessage, setShowAddedToCartMessage] = useState(false);
    const { id } = useParams();

    const product = productsData.find(p => p.id === id);
    if (!product) throw new Error("Product not found");

    const onAddToCartClick = () => {
        setShowAddedToCartMessage(true);
        addItem(product.id);
    }

    return (
        <>
            <section className="shopify-section section">
                <section className="page-width section-template--15459810574504__main-padding">
                    <div className="product product--large product--stacked grid grid--1-col grid--2-col-tablet">
                        <div className="grid__item product__media-wrapper">
                            <media-gallery role="region" className="product__media-gallery" aria-label="Gallery Viewer" data-desktop-layout="stacked">
                                <div className="slider-mobile-gutter">
                                    <ul className="product__media-list grid grid--peek list-unstyled slider slider--mobile">
                                        {product.images.map((image, index) =>
                                            <li key={index} className="product__media-item grid__item slider__slide" data-media-id="template--15459810574504__main-24773563875496">
                                                <div className="product__media media gradient global-media-settings" style={{ paddingTop: "150.00000000000003%" }}>
                                                    <img src={image} loading="lazy" width="973" height="1460" alt="" />
                                                </div>
                                            </li>
                                        )}
                                    </ul>
                                </div>
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
                                {showAddedToCartMessage && <div className="product-form__error-message-wrapper" role="alert">
                                    <span className="product-form__error-message">{product.name} has been added to your cart.</span>
                                </div>}
                                <div className="product-form__buttons">
                                    <button onClick={onAddToCartClick} type="submit" name="add" className="product-form__submit button button--full-width button--secondary">
                                        <span>Add to cart</span>
                                    </button>
                                </div>
                                <div className="product__description rte" dangerouslySetInnerHTML={{ __html: product.description }} />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <div className={css({
                maxWidth: 'var(--page-width)',
                margin: '0 auto',
                padding: '42px 1.5rem 27px 1.5rem',
                "@media screen and (min-width: 750px)": {
                    padding: '56px 5rem 36px 5rem',
                }
            })}>
                <ul className={css({
                    margin: '0',
                    padding: '0',
                    display: 'flex',
                    listStyle: 'none',
                    columnGap: 'var(--grid-mobile-horizontal-spacing)',
                    rowGap: 'var(--grid-mobile-vertical-spacing)',
                    "@media screen and (min-width: 750px)": {
                        columnGap: 'var(--grid-desktop-horizontal-spacing)',
                        rowGap: 'var(--grid-desktop-vertical-spacing)'
                    }
                })}>
                    <li className={css({
                        flexBasis: '50%'
                    })}>
                        <div className={css({
                            padding: '2.5rem'
                        })}>
                            <h3>Shipping</h3>
                            <p>Shipping rates are calculated by the size of the package and shipped via Canada Post within 10 business days.</p>
                        </div>
                    </li>
                    <li className={css({
                        flexBasis: '50%'
                    })}>
                        <div className={css({
                            padding: '2.5rem'
                        })}>
                            <h3>Returns</h3>
                            <p>All artworks can be returned in their original packaging and original condition within 14 days of receipt if it is not to your liking.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Product;