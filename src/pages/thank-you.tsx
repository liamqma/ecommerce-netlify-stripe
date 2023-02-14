import { useEffect } from "react";

import { useCart } from "../hooks/cart";
import "./not-found.css"

function NotFound() {
    const [, { removeItems }] = useCart();

    useEffect(() => {
        removeItems();
    }, [removeItems]);

    return (
        <div id="shopify-section-template--15459810148520__main" className="shopify-section">
            <div className="template-404 page-width page-margin center">
                <h1 className="title">
                    Thank you for your order.
                </h1>
                <p>We are processing your oder. blah blah blah...</p>
            </div>
        </div>
    );
}

export default NotFound;