import React, { useState, DOMAttributes } from 'react';

import "./index.css"

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
    return (
        <>
            <section id="shopify-section-template--15459810574504__main" className="shopify-section section">
                <section className="page-width section-template--15459810574504__main-padding">
                    <div className="product product--large product--stacked grid grid--1-col grid--2-col-tablet">
                        <div className="grid__item product__media-wrapper">
                            <media-gallery id="MediaGallery-template--15459810574504__main" role="region" className="product__media-gallery" aria-label="Gallery Viewer" data-desktop-layout="stacked">
                                <div id="GalleryStatus-template--15459810574504__main" className="visually-hidden" role="status"></div>
                                <slider-component id="GalleryViewer-template--15459810574504__main" className="slider-mobile-gutter">
                                    <a className="skip-to-content-link button visually-hidden" href="#ProductInfo-template--15459810574504__main">
                                        Skip to product information
                                    </a>
                                    <ul id="Slider-Gallery-template--15459810574504__main" className="product__media-list grid grid--peek list-unstyled slider slider--mobile">
                                        <li id="Slide-template--15459810574504__main-24773563875496" className="product__media-item grid__item slider__slide" data-media-id="template--15459810574504__main-24773563875496">
                                            <div className="product__media media gradient global-media-settings" style={{ paddingTop: "150.00000000000003%" }}>
                                                <img srcSet="//cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_493x.jpg?v=1645200680 493w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_600x.jpg?v=1645200680 600w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_713x.jpg?v=1645200680 713w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_823x.jpg?v=1645200680 823w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_990x.jpg?v=1645200680 990w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1100x.jpg?v=1645200680 1100w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1206x.jpg?v=1645200680 1206w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1346x.jpg?v=1645200680 1346w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1426x.jpg?v=1645200680 1426w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1646x.jpg?v=1645200680 1646w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1946x.jpg?v=1645200680 1946w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart.jpg?v=1645200680 2000w" src="//cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1946x.jpg?v=1645200680" sizes="(min-width: 1200px) 715px, (min-width: 990px) calc(65.0vw - 10rem), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)" loading="lazy" width="973" height="1460" alt="" />
                                            </div>
                                        </li>
                                        <li id="Slide-template--15459810574504__main-24773563875496" className="product__media-item grid__item slider__slide" data-media-id="template--15459810574504__main-24773563875496">
                                            <div className="product__media media gradient global-media-settings" style={{ paddingTop: "150.00000000000003%" }}>
                                                <img srcSet="//cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_493x.jpg?v=1645200680 493w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_600x.jpg?v=1645200680 600w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_713x.jpg?v=1645200680 713w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_823x.jpg?v=1645200680 823w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_990x.jpg?v=1645200680 990w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1100x.jpg?v=1645200680 1100w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1206x.jpg?v=1645200680 1206w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1346x.jpg?v=1645200680 1346w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1426x.jpg?v=1645200680 1426w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1646x.jpg?v=1645200680 1646w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1946x.jpg?v=1645200680 1946w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart.jpg?v=1645200680 2000w" src="//cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1946x.jpg?v=1645200680" sizes="(min-width: 1200px) 715px, (min-width: 990px) calc(65.0vw - 10rem), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)" loading="lazy" width="973" height="1460" alt="" />
                                            </div>
                                        </li>
                                        <li id="Slide-template--15459810574504__main-24773563875496" className="product__media-item grid__item slider__slide" data-media-id="template--15459810574504__main-24773563875496">
                                            <div className="product__media media gradient global-media-settings" style={{ paddingTop: "150.00000000000003%" }}>
                                                <img srcSet="//cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_493x.jpg?v=1645200680 493w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_600x.jpg?v=1645200680 600w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_713x.jpg?v=1645200680 713w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_823x.jpg?v=1645200680 823w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_990x.jpg?v=1645200680 990w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1100x.jpg?v=1645200680 1100w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1206x.jpg?v=1645200680 1206w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1346x.jpg?v=1645200680 1346w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1426x.jpg?v=1645200680 1426w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1646x.jpg?v=1645200680 1646w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1946x.jpg?v=1645200680 1946w,
          //cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart.jpg?v=1645200680 2000w" src="//cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_1946x.jpg?v=1645200680" sizes="(min-width: 1200px) 715px, (min-width: 990px) calc(65.0vw - 10rem), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)" loading="lazy" width="973" height="1460" alt="" />
                                            </div>
                                        </li>
                                    </ul>
                                </slider-component>
                            </media-gallery>
                        </div>
                        <div className="product__info-wrapper grid__item">
                            <div id="ProductInfo-template--15459810574504__main" className="product__info-container product__info-container--sticky"><p className="product__text caption-with-letter-spacing"></p>
                                <h1 className="product__title">
                                    seven vessels 2
                                </h1>
                                <p className="product__text subtitle">Product subtitle</p>
                                <div className="product-form__buttons">
                                    <button type="submit" name="add" className="product-form__submit button button--full-width button--secondary">
                                        <span>Add to cart
                                        </span>
                                        <div className="loading-overlay__spinner hidden">
                                            <svg aria-hidden="true" focusable="false" role="presentation" className="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                                <circle className="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                                            </svg>
                                        </div>
                                    </button>
                                    <button type="button" className="shopify-payment-button__button shopify-payment-button__button--unbranded BUz42FHpSPncCPJ4Pr_f jjzYeefyWpPZLH9pIgyw RWJ0IfBjxIhflh4AIrUw">Buy it now</button>
                                </div>
                                <div className="no-js-hidden" id="price-template--15459810574504__main" role="status">
                                    <div className="price price--large price--show-badge">
                                        <div className="price__container"><div className="price__regular">
                                            <span className="visually-hidden visually-hidden--inline">Regular price</span>
                                            <span className="price-item price-item--regular">
                                                $250.00 AUD
                                            </span>
                                        </div>
                                            <small className="unit-price caption hidden">
                                                <span className="visually-hidden">Unit price</span>
                                                <span className="price-item price-item--last">
                                                    <span></span>
                                                    <span aria-hidden="true">/</span>
                                                    <span className="visually-hidden">&nbsp;per&nbsp;</span>
                                                    <span>
                                                    </span>
                                                </span>
                                            </small>
                                        </div><span className="badge price__badge-sale color-accent-2">
                                            Sale
                                        </span>

                                        <span className="badge price__badge-sold-out color-inverse">
                                            Sold out
                                        </span></div>
                                </div>
                                <div>
                                    <form method="post" action="/cart/add" id="product-form-installment" accept-charset="UTF-8" className="installment caption-large" >
                                        <input type="hidden" name="form_type" value="product" />
                                        <input type="hidden" name="utf8" value="✓" />
                                        <input type="hidden" name="id" value="42007872536744" />
                                    </form>
                                </div>
                                <div>
                                </div>

                                <div className="product__description rte">
                                    <p><i><span style={{ fontWeight: 400 }}>This is a demonstration store. You can purchase products like this from </span></i><a href="https://nintheditions.com/" target="_blank"><i><span style={{ fontWeight: 400 }}>Ninth Editions</span></i></a><i><span style={{ fontWeight: 400 }}>.</span></i></p>
                                    <p><strong>Details</strong><br /><strong></strong></p>
                                    <ul>
                                        <li><span data-mce-fragment="1">Original artwork, 2021</span></li>
                                        <li>Gouache&nbsp;on paper&nbsp;with deckled edge</li>
                                        <li>10&nbsp;x 12 inches</li>
                                        <li>Unframed&nbsp;</li>
                                    </ul>
                                    <p><strong>Suggested Framing</strong></p>
                                    <div>
                                        <ul>
                                            <li>Thin white or&nbsp;natural wood frame</li>
                                            <li>We highly recommend UV protected glass to&nbsp;preserve the integrity of your artwork from prolonged light exposure&nbsp;</li>
                                        </ul>
                                    </div>
                                    <strong>Authenticity</strong>
                                    <div>
                                        <ul>
                                            <li>Artwork&nbsp;is signed by the artist Leia Bryans&nbsp;</li>
                                        </ul>
                                    </div>
                                </div></div>
                        </div>
                    </div>
                </section>
            </section>
            <section id="shopify-section-template--15459810574504__1643899285fb6b3031" className="shopify-section section">
                <div className="multicolumn color-background-1 background-primary no-heading">
                    <div className="page-width section-template--15459810574504__1643899285fb6b3031-padding isolate">
                        <slider-component className="slider-mobile-gutter">
                            <ul className="multicolumn-list contains-content-container grid grid--1-col grid--2-col-desktop grid--3-col-tablet" id="Slider-template--15459810574504__1643899285fb6b3031">
                                <li id="Slide-template--15459810574504__1643899285fb6b3031-1" className="multicolumn-list__item grid__item">
                                    <div className="multicolumn-card content-container"><div className="multicolumn-card__info"><h3>Shipping</h3><div className="rte"><p>Shipping rates are calculated by the size of the package and shipped via Canada Post within 10 business days.</p></div></div>
                                    </div>
                                </li>
                                <li id="Slide-template--15459810574504__1643899285fb6b3031-2" className="multicolumn-list__item grid__item">
                                    <div className="multicolumn-card content-container"><div className="multicolumn-card__info"><h3>Returns</h3><div className="rte"><p>All artworks can be returned in their original packaging and original condition within 14 days of receipt if it is not to your liking.</p></div></div>
                                    </div>
                                </li>
                            </ul>
                        </slider-component>
                        <div className="center"></div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Product;