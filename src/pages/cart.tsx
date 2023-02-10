import "./cart.css"

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "cart-items": any;
            "quantity-input": any;
            "cart-remove-button": any;
        }
    }
}

function Cart() {
    return (
        <>
            <div id="shopify-section-template--15459810246824__cart-items" className="shopify-section">
                <cart-items class="page-width section-template--15459810246824__cart-items-padding">
                    <div className="title-wrapper-with-link">
                        <h1 className="title title--primary">Your cart</h1>
                        <a href="/collections/all" className="underlined-link">Continue shopping</a>
                    </div>

                    <div className="cart__warnings">
                        <h1 className="cart__empty-text">Your cart is empty</h1>
                        <a href="/collections/all" className="button">
                            Continue shopping
                        </a></div>

                    <form action="/cart" className="cart__contents critical-hidden" method="post" id="cart">
                        <div className="cart__items" id="main-cart-items" data-id="template--15459810246824__cart-items">
                            <div className="js-contents"><table className="cart-items">
                                <thead>
                                    <tr>
                                        <th className="caption-with-letter-spacing" colSpan={2} scope="col">Product</th>
                                        <th className="medium-hide large-up-hide right caption-with-letter-spacing" colSpan={1} scope="col">Total</th>
                                        <th className="cart-items__heading--wide small-hide caption-with-letter-spacing" colSpan={1} scope="col">Quantity</th>
                                        <th className="small-hide right caption-with-letter-spacing" colSpan={1} scope="col">Total</th>
                                    </tr>
                                </thead>

                                <tbody><tr className="cart-item" id="CartItem-1">
                                    <td className="cart-item__media">


                                        <a href="/products/eleven-vessels-2?variant=42007873749160" className="cart-item__link" aria-hidden="true" tabIndex={-1}> </a>
                                        <div className="cart-item__image-container gradient global-media-settings">
                                            <img src="//cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels2_framed_300x.jpg?v=1645200684" className="cart-item__image" alt="" loading="lazy" width="150" height="226" />
                                        </div>

                                    </td>

                                    <td className="cart-item__details"><a href="/products/eleven-vessels-2?variant=42007873749160" className="cart-item__name h4 break">eleven vessels 2</a><div className="product-option">
                                        $600.00
                                    </div><dl></dl>

                                        <p className="product-option"></p>
                                        <ul className="discounts list-unstyled" aria-label="Discount"></ul>
                                    </td>

                                    <td className="cart-item__totals right medium-hide large-up-hide">
                                        <div className="loading-overlay hidden">
                                            <div className="loading-overlay__spinner">
                                                <svg aria-hidden="true" focusable="false" role="presentation" className="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                                    <circle className="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="cart-item__price-wrapper"><span className="price price--end">
                                            $600.00
                                        </span></div>
                                    </td>

                                    <td className="cart-item__quantity">
                                        <div className="cart-item__quantity-wrapper">
                                            <label className="visually-hidden" htmlFor="Quantity-1">
                                                Quantity
                                            </label>
                                            <quantity-input class="quantity">
                                                <button className="quantity__button no-js-hidden" name="minus" type="button">
                                                    <span className="visually-hidden">Decrease quantity for eleven vessels 2</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-minus" fill="none" viewBox="0 0 10 2">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor">
                                                        </path></svg>

                                                </button>
                                                <input className="quantity__input" type="number" name="updates[]" value="1" min="0" aria-label="Quantity for eleven vessels 2" id="Quantity-1" data-index="1" />
                                                <button className="quantity__button no-js-hidden" name="plus" type="button">
                                                    <span className="visually-hidden">Increase quantity for eleven vessels 2</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-plus" fill="none" viewBox="0 0 10 10">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor">
                                                        </path></svg>

                                                </button>
                                            </quantity-input>

                                            <cart-remove-button id="Remove-1" data-index="1">
                                                <a href="/cart/change?id=42007873749160:1b6a8d77e7a8af75a92ba03ac15e89b0&amp;quantity=0" className="button button--tertiary" aria-label="Remove eleven vessels 2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation" className="icon icon-remove">
                                                        <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                                                        <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                                                    </svg>

                                                </a>
                                            </cart-remove-button>
                                        </div>
                                        <div className="cart-item__error" id="Line-item-error-1" role="alert">
                                            <small className="cart-item__error-text"></small>
                                            <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-error" viewBox="0 0 13 13">
                                                <circle cx="6.5" cy="6.50049" r="5.5" stroke="white" stroke-width="2"></circle>
                                                <circle cx="6.5" cy="6.5" r="5.5" fill="#EB001B" stroke="#EB001B" stroke-width="0.7"></circle>
                                                <path d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z" fill="white"></path>
                                                <path d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z" fill="white" stroke="#EB001B" stroke-width="0.7">
                                                </path></svg>
                                        </div>
                                    </td>

                                    <td className="cart-item__totals right small-hide">
                                        <div className="loading-overlay hidden">
                                            <div className="loading-overlay__spinner">
                                                <svg aria-hidden="true" focusable="false" role="presentation" className="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                                    <circle className="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="cart-item__price-wrapper"><span className="price price--end">
                                            $600.00
                                        </span></div>
                                    </td>
                                </tr><tr className="cart-item" id="CartItem-2">
                                        <td className="cart-item__media">


                                            <a href="/products/eleven-vessels?variant=42007873650856" className="cart-item__link" aria-hidden="true" tabIndex={-1}> </a>
                                            <div className="cart-item__image-container gradient global-media-settings">
                                                <img src="//cdn.shopify.com/s/files/1/0610/0100/7272/products/elevenvessels_LeiaBryans_22x30inches_gouache_originalart_300x.jpg?v=1645200680" className="cart-item__image" alt="" loading="lazy" width="150" height="226" />
                                            </div>

                                        </td>

                                        <td className="cart-item__details"><a href="/products/eleven-vessels?variant=42007873650856" className="cart-item__name h4 break">eleven vessels</a><div className="product-option">
                                            $600.00
                                        </div><dl></dl>

                                            <p className="product-option"></p>
                                            <ul className="discounts list-unstyled" aria-label="Discount"></ul>
                                        </td>

                                        <td className="cart-item__totals right medium-hide large-up-hide">
                                            <div className="loading-overlay hidden">
                                                <div className="loading-overlay__spinner">
                                                    <svg aria-hidden="true" focusable="false" role="presentation" className="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="cart-item__price-wrapper"><span className="price price--end">
                                                $600.00
                                            </span></div>
                                        </td>

                                        <td className="cart-item__quantity">
                                            <div className="cart-item__quantity-wrapper">
                                                <label className="visually-hidden" htmlFor="Quantity-2">
                                                    Quantity
                                                </label>
                                                <quantity-input class="quantity">
                                                    <button className="quantity__button no-js-hidden" name="minus" type="button">
                                                        <span className="visually-hidden">Decrease quantity for eleven vessels</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-minus" fill="none" viewBox="0 0 10 2">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor">
                                                            </path></svg>

                                                    </button>
                                                    <input className="quantity__input" type="number" name="updates[]" value="1" min="0" aria-label="Quantity for eleven vessels" id="Quantity-2" data-index="2" />
                                                    <button className="quantity__button no-js-hidden" name="plus" type="button">
                                                        <span className="visually-hidden">Increase quantity for eleven vessels</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-plus" fill="none" viewBox="0 0 10 10">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor">
                                                            </path></svg>

                                                    </button>
                                                </quantity-input>

                                                <cart-remove-button id="Remove-2" data-index="2">
                                                    <a href="/cart/change?id=42007873650856:05a764aa1f3d4597eca0a14dcd2f8676&amp;quantity=0" className="button button--tertiary" aria-label="Remove eleven vessels">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation" className="icon icon-remove">
                                                            <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                                                            <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                                                        </svg>

                                                    </a>
                                                </cart-remove-button>
                                            </div>
                                            <div className="cart-item__error" id="Line-item-error-2" role="alert">
                                                <small className="cart-item__error-text"></small>
                                                <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-error" viewBox="0 0 13 13">
                                                    <circle cx="6.5" cy="6.50049" r="5.5" stroke="white" stroke-width="2"></circle>
                                                    <circle cx="6.5" cy="6.5" r="5.5" fill="#EB001B" stroke="#EB001B" stroke-width="0.7"></circle>
                                                    <path d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z" fill="white"></path>
                                                    <path d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z" fill="white" stroke="#EB001B" stroke-width="0.7">
                                                    </path></svg>
                                            </div>
                                        </td>

                                        <td className="cart-item__totals right small-hide">
                                            <div className="loading-overlay hidden">
                                                <div className="loading-overlay__spinner">
                                                    <svg aria-hidden="true" focusable="false" role="presentation" className="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="cart-item__price-wrapper"><span className="price price--end">
                                                $600.00
                                            </span></div>
                                        </td>
                                    </tr></tbody>
                            </table></div>
                        </div>

                        <p className="visually-hidden" id="cart-live-region-text" aria-live="polite" role="status"></p>
                        <p className="visually-hidden" id="shopping-cart-line-item-status" aria-live="polite" aria-hidden="true" role="status">Loading...</p>
                    </form>
                </cart-items>
            </div>
            <div id="shopify-section-template--15459810246824__cart-footer" className="shopify-section cart__footer-wrapper">
                <div className="page-width" id="main-cart-footer" data-id="template--15459810246824__cart-footer">
                    <div>
                        <div className="cart__footer"><div className="cart__blocks">

                            <div className="js-contents">
                                <div className="totals">
                                    <h3 className="totals__subtotal">Subtotal</h3>
                                    <p className="totals__subtotal-value">$1,200.00 AUD</p>
                                </div>

                                <div></div>

                                <small className="tax-note caption-large rte">Taxes and shipping calculated at checkout
                                </small>
                            </div>
                            <div className="cart__ctas">
                                <noscript>
                                    <button type="submit" className="cart__update-button button button--secondary" form="cart">
                                        Update
                                    </button>
                                </noscript>

                                <button type="submit" id="checkout" className="cart__checkout-button button" name="checkout" form="cart">
                                    Check out
                                </button>
                            </div>

                            <div id="cart-errors"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;