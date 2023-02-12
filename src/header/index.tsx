import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import "./index.css"
import logo from "./logo.png"
import { useCart } from "../hooks/cart";

function SectionHeader() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [{ items }] = useCart();

    const onSummaryClick = () => {
        document.getElementsByTagName("body").item(0)?.classList.toggle('overflow-hidden-tablet');
        setMenuOpen(!isMenuOpen);
    }

    return (
        <div id="shopify-section-header" className="shopify-section section-header">
            <div className="header-wrapper color-background-1">
                <header className="header header--top-center page-width header--has-menu">
                    <div className="header-drawer">
                        <details id="Details-menu-drawer-container" className={classNames("menu-drawer-container", { "menu-opening": isMenuOpen })}>
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
                            <div id="menu-drawer" className="menu-drawer motion-reduce" tabIndex={-1}>
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
                                                    <a href="/#" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                                                        Menu Item 3
                                                    </a>
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
                    <h1 className="header__heading">
                        <Link to="/" className="header__heading-link link link--text focus-inset">
                            <img src={logo} loading="lazy" className="header__heading-logo" alt="MYSA & CO." />
                        </Link>
                    </h1>
                    <nav className="header__inline-menu">
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
                                <a href="/#" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                                    <span>Menu Item 3</span>
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                                    <span>Menu Item 4</span>
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                                    <span>Menu Item 5</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__icons">
                        <a href="/cart" className="header__icon header__icon--cart link focus-inset" id="cart-icon-bubble">
                            <svg className="icon icon-cart" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
                                <path fill="currentColor" fillRule="evenodd" d="M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z"></path>
                            </svg>
                            <span className="visually-hidden">Cart</span>
                            {items.length > 0 && <div className="cart-count-bubble">
                                <span aria-hidden="true">{items.length}</span>
                                <span className="visually-hidden">{items.length} item</span>
                            </div>}
                        </a>
                    </div>
                </header>
            </div>
        </div >
    );
}

export default SectionHeader;
