import { useEffect } from "react";
import { css } from '@emotion/css'

import { useCart } from "../hooks/cart";

function NotFound() {
    const [, { removeItems }] = useCart();

    useEffect(() => {
        removeItems();
    }, [removeItems]);

    return (
        <div className={css({
            textAlign: 'center',
            margin: '7rem auto',
            maxWidth: 'var(--page-width)',
        })}>
            <h1 className={css({
                margin: '3rem 0 2rem',
                "@media screen and (min-width: 990px)": {
                    margin: '5rem 0 3rem'
                }
            })}>
                Thank you for your order.
            </h1>
            <p>We are processing your oder. blah blah blah...</p>
        </div>
    );
}

export default NotFound;