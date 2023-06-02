import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { css } from '@emotion/css'
import Swal from 'sweetalert2'

import productsData from "../data/products";
import { useCart } from "../hooks/cart";

function Product() {
    const [, { addItem }] = useCart();
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const { id } = useParams();
    const [imageIndex, setImageIndex] = useState(0);
    const product = productsData.find(p => p.id === id);
    const [selectedPriceId, setSelectedPriceId] = useState(product?.prices[0].id);
    if (!product) throw new Error("Product not found");

    const price = product.prices.find(p => p.id === selectedPriceId);
    if (!price || !selectedPriceId) throw new Error("Price not found");

    const onAddToCartClick = () => {
        Swal.fire({
            title: `${product.name} has been added to your cart.`,
            icon: 'success',
            confirmButtonColor: '#a2a28a'
        })
        addItem(selectedPriceId);
    }

    const onSelectPrice = (priceId: string) => {
        setSelectedPriceId(priceId);
    }

    return (
        <>
            <section className={css({
                paddingTop: '30px',
                paddingBottom: '0px',
                maxWidth: 'var(--page-width)',
                margin: '0 auto',
                padding: '0 1.5rem',
                "@media screen and (min-width: 750px)": {
                    padding: '40px 5rem 0',
                }
            })}>
                <div ref={imageWrapperRef} className={css({
                    display: 'flex',
                    flexWrap: 'wrap',
                })}>
                    <div className={css({
                        maxWidth: '100%',
                        width: '100%',
                        "@media screen and (min-width: 750px)": {
                            width: 'calc(50% - var(--grid-desktop-horizontal-spacing) / 2)'
                        },
                        "@media screen and (min-width: 990px)": {
                            maxWidth: '65%',
                            width: 'calc(65% - var(--grid-desktop-horizontal-spacing)/2)'
                        }
                    })}>
                        <div onMouseMove={(e) => {
                            if (imageWrapperRef.current && imageRef.current) {
                                const transformOrigin = ((e.pageX - imageWrapperRef.current.offsetLeft) / imageWrapperRef.current.getBoundingClientRect().width) * 100 + "% " + ((e.pageY - imageWrapperRef.current.offsetTop) / imageWrapperRef.current.getBoundingClientRect().height) * 100 + "%";
                                imageRef.current.style.transformOrigin = transformOrigin;
                            }
                        }} className={css({
                            width: '100%',
                            overflow: 'hidden',
                            borderRadius: '10px',
                            border: '2px solid var(--color-1)',
                        })}>
                            <img ref={imageRef} src={product.images[imageIndex]} loading="lazy" alt={`${product.name} main`} className={css({
                                display: 'block',
                                width: '100%',
                                transition: "transform 0.5s ease-out 0.2s",
                                ":hover": {
                                    transform: "scale(1.6)"
                                }
                            })} />
                        </div>
                        <ul className={css({
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: 0,
                            marginBottom: '2rem',
                            marginTop: 'var(--grid-mobile-vertical-spacing)',
                            padding: '0',
                            listStyle: 'none',
                            columnGap: 'var(--grid-mobile-horizontal-spacing)',
                            rowGap: 'var(--grid-mobile-vertical-spacing)',
                            "@media screen and (min-width: 750px)": {
                                columnGap: 'var(--grid-desktop-horizontal-spacing)',
                                rowGap: 'var(--grid-desktop-vertical-spacing)',
                                marginTop: 'var(--grid-desktop-vertical-spacing)',
                            }
                        })}>
                            {product.images.map((image, index) =>
                                <li key={index} onClick={() => setImageIndex(index)} className={css({
                                    width: 'calc((100% - var(--grid-desktop-horizontal-spacing) * 3) / 4)',
                                })}>
                                    <div className={css({
                                        paddingTop: "150%",
                                        width: '100%',
                                        position: 'relative',
                                    })}>
                                        <img src={image} loading="lazy" className={css({
                                            display: 'block',
                                            maxWidth: '100%',
                                            position: 'absolute',
                                            top: '0',
                                            left: '0',
                                            height: '100%',
                                            width: '100%',
                                            cursor: 'pointer',
                                            borderRadius: '10px',
                                            border: '2px solid var(--color-1)',
                                            ...index === imageIndex && { borderColor: "var(--color-3)" }
                                        })} alt={`${product.name} (${index + 1})`} />
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={css({
                        maxWidth: '100%',
                        width: '100%',
                        paddingLeft: '0',
                        paddingBottom: '0',
                        flexGrow: '1',
                        flexShrink: '0',
                        "@media screen and (min-width: 750px)": {
                            width: 'calc(50% - var(--grid-desktop-horizontal-spacing) / 2)',
                            paddingLeft: '5rem',
                            maxWidth: 'calc(50% - var(--grid-desktop-horizontal-spacing) / 2)'
                        },
                        "@media screen and (min-width: 990px)": {
                            paddingLeft: '4rem',
                            maxWidth: '35%',
                            width: 'calc(35% - var(--grid-desktop-horizontal-spacing) / 2)',
                        }
                    })}>
                        <div className={css({
                            "@media screen and (min-width: 750px)": {
                                display: 'block',
                                position: 'sticky',
                                top: '3rem',
                                zIndex: '2',
                                maxWidth: '60rem'
                            }
                        })}>
                            <h1 className={css({
                                wordBreak: 'break-word',
                                marginBottom: '0',
                                "@media screen and (min-width: 750px)": {
                                    marginTop: '0'
                                }
                            })}>
                                {product.name}
                            </h1>
                            <div className={css({
                                fontSize: '1.6rem',
                                lineHeight: 'calc(1 + 0.5 / var(--font-body-scale))',
                                letterSpacing: '0.13rem',
                                margin: '1.5rem 0',
                                "@media screen and (min-width: 750px)": {
                                    fontSize: '1.8rem',
                                }
                            })}>
                                ${price.unit_amount.toFixed(2)} AUD
                            </div>
                            {product.prices.length > 1 &&
                                <select defaultValue={selectedPriceId} onChange={(event) => onSelectPrice(event.target.value)} className={css({
                                    width: '100%',
                                    borderRadius: '40px',
                                    padding: '1.6rem 2rem',
                                    fontSize: '1.4rem',
                                    appearance: 'none',
                                    color: 'var(--color-1)',
                                    border: 0,
                                    backgroundImage: 'linear-gradient(45deg, transparent 50%, var(--color-3) 50%), linear-gradient(135deg, var(--color-3) 50%, transparent 50%), linear-gradient(to right, var(--color-4), var(--color-4))',
                                    backgroundPosition: 'calc(100% - 20px) calc(1.5em + 2px), calc(100% - 15px) calc(1.5em + 2px),100% 0',
                                    backgroundSize: '5px 5px, 5px 5px, 2.5em 3.5em',
                                    backgroundRepeat: 'no-repeat',
                                })}>
                                    {product.prices.map((price) => <option value={price.id} key={price.id}>{price.nickname || price.unit_amount.toFixed(2)}</option>)}
                                </select>
                            }
                            <button onClick={onAddToCartClick} type="button" className={css({
                                margin: '1.5rem 0',
                                marginBottom: '1rem',
                                display: 'flex',
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
                                ":hover": {
                                    transform: "scale(1.02)"
                                }
                            })}>
                                <span>Add to cart</span>
                            </button>
                            <div className={css({
                                margin: '2.5rem 0'
                            })} dangerouslySetInnerHTML={{ __html: product.description }} />
                        </div>
                    </div>
                </div>
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