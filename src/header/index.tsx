import { useState, useEffect, MouseEventHandler } from "react";
import { css } from '@emotion/css'
import { Link } from "react-router-dom";

import { useCart, Item } from "../hooks/cart";
import { useIsHome } from '../hooks/is-home';
import { IconArrow } from "../icons/arrow";

type MenuItem = {
    href?: string;
    name: string;
    children?: MenuItem[];
}

const menu: MenuItem[] = [
    {
        href: '#',
        name: 'Menu Item 1',
    },
    {
        name: 'Menu Item 2',
        children: [
            {
                href: '#',
                name: 'Sub Menu Item 1',
            },
            {
                href: '#',
                name: 'Sub Menu Item 2',
            },
            {
                href: '#',
                name: 'Sub Menu Item 3',
            },
            {
                href: '#',
                name: 'Sub Menu Item 4',
            },
            {
                href: '#',
                name: 'Sub Menu Item 5',
            },
        ]
    },
    {
        href: '#',
        name: 'Menu Item 3',
    },
    {
        href: '#',
        name: 'Menu Item 4',
    },
    {
        name: 'Menu Item 5',
        children: [
            {
                href: '#',
                name: 'Sub Menu Item 1',
            },
            {
                href: '#',
                name: 'Sub Menu Item 2',
            },
            {
                href: '#',
                name: 'Sub Menu Item 3',
            },
            {
                href: '#',
                name: 'Sub Menu Item 4',
            },
            {
                href: '#',
                name: 'Sub Menu Item 5',
            },
        ]
    }
]

const svgStyle = css({
    display: 'block',
    position: 'absolute',
    opacity: '1',
    transform: 'scale(1)',
    transition: 'transform 0.15s ease, opacity 0.15s ease',
    height: '2rem',
    width: '2rem',
    fill: 'none',
    verticalAlign: 'middle',
    "&:hover": {
        transform: 'scale(1.08)',
    }
});

const svgInvisibleStyle = css({
    visibility: 'hidden',
    opacity: '0',
    transform: 'scale(0.8)'
});

const linkStyle = css({
    display: 'flex',
    alignItems: 'center',
    lineHeight: 'calc(1 + 0.3 / var(--font-body-scale))',
    padding: '1.1rem 3.2rem',
    textDecoration: 'none',
    fontSize: '1.8rem',
    textUnderlineOffset: '0.3rem',
    color: 'var(--color-1)',
});

function MenuDrawerSubMenu({ name, children }: MenuItem) {
    const [isOpen, setIsOpen] = useState(false);

    return <details open={isOpen}>
        <summary onClick={(e) => { setIsOpen(true); e.preventDefault(); }} className={css({
            paddingRight: '5.2rem',
            display: 'flex',
            alignItems: 'center',
            lineHeight: 'calc(1 + 0.3 / var(--font-body-scale))',
            padding: '1.1rem 3.2rem',
            textDecoration: 'none',
            fontSize: '1.8rem',
            color: 'var(--color-1)',
            cursor: 'pointer',
            border: 'none',
            boxShadow: 'none',
            textUnderlineOffset: '0.3rem',
            backgroundColor: 'transparent',
            fontFamily: 'inherit',
            listStyle: 'none',
            position: 'relative',
        })} role="button" aria-expanded="false">
            {name}
            <IconArrow className={css({
                position: 'absolute',
                right: '2.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '1.5rem'
            })} />
        </summary>
        <div className={css({
            position: 'absolute',
            top: '0',
            width: '100%',
            bottom: '0',
            left: '0',
            backgroundColor: 'var(--color-2)',
            zIndex: '1',
        })} tabIndex={-1}>
            <div className={css({
                height: '100%',
                overflowX: 'hidden',
                overflowY: 'auto'
            })}>
                <button onClick={() => setIsOpen(false)} className={css({
                    marginTop: '1.5rem',
                    padding: '1.2rem 2.6rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1.4rem',
                    width: '100%',
                    backgroundColor: 'transparent',
                    color: 'rgb(var(--color-1))',
                    border: 'none',
                    boxShadow: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    textUnderlineOffset: '.3rem'
                })} aria-expanded="true">
                    <IconArrow className={css({
                        transform: 'rotate(180deg)',
                        marginRight: '1rem',
                        width: '1.5rem'
                    })} />
                    {name}
                </button>
                <ul className={css({
                    listStyle: 'none',
                    padding: '0',
                    margin: '0'
                })} tabIndex={-1}>
                    {children?.map(({ href, name }, index) => href && <li key={index}>
                        <Link to={href} key={index} className={linkStyle}>
                            {name}
                        </Link>
                    </li>)}
                </ul>
            </div>
        </div>
    </details>
}

const HeaderDrawer = ({ onSummaryClick }: { onSummaryClick: MouseEventHandler }) => {
    return <div className={css({
        justifySelf: "start",
        marginLeft: "-1.2rem",
        "@media screen and (min-width: 990px)": {
            display: 'none'
        }
    })}>
        <details className={css({ display: 'flex' })}>
            <summary onClick={onSummaryClick} className={css({
                position: 'initial',
                height: '4.4rem',
                width: '4.4rem',
                color: 'var(--color-1)',
                cursor: 'pointer',
                display: 'inline-block',
                border: 'none',
                boxShadow: 'none',
                textDecoration: 'underline',
                textUnderlineOffset: '0.3rem',
                backgroundColor: 'transparent',
                fontSize: '1.4rem',
                fontFamily: 'inherit'
            })} aria-label="Menu" role="button" aria-controls="menu-drawer">
                <span className={css({
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                })}>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className={css([svgStyle, { "details[open] &": svgInvisibleStyle }])} fill="none" viewBox="0 0 18 16">
                        <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor">
                        </path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className={css([svgStyle, { "details:not([open]) &": svgInvisibleStyle }])} fill="none" viewBox="0 0 18 17">
                        <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
                        </path>
                    </svg>
                </span>
            </summary>
            <div className={css({
                position: 'absolute',
                zIndex: '3',
                left: '0',
                top: '100%',
                width: 'calc(100vw - 4rem)',
                padding: '0',
                backgroundColor: 'var(--color-2)',
                overflowX: 'hidden'
            })} tabIndex={-1}>
                <div className={css({
                    position: 'relative',
                    height: '100%'
                })}>
                    <div className={css({
                        display: 'grid',
                        gridTemplateRows: '1fr auto',
                        alignContent: 'space-between',
                        overflowY: 'auto',
                        height: '100%'
                    })}>
                        <nav className={css({ padding: '5.6rem 0' })}>
                            <ul className={css({
                                listStyle: 'none',
                                padding: '0',
                                margin: '0'
                            })}>
                                {menu.map(({ href, name, children }, index) => <li key={index}>
                                    {children ? <MenuDrawerSubMenu href={href} name={name} children={children} /> : <Link to={"#"} className={linkStyle}>{name}</Link>}
                                </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </details>
    </div>
}

const Logo = () => <h1 className={css({
    justifySelf: 'center',
    gridArea: 'heading',
    margin: '0',
    lineHeight: '0',
})}>
    <Link to="/" className={css({
        fontSize: '40px',
        lineHeight: '40px',
        paddingTop: '20px',
        letterSpacing: '5px',
        display: 'inline-block',
        padding: '0.75rem',
        textDecoration: 'none',
        wordBreak: 'break-word',
        color: 'var(--color-1)',
    })}>
        MYSA & CO.
    </Link>
</h1>

const Nav = ({ isSticky = false }: { isSticky?: boolean }) => <nav className={css({
    "@media screen and (min-width: 990px)": {
        marginTop: isSticky ? 0 : '1.05rem',
        justifySelf: 'center',
        display: 'block',
    },
    marginLeft: '-1.2rem',
    gridArea: 'navigation',
    display: 'none'
})}>
    <ul className={css({
        "@media screen and (min-width: 990px)": {
            justifyContent: 'center',
        },
        display: 'inline-flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: '0',
        margin: '0',
    })} >
        {menu.map((menuItem, index) =>
            <li key={index}>
                {menuItem.children ?
                    <details className={css({
                        position: 'relative'
                    })}>
                        <summary className={css({
                            "details[open]>&": {
                                textDecoration: 'underline'
                            },
                            "details[open]>&:hover": {
                                textDecorationThickness: '.2rem'
                            },
                            display: 'flex',
                            alignItems: 'center',
                            lineHeight: 'calc(1 + 0.3 / var(--font-body-scale))',
                            padding: '1.2rem',
                            paddingRight: '2.7rem',
                            textDecoration: 'none',
                            color: 'var(--color-1)',
                            cursor: 'pointer',
                            border: 'none',
                            boxShadow: 'none',
                            textUnderlineOffset: '.3rem',
                            backgroundColor: 'transparent',
                            fontSize: '1.4rem',
                            fontFamily: 'inherit',
                        })} role="button" aria-expanded="true" aria-controls="HeaderMenu-MenuList-4">
                            <span>{menuItem.name}</span>
                            <svg aria-hidden="true" focusable="false" role="presentation" className={css({
                                "details[open] &": {
                                    transform: 'rotate(180deg)',
                                },
                                right: '.8rem',
                                position: 'absolute',
                                height: '.6rem',
                                top: 'calc(50% - .2rem)',
                            })} viewBox="0 0 10 6">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
                                </path>
                            </svg>
                        </summary>
                        <ul className={css({
                            padding: '2.4rem 0',
                            borderRadius: 'var(--popup-corner-radius)',
                            borderColor: 'rgba(var(--color-foreground), var(--popup-border-opacity))',
                            borderStyle: 'solid',
                            borderWidth: 'var(--popup-border-width)',
                            boxShadow: 'var(--popup-shadow-horizontal-offset) var(--popup-shadow-vertical-offset) var(--popup-shadow-blur-radius) rgba(var(--color-shadow), var(--popup-shadow-opacity))',
                            listStyle: 'none',
                            margin: '0',
                            position: 'absolute',
                            minWidth: '100%',
                            width: '20rem',
                            border: '1px solid rgba(var(--color-foreground), 0.2)',
                            backgroundColor: 'var(--color-2)',
                            fontSize: '1.3rem',
                            lineHeight: 'calc(1 + 0.5 / var(--font-body-scale))',
                            letterSpacing: '0.04rem',
                            zIndex: 1
                        })} tabIndex={-1}>
                            {menuItem.children.map((mItem, index) =>
                                <li key={index}>
                                    <a href={mItem.href} className={css({
                                        justifyContent: 'space-between',
                                        padding: '0.8rem 2.4rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        lineHeight: 'calc(1 + 0.3 / var(--font-body-scale))',
                                        textDecoration: 'none',
                                        color: 'var(--color-1)',
                                        cursor: 'pointer',
                                        border: 'none',
                                        boxShadow: 'none',
                                        textUnderlineOffset: '0.3rem',
                                        backgroundColor: 'transparent',
                                        fontSize: '1.4rem',
                                        fontFamily: 'inherit',
                                        letterSpacing: '0.04rem',
                                        ":hover": {
                                            color: 'var(--color-3)',
                                        }
                                    })}>
                                        {mItem.name}
                                    </a>
                                </li>)}
                        </ul>
                    </details>
                    :
                    <a href={menuItem.href} className={css({
                        display: 'flex',
                        alignItems: 'center',
                        lineHeight: 'calc(1 + 0.3 / var(--font-body-scale))',
                        padding: '1.2rem',
                        color: 'var(--color-1)',
                        textDecoration: 'none',
                        textUnderlineOffset: '0.3rem',
                        fontSize: '1.4rem',
                        fontFamily: 'inherit',
                        ":hover": {
                            textDecoration: 'underline',
                            color: 'var(--color-3)',
                        }
                    })}>
                        <span>{menuItem.name}</span>
                    </a>}
            </li>)}
    </ul>
</nav>

const HeaderIcons = ({ items }: { items: Item[] }) =>
    <div className={css({
        display: 'flex',
        gridArea: 'icons',
        justifySelf: 'end'
    })}>
        <a href="https://billing.stripe.com/p/login/test_5kAeWl82y7gL3w45kk" className={css({
            color: "var(--color-1)",
            marginRight: "10px",
            display: 'flex',
            alignItems: 'center',
        })}>
            <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="2.1em"
                width="2.1em"
            >
                <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
            </svg>
        </a>
        <a href="/cart" className={css({
            color: "var(--color-1)",
            position: "relative",
            display: 'flex',
            alignItems: 'center',
        })}>
            <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
            >
                <path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.491.592l-1.5 8A.5.5 0 0113 12H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z" />
            </svg>
            {items.length > 0 && <div className={css({
                position: 'absolute',
                backgroundColor: 'var(--color-3)',
                color: 'white',
                height: '1.7rem',
                width: '1.7rem',
                borderRadius: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '0.9rem',
                bottom: '0.8rem',
                left: '1.8rem',
            })}>
                {items.length}
            </div>}
        </a>
    </div>

function SectionHeader() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticy] = useState(false);
    const [{ items }] = useCart();
    const isHome = useIsHome();

    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            window.requestAnimationFrame(() => {
                if ((window.scrollY - 190) > window.innerHeight) {
                    setIsSticy(true);
                } else {
                    setIsSticy(false);
                }
            });
        });
    }, [])

    const onSummaryClick = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className={css({ marginBottom: '15px', "@media screen and (min-width: 750px)": { marginBottom: '20px' } })}>
                <div className={css({ position: 'relative' })}>
                    <header className={css({
                        display: 'grid',
                        gridTemplateAreas: '\'left-icon heading icons\'',
                        gridTemplateColumns: '1fr 2fr 1fr',
                        alignItems: 'center',
                        maxWidth: 'var(--page-width)',
                        margin: '0 auto',
                        padding: '1rem 1.5rem',
                        "@media screen and (min-width: 750px)": {
                            padding: '1rem 5rem',
                        },
                        "@media screen and (min-width: 990px)": {
                            paddingBottom: '0',
                            gridTemplateAreas: "'left-icon heading icons' 'navigation navigation navigation'",
                            paddingTop: '2rem',
                        },
                    })}>
                        <HeaderDrawer onSummaryClick={onSummaryClick} />
                        <Logo />
                        <Nav />
                        <HeaderIcons items={items} />
                    </header>
                </div>
            </div>
            {isHome && <div className={css({
                opacity: '0',
                height: '0',
                position: 'fixed',
                top: '0',
                width: '100%',
                transition: 'height 0.3s ease-out',
                zIndex: '1',
                backgroundColor: 'var(--color-2)',
                display: 'none',
                "@media screen and (min-width: 1158px)": {
                    display: 'block'
                },
                ...isSticky && {
                    opacity: '1',
                    height: '55px'
                }
            })}>
                <header className={css({
                    display: 'grid',
                    gridTemplateAreas: '\'left-icon heading icons\'',
                    gridTemplateColumns: '1fr 3fr 1fr',
                    alignItems: 'center',
                    maxWidth: 'var(--page-width)',
                    margin: '0 auto',
                    padding: '1rem 1.5rem',
                    "@media screen and (min-width: 750px)": {
                        padding: '1rem 5rem',
                    },
                    "@media screen and (min-width: 990px)": {
                        gridTemplateAreas: "'heading navigation icons'",
                        paddingTop: 0,
                        paddingBottom: 0,
                    },
                })}>
                    <HeaderDrawer onSummaryClick={onSummaryClick} />
                    <Logo />
                    <Nav isSticky={isSticky} />
                    <HeaderIcons items={items} />
                </header>
            </div>
            }
        </>
    );
}

export default SectionHeader;
