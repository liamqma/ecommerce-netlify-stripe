import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { css } from '@emotion/css'
import productsData from "../data/products";
import ClipLoader from "react-spinners/ClipLoader";
import { useCart, Item } from "../hooks/cart";

function CartRow({ item, removeItem, updateItem }: { item: Item, removeItem: (id: Item["id"]) => void, updateItem: (item: Item) => void }) {
    const product = productsData.find(p => p.id === item.id);
    if (!product) return null;
    return <tr className={css({
        ":last-child": {
            marginBottom: '0',
        },
        gridGap: '1.5rem',
        display: 'grid',
        gap: '1.5rem',
        gridTemplate: 'repeat(2,auto) /repeat(4,1fr)',
        marginBottom: '3.5rem',
        "@media screen and (min-width: 750px)": {
            display: "table-row"
        }
    })} key={item.id}>
        <td className={css({
            padding: '0',
            border: 'none',
            position: 'relative',
            gridRow: '1/3',
            "@media screen and (min-width: 750px)": {
                verticalAlign: 'top',
                paddingTop: '4rem',
                width: '10rem',
            }
        })}>
            <div className={css({
                display: 'inline-flex',
                position: 'relative',
                border: 'var(--media-border-width) solid rgba(var(--color-foreground), var(--media-border-opacity))',
                borderRadius: 'var(--media-radius)',
                overflow: 'visible !important',
                backgroundColor: 'rgb(var(--color-background))',
            })}>
                <img src={product.images[0]} className={css({
                    height: 'auto',
                    maxWidth: 'calc(10rem / var(--font-body-scale))',
                    "@media screen and (min-width: 750px)": {
                        maxWidth: '100%',
                    }
                })} alt={product.name} loading="lazy" />
            </div>
        </td>
        <td className={css({
            padding: '0',
            border: 'none',
            fontSize: '1.6rem',
            lineHeight: 'calc(1 + 0.4 / var(--font-body-scale))',
            gridColumn: '2/4',
            "@media screen and (min-width: 750px)": {
                paddingLeft: '4rem',
                verticalAlign: 'top',
                paddingTop: '4rem',
                width: '35rem',
            },
            "@media screen and (min-width: 990px)": {
                width: '50rem',
            }
        })}>
            <Link to={`/products/${item.id}`} className={css({
                color: 'var(--color-1)',
                textDecoration: 'none',
                display: 'block',
                margin: '0',
                maxWidth: '30rem',
                wordBreak: 'break-word',
                ":hover": {
                    textDecoration: 'underline',
                    textDecorationThickness: '.2rem',
                    textUnderlineOffset: '.3rem'
                }
            })}>{product.name}</Link>
            <div className={css({
                color: 'var(--color-1)',
                fontSize: '1.4rem',
                wordBreak: 'break-all',
                lineHeight: 'calc(1 + 0.5 / var(--font-body-scale))',
                margin: '0',
                marginTop: '0.6rem',
                maxWidth: '30rem'
            })}>
                ${product.price}.00
            </div>
        </td>
        <td className={css({
            padding: '0',
            border: 'none',
            gridColumn: '2/5',
            "@media screen and (min-width: 750px)": {
                paddingLeft: '4rem',
                verticalAlign: 'top',
                paddingTop: '4rem',
            },
            "@media screen and (min-width: 990px)": {
                paddingLeft: '6rem',
            }
        })}>
            <div className={css({
                display: 'flex'
            })}>
                <div className={css({
                    color: 'var(--color-1)',
                    position: 'relative',
                    width: 'calc(14rem / var(--font-body-scale) + var(--inputs-border-width) * 2)',
                    display: 'flex',
                    borderRadius: 'var(--inputs-radius)',
                    minHeight: 'calc((var(--inputs-border-width) * 2) + 4.5rem)',
                    ":before": {
                        pointerEvents: 'none',
                        content: '\'\'',
                        position: 'absolute',
                        inset: '0',
                        borderRadius: 'var(--inputs-radius-outset)',
                        boxShadow: 'var(--inputs-shadow-horizontal-offset) var(--inputs-shadow-vertical-offset) var(--inputs-shadow-blur-radius) rgba(var(--color-base-text), var(--inputs-shadow-opacity))',
                        zIndex: '-1',
                    },
                    ":after": {
                        pointerEvents: 'none',
                        content: '\'\'',
                        position: 'absolute',
                        inset: 'var(--inputs-border-width)',
                        border: '0.1rem solid transparent',
                        borderRadius: 'var(--inputs-radius)',
                        boxShadow: '0 0 0 var(--inputs-border-width) rgba(var(--color-foreground), var(--inputs-border-opacity))',
                        transition: 'box-shadow var(--duration-short) ease',
                        zIndex: '1'
                    }
                })}>
                    <button onClick={() => updateItem({ ...item, qty: item.qty - 1 })} className={css({
                        boxShadow: 'inherit',
                        backgroundColor: 'inherit',
                        marginLeft: 'calc(var(--inputs-border-width))',
                        width: 'calc(4.5rem / var(--font-body-scale))',
                        flexShrink: '0',
                        fontSize: '1.8rem',
                        border: '0',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'inherit',
                        padding: '0'
                    })} name="minus" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className={css({
                            width: '1rem',
                            pointerEvents: 'none'
                        })} fill="none" viewBox="0 0 10 2">
                            <path fillRule="evenodd" clipRule="evenodd" d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z" fill="currentColor">
                            </path>
                        </svg>
                    </button>
                    <input readOnly className={css({
                        color: 'inherit',
                        fontSize: '1.4rem',
                        fontWeight: 500,
                        opacity: 0.85,
                        textAlign: 'center',
                        border: 0,
                        padding: '0 0.5rem',
                        width: '100%',
                        flexGrow: 1,
                        appearance: 'none',
                        boxShadow: 'inherit',
                        backgroundColor: 'inherit',
                        ":focus-visible, :focus": {
                            backgroundColor: "rgb(var(--color-background))",
                            zIndex: 2,
                        },
                        ":-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:active": {
                            boxShadow: "0 0 0 10rem rgb(var(--color-background)) inset !important",
                            WebkitBoxShadow: "0 0 0 10rem rgb(var(--color-background)) inset !important",
                        },
                        "::-webkit-outer-spin-button, ::-webkit-inner-spin-button": {
                            WebkitAppearance: "none"
                        }
                    })} type="number" name="updates[]" value={item.qty} min="0" aria-label="Quantity for eleven vessels 2" id="Quantity-1" data-index="1" />
                    <button onClick={() => updateItem({ ...item, qty: item.qty + 1 })} className={css({
                        boxShadow: 'inherit',
                        backgroundColor: 'inherit',
                        width: 'calc(4.5rem / var(--font-body-scale))',
                        flexShrink: '0',
                        fontSize: '1.8rem',
                        border: '0',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'inherit',
                        padding: '0',
                        marginRight: 'calc(var(--inputs-border-width))',
                    })} name="plus" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className={css({
                            width: '1rem',
                            pointerEvents: 'none'
                        })} fill="none" viewBox="0 0 10 10">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z" fill="currentColor">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className={css({
                    display: 'flex',
                    marginLeft: '1rem',
                    "@media screen and (min-width: 750px)": {
                        margin: '0.5rem 0 0 1.5rem',
                    }
                })} data-index="1">
                    <button onClick={() => removeItem(item.id)} className={css({
                        margin: '0 .1rem .1rem 0',
                        minHeight: '4.5rem',
                        minWidth: 'calc(4.5rem/var(--font-body-scale))',
                        padding: '0',
                        fontSize: '1.2rem',
                        letterSpacing: '.1rem',
                        lineHeight: 'calc(1 + .2/var(--font-body-scale))',
                        alignItems: 'center',
                        WebkitAppearance: 'none',
                        appearance: 'none',
                        backgroundColor: 'transparent',
                        border: '0',
                        color: 'var(--color-1)',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        font: 'inherit',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        transition: 'box-shadow var(--duration-short) ease',
                        "@media screen and (min-width: 750px)": {
                            minHeight: '3.5rem',
                            minWidth: '3.5rem'
                        },
                        ":hover": {
                            opacity: 0.8
                        }
                    })} aria-label="Remove eleven vessels 2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" focusable="false" role="presentation" className={css({
                            height: '1.5rem',
                            width: '1.5rem'
                        })}>
                            <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                            <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </td>
        <td className={css({
            padding: '0',
            border: 'none',
            position: 'relative',
            display: 'none',
            "@media screen and (min-width: 750px)": {
                paddingLeft: '4rem',
                verticalAlign: 'top',
                paddingTop: '4rem',
                display: 'block',
            }
        })}>
            <span className={css({
                textAlign: 'right',
                fontSize: '1.6rem',
                letterSpacing: '0.1rem',
                lineHeight: 'calc(1 + 0.5 / var(--font-body-scale))',
                color: 'var(--color-1)',
                display: 'block',
                margin: '0',
                padding: '0',
                "@media screen and (min-width: 750px)": {
                    marginTop: '1rem',
                    marginBottom: '0',
                }
            })}>
                ${product.price * item.qty}.00
            </span>
        </td>
    </tr>
}

function Cart() {
    const [{ items }, { updateItem, removeItem }] = useCart();
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false)
    const totalPrice = items.reduce((total, item) => total + (productsData.find(p => p.id === item.id)?.price || 0) * item.qty, 0);

    const checkout = async () => {
        setLoading(true);
        setIsError(false);
        axios.post('/.netlify/functions/create-checkout-session', items).then(({ data }) => {
            setLoading(false);
            window.location = data.url;
        }).catch(function (err) {
            setLoading(false);
            setIsError(true);
        });
    }

    if (!items.length) return <div className={css({
        textAlign: 'center',
        padding: '3rem',
        "@media screen and (min-width: 990px)": {
            padding: '7rem 0',
        }
    })}>
        <h1 className={css({
            margin: '4.5rem 0 2rem',
            "@media screen and (min-width: 990px)": {
                margin: '0 0 3rem',
            }
        })}>Your cart is empty</h1>
        <Link to="/" className={css({
            color: 'var(--color-1)',
            textUnderlineOffset: '0.3rem',
            textDecorationThickness: '0.1rem',
            transition: 'text-decoration-thickness ease 0.1s'
        })}>Continue shopping</Link>
    </div>

    return (
        <>
            <div className={css({
                padding: '0 1.5rem',
                paddingTop: '27px',
                paddingBottom: '27px',
                maxWidth: 'var(--page-width)',
                margin: '0 auto',
                "@media screen and (min-width: 750px)": {
                    padding: '0 5rem',
                    paddingTop: '36px',
                    paddingBottom: '36px',
                },
            })}>
                <div className={css({
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    gap: '1rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap',
                    margin: '3rem 0 2rem',
                    "@media screen and (min-width: 990px)": {
                        alignItems: 'center',
                        margin: '5rem 0 3rem',
                    }
                })}>
                    <h1 className={css({
                        margin: '0',
                        lineHeight: 'calc(var(--font-heading-scale) * 3rem)'
                    })}>Your cart</h1>
                    <Link to="/" className={css({
                        color: 'var(--color-1)',
                        textUnderlineOffset: '0.3rem',
                        textDecorationThickness: '0.1rem',
                        transition: 'text-decoration-thickness ease 0.1s'
                    })}>Continue shopping</Link>
                </div>

                <div className={css({
                    position: 'relative',
                    paddingBottom: '3rem',
                    borderBottom: '0.1rem solid rgba(var(--color-foreground), 0.08)',
                    "@media screen and (min-width: 750px)": {
                        gridColumnStart: '1',
                        gridColumnEnd: '3',
                        paddingBottom: '4rem',
                    }
                })}>
                    <table className={css({
                        "@media screen and (min-width: 750px)": {
                            borderSpacing: '0',
                            borderCollapse: 'separate',
                            boxShadow: 'none',
                            width: '100%',
                            display: 'table',
                        }
                    })}>
                        <thead>
                            <tr>
                                <th className={css({
                                    textTransform: 'uppercase',
                                    textAlign: 'left',
                                    opacity: '0.85',
                                    fontWeight: '400',
                                    padding: '0',
                                    paddingBottom: '1.8rem',
                                    border: 'none',
                                    fontSize: '1rem',
                                    letterSpacing: '0.13rem',
                                    lineHeight: 'calc(1 + 0.2 / var(--font-body-scale))',
                                    "@media screen and (min-width: 750px)": {
                                        width: '50%',
                                        borderBottom: '0.1rem solid rgba(var(--color-foreground), 0.08)',
                                    },
                                    "@media screen and (min-width: 990px)": {
                                        width: '60%',
                                    }
                                })} colSpan={2} scope="col">Product</th>
                                <th className={css({
                                    paddingLeft: '4rem',
                                    textTransform: 'uppercase',
                                    textAlign: 'left',
                                    paddingBottom: '1.8rem',
                                    opacity: '0.85',
                                    fontWeight: '400',
                                    padding: '0',
                                    border: 'none',
                                    fontSize: '1rem',
                                    letterSpacing: '0.13rem',
                                    lineHeight: 'calc(1 + 0.2 / var(--font-body-scale))',
                                    display: 'none',
                                    "@media screen and (min-width: 750px)": {
                                        display: 'table-cell',
                                        borderBottom: '0.1rem solid rgba(var(--color-foreground), 0.08)',
                                    },
                                    "@media screen and (min-width: 990px)": {
                                        paddingLeft: '6rem',
                                    },
                                })} colSpan={1} scope="col">Quantity</th>
                                <th className={css({
                                    textAlign: 'right',
                                    textTransform: 'uppercase',
                                    paddingBottom: '1.8rem',
                                    opacity: '0.85',
                                    fontWeight: '400',
                                    padding: '0',
                                    border: 'none',
                                    fontSize: '1rem',
                                    letterSpacing: '0.13rem',
                                    lineHeight: 'calc(1 + 0.2 / var(--font-body-scale))',
                                    display: 'none',
                                    "@media screen and (min-width: 750px)": {
                                        paddingLeft: '4rem',
                                        display: 'table-cell',
                                        borderBottom: '0.1rem solid rgba(var(--color-foreground), 0.08)',
                                    }
                                })} colSpan={1} scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => <CartRow updateItem={updateItem} removeItem={removeItem} key={item.id} item={item} />)}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={css({
                maxWidth: 'var(--page-width)',
                margin: '0 auto',
                padding: '0 1.5rem',
                "@media screen and (min-width: 750px)": {
                    padding: '0 5rem',
                }
            })}>
                <div className={css({
                    padding: '4rem 0',
                    "@media screen and (min-width: 750px)": {
                        display: 'flex',
                        justifyContent: 'space-between',
                        border: '0',
                    }
                })}>
                    <div className={css({
                        marginLeft: 'auto',
                        width: '35rem',
                    })}>
                        <div className={css({
                            margin: '2.2rem 0 1.6rem auto',
                            textAlign: 'center',
                            display: 'block',
                            fontSize: '2rem',
                            lineHeight: 'calc(1 + 0.5 / var(--font-body-scale))',
                            letterSpacing: '0.04rem',
                            "@media screen and (min-width: 750px)": {
                                marginBottom: '2.2rem',
                                textAlign: 'right',
                            }
                        })}>
                            Subtotal: ${totalPrice}.00 AUD
                        </div>
                        <div className={css({
                            margin: '2.2rem 0 1.6rem auto',
                            textAlign: 'center',
                            display: 'block',
                            fontSize: '1.3rem',
                            lineHeight: 'calc(1 + 0.5 / var(--font-body-scale))',
                            letterSpacing: '0.04rem',
                            "@media screen and (min-width: 750px)": {
                                marginBottom: '2.2rem',
                                textAlign: 'right',
                            }
                        })}>Taxes and shipping calculated at checkout
                        </div>
                        <div className={css({
                            marginTop: '1rem',
                        })}>
                            <button onClick={checkout} disabled={loading} type="button" className={css({
                                width: '100%',
                                fontSize: '1.5rem',
                                letterSpacing: '0.1rem',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: 0,
                                cursor: 'pointer',
                                font: 'inherit',
                                color: 'var(--color-3)',
                                backgroundColor: 'var(--color-4)',
                                minHeight: 'calc(4.5rem + var(--buttons-border-width) * 2)',
                                borderRadius: 'var(--buttons-radius-outset)',
                                transition: "transform .5s ease",
                                display: 'flex',
                                ":disabled": {
                                    cursor: 'not-allowed',
                                    opacity: '.5'
                                },
                                ":hover": {
                                    transform: "scale(1.02)"
                                }
                            })}>
                                <ClipLoader color="var(--color-3)"
                                    loading={loading}
                                    cssOverride={{
                                        marginRight: '10px'
                                    }}
                                    aria-label="Loading Spinner"
                                    data-testid="loader" />
                                Check out
                            </button>
                        </div>
                        {isError && <div className={css({
                            textAlign: 'center',
                            marginTop: '1rem',
                            "@media screen and (min-width: 750px)": {
                                textAlign: 'right',
                            }
                        })}>Error! Please try again or contact us.</div>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;