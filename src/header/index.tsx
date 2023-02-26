import { useState, useEffect, MouseEventHandler } from "react";
import classNames from "classnames";
import { css } from '@emotion/css'
import { Link } from "react-router-dom";

import "./index.css"
import { useCart, Item } from "../hooks/cart";
import { useIsHome } from '../hooks/is-home';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "details-disclosure": any;
        }
    }
}

function MenuDrawerSubMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return <details className={classNames({ "menu-opening": isOpen })} open={isOpen}>
        <summary onClick={(e) => { setIsOpen(true); e.preventDefault(); }} className="menu-drawer__menu-item list-menu__item link link--text focus-inset" role="button" aria-expanded="false" aria-controls="link-Shop by Artist">
            Menu Item 3
            <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" role="presentation" className="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor">
                </path>
            </svg>
            <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-caret" viewBox="0 0 10 6">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
                </path>
            </svg>
        </summary>
        <div id="link-Shop by Artist" className="menu-drawer__submenu motion-reduce" tabIndex={-1}>
            <div className="menu-drawer__inner-submenu">
                <button onClick={() => setIsOpen(false)} className="menu-drawer__close-button link link--text focus-inset" aria-expanded="true">
                    <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" role="presentation" className="icon icon-arrow" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor">
                        </path>
                    </svg>
                    Menu Item 3
                </button>
                <ul className="menu-drawer__menu list-menu" tabIndex={-1}>
                    <li>
                        <a href="/collections/eryn-lougheed" className="menu-drawer__menu-item link link--text list-menu__item focus-inset">
                            Sub menu item 1
                        </a>
                    </li>
                    <li>
                        <a href="/collections/eryn-lougheed" className="menu-drawer__menu-item link link--text list-menu__item focus-inset">
                            Sub menu item 2
                        </a>
                    </li>
                    <li>
                        <a href="/collections/eryn-lougheed" className="menu-drawer__menu-item link link--text list-menu__item focus-inset">
                            Sub menu item 3
                        </a>
                    </li>
                    <li>
                        <a href="/collections/eryn-lougheed" className="menu-drawer__menu-item link link--text list-menu__item focus-inset">
                            Sub menu item 4
                        </a>
                    </li>
                    <li>
                        <a href="/collections/eryn-lougheed" className="menu-drawer__menu-item link link--text list-menu__item focus-inset">
                            Sub menu item 5
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </details>
}

const HeaderDrawer = ({ onSummaryClick, isMenuOpen }: { onSummaryClick: MouseEventHandler, isMenuOpen: boolean }) => <div className="header-drawer">
    <details className={classNames("menu-drawer-container", { "menu-opening": isMenuOpen })}>
        <summary onClick={onSummaryClick} className="header__icon header__icon--menu header__icon--summary link focus-inset" aria-label="Menu" role="button" aria-expanded={isMenuOpen} aria-controls="menu-drawer">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-hamburger" fill="none" viewBox="0 0 18 16">
                    <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor">
                    </path></svg>

                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-close" fill="none" viewBox="0 0 18 17">
                    <path d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z" fill="currentColor">
                    </path></svg>

            </span>
        </summary>
        <div className="menu-drawer motion-reduce" tabIndex={-1}>
            <div className="menu-drawer__inner-container">
                <div className="menu-drawer__navigation-container">
                    <nav className="menu-drawer__navigation">
                        <ul className="menu-drawer__menu list-menu">
                            <li>
                                <a href="/#" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                                    Menu Item 1
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                                    Menu Item 2
                                </a>
                            </li>
                            <li>
                                <MenuDrawerSubMenu />
                            </li>
                            <li>
                                <a href="/#" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                                    Menu Item 4
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                                    Menu Item 5
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="menu-drawer__utility-links"><ul className="list list-social list-unstyled"></ul>
                    </div>
                </div>
            </div>
        </div>
    </details>
</div>

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

const Nav = () => <nav className="header__inline-menu">
    <ul className="list-menu list-menu--inline">
        <li>
            <a href="/#" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span>Menu Item 1</span>
            </a>
        </li>
        <li>
            <a href="/#" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span>Menu Item 2</span>
            </a>
        </li>
        <li>
            <details-disclosure>
                <details>
                    <summary className="header__menu-item list-menu__item link focus-inset" role="button" aria-expanded="true" aria-controls="HeaderMenu-MenuList-4">
                        <span>Menu 3</span>
                        <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-caret" viewBox="0 0 10 6">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
                            </path></svg>

                    </summary>
                    <ul className="header__submenu list-menu list-menu--disclosure caption-large motion-reduce" tabIndex={-1}>
                        <li>
                            <a href="/collections/eryn-lougheed" className="header__menu-item list-menu__item link link--text focus-inset caption-large">
                                SubMenu 1
                            </a>
                        </li>
                        <li>
                            <a href="/collections/eryn-lougheed" className="header__menu-item list-menu__item link link--text focus-inset caption-large">
                                SubMenu 2
                            </a>
                        </li>
                        <li>
                            <a href="/collections/eryn-lougheed" className="header__menu-item list-menu__item link link--text focus-inset caption-large">
                                SubMenu 3
                            </a>
                        </li>
                        <li>
                            <a href="/collections/eryn-lougheed" className="header__menu-item list-menu__item link link--text focus-inset caption-large">
                                SubMenu 4
                            </a>
                        </li>
                        <li>
                            <a href="/collections/eryn-lougheed" className="header__menu-item list-menu__item link link--text focus-inset caption-large">
                                SubMenu 5
                            </a>
                        </li>
                    </ul>
                </details>
            </details-disclosure>
        </li>
        <li>
            <a href="/#" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span>Menu Item 4</span>
            </a>
        </li>
        <li>
            <details-disclosure>
                <details>
                    <summary className="header__menu-item list-menu__item link focus-inset" role="button" aria-expanded="true" aria-controls="HeaderMenu-MenuList-4">
                        <span>Menu 5</span>
                        <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-caret" viewBox="0 0 10 6">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
                            </path></svg>

                    </summary>
                    <ul className="header__submenu list-menu list-menu--disclosure caption-large motion-reduce" tabIndex={-1}>
                        <li>
                            <a href="/collections/eryn-lougheed" className="header__menu-item list-menu__item link link--text focus-inset caption-large">
                                SubMenu 1
                            </a>
                        </li>
                        <li>
                            <a href="/collections/eryn-lougheed" className="header__menu-item list-menu__item link link--text focus-inset caption-large">
                                SubMenu 2
                            </a>
                        </li>
                        <li>
                            <a href="/collections/eryn-lougheed" className="header__menu-item list-menu__item link link--text focus-inset caption-large">
                                SubMenu 3
                            </a>
                        </li>
                        <li>
                            <a href="/collections/eryn-lougheed" className="header__menu-item list-menu__item link link--text focus-inset caption-large">
                                SubMenu 4
                            </a>
                        </li>
                        <li>
                            <a href="/collections/eryn-lougheed" className="header__menu-item list-menu__item link link--text focus-inset caption-large">
                                SubMenu 5
                            </a>
                        </li>
                    </ul>
                </details>
            </details-disclosure>
        </li>
    </ul>
</nav>

const HeaderIcons = ({ items }: { items: Item[] }) => <div className="header__icons">
    <a style={{ marginRight: 0 }} href="https://billing.stripe.com/p/login/test_5kAeWl82y7gL3w45kk" className="header__icon header__icon--cart link focus-inset">
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="2em"
            width="2em"
        >
            <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
        </svg>
    </a>
    <a href="/cart" className="header__icon header__icon--cart link focus-inset">
        <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1.8em"
            width="1.8em"
        >
            <path d="M8 1a2.5 2.5 0 012.5 2.5V4h-5v-.5A2.5 2.5 0 018 1zm3.5 3v-.5a3.5 3.5 0 10-7 0V4H1v10a2 2 0 002 2h10a2 2 0 002-2V4h-3.5zM2 5h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V5z" />
        </svg>
        <span className="visually-hidden">Cart</span>
        {items.length > 0 && <div className="cart-count-bubble">
            <span aria-hidden="true">{items.length}</span>
            <span className="visually-hidden">{items.length} item</span>
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
                    <header className="header header--top-center page-width header--has-menu">
                        <HeaderDrawer onSummaryClick={onSummaryClick} isMenuOpen={isMenuOpen} />
                        <Logo />
                        <Nav />
                        <HeaderIcons items={items} />
                    </header>
                </div>
            </div>
            {isHome && <div className={classNames("section-header sticky-header", { "sticky": isSticky })}>
                <header className="header header--top-center page-width header--has-menu">
                    <HeaderDrawer onSummaryClick={onSummaryClick} isMenuOpen={isMenuOpen} />
                    <Logo />
                    <Nav />
                    <HeaderIcons items={items} />
                </header>
            </div>
            }
        </>
    );
}

export default SectionHeader;
