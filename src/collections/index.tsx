import { css } from '@emotion/css'

import { Link } from "react-router-dom";

function SectionCollections() {
    return (
        <div className={css({
            paddingTop: '27px',
            paddingBottom: '45px',
            "@media screen and (min-width: 750px)": {
                paddingTop: '36px',
                paddingBottom: '60px',
            }
        })}>
            <div className={css({
                maxWidth: 'var(--page-width)',
                margin: '0 auto',
                padding: '0 1.5rem',
                "@media screen and (min-width: 750px)": {
                    padding: '0 5rem'
                }
            })}>
                <ul className={css({
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginBottom: '2rem',
                    padding: '0',
                    listStyle: 'none',
                    columnGap: 'var(--grid-mobile-horizontal-spacing)',
                    rowGap: 'var(--grid-mobile-vertical-spacing)',
                    ":last-child": {
                        marginBottom: '0',
                    },
                    "@media screen and (min-width: 750px)": {
                        columnGap: 'var(--grid-desktop-horizontal-spacing)',
                        rowGap: 'var(--grid-desktop-vertical-spacing)',
                    },

                })}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) =>
                        <li className={css({
                            maxWidth: 'calc(50% - var(--grid-mobile-horizontal-spacing) / 2)',
                            flexGrow: '1',
                            flexShrink: '0',
                            width: 'calc(50% - var(--grid-mobile-horizontal-spacing) / 2)',
                            "@media screen and (min-width: 750px)": {
                                width: 'calc(50% - var(--grid-desktop-horizontal-spacing) / 2)',
                                maxWidth: 'calc(50% - var(--grid-desktop-horizontal-spacing) / 2)'
                            },
                            "@media screen and (min-width: 990px)": {
                                width: 'calc(33.33% - var(--grid-desktop-horizontal-spacing) * 2 / 3)',
                                maxWidth: 'calc(33.33% - var(--grid-desktop-horizontal-spacing) * 2 / 3)',
                            },
                        })} key={index}>
                            <div className={css({
                                color: 'inherit',
                                height: '100%',
                                position: 'relative',
                                textDecoration: 'none',
                                textAlign: 'center',
                                ":hover img": {
                                    transform: 'scale(1.2)'
                                }
                            })}>
                                <div className={css({
                                    ":before": {
                                        content: "''",
                                        width: '0',
                                        height: '0',
                                        paddingBottom: '125.0%'
                                    },
                                    position: 'relative',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'stretch',
                                })}>
                                    <div className={css({
                                        overflow: 'hidden',
                                        borderRadius: 'calc(var(--card-corner-radius) - var(--card-border-width) - var(--card-image-padding))',
                                        margin: 'var(--card-image-padding)',
                                        width: 'calc(100% - 2 * var(--card-image-padding))',
                                        bottom: '0',
                                        position: 'absolute',
                                        top: '0'
                                    })}>
                                        <div className={css({
                                            width: '100%',
                                            bottom: '0',
                                            position: 'absolute',
                                            top: '0',
                                            backgroundColor: 'transparent',
                                            display: 'block',
                                            overflow: 'hidden'
                                        })}>
                                            <img src="https://cdn.shopify.com/s/files/1/0610/0100/7272/products/Gargantua6_1500x.jpg?v=1645200403" alt={index.toString()} className={css({
                                                display: 'block',
                                                maxWidth: '100%',
                                                position: 'absolute',
                                                top: '0',
                                                left: '0',
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center center',
                                                transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                            })} />
                                        </div>
                                    </div>
                                </div>
                                <div className={css({
                                    display: 'grid',
                                    gridTemplateRows: 'minmax(0, 1fr) max-content minmax(0, 1fr)',
                                    width: '100%',
                                    padding: '0'
                                })}>
                                    <div className={css({
                                        paddingLeft: '0',
                                        paddingRight: '0',
                                        gridRowStart: '2',
                                        padding: '1.3rem 1rem',
                                        "@media screen and (min-width: 750px)": {
                                            paddingBottom: '1.7rem',
                                            paddingTop: '1.7rem'
                                        }
                                    })}>
                                        <h3 className={css({
                                            marginTop: '0',
                                            ":last-child": {
                                                marginBottom: '0',
                                            },
                                            fontSize: 'calc(var(--font-heading-scale) * 1.7rem)',
                                            "@media only screen and (min-width: 750px)": {
                                                fontSize: 'calc(var(--font-heading-scale) * 1.8rem)'
                                            }
                                        })}>
                                            <Link to="/collections/collection-1" className={css({
                                                textDecoration: 'none',
                                                color: 'currentColor',
                                                display: 'block',
                                                ":after": {
                                                    bottom: '0',
                                                    content: '""',
                                                    left: '0',
                                                    outlineOffset: '.3rem',
                                                    position: 'absolute',
                                                    right: '0',
                                                    top: '0'
                                                }
                                            })}>
                                                Item Name
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </li>)}
                </ul>
            </div>
        </div>
    );
}

export default SectionCollections;
