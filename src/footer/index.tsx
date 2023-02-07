import "./index.css"

function Footer() {
    return (
        <footer className="footer color-background-2 gradient section-footer-padding">
            <div className="footer__content-top page-width">
                <div className="footer__blocks-wrapper grid grid--1-col grid--2-col grid--4-col-tablet ">
                    <div className="footer-block grid__item footer-block--menu">
                        <h2 className="footer-block__heading">Shop</h2>
                        <ul className="footer-block__details-content list-unstyled">
                            <li>
                                <a href="/collections/prints" className="link link--text list-menu__item list-menu__item--link">
                                    Menu Item 1
                                </a>
                            </li>
                            <li>
                                <a href="/collections/originals" className="link link--text list-menu__item list-menu__item--link">
                                    Menu Item 2
                                </a>
                            </li>
                            <li>
                                <a href="/collections/art-objects" className="link link--text list-menu__item list-menu__item--link">
                                    Menu Item 3
                                </a>
                            </li>
                            <li>
                                <a href="/products/gift-card" className="link link--text list-menu__item list-menu__item--link">
                                    Menu Item 4
                                </a>
                            </li>
                            <li>
                                <a href="/search" className="link link--text list-menu__item list-menu__item--link">
                                    Menu Item 5
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-block grid__item footer-block--menu">
                        <h2 className="footer-block__heading">Info</h2>
                        <ul className="footer-block__details-content list-unstyled">
                            <li>
                                <a href="/pages/about-us" className="link link--text list-menu__item list-menu__item--link">
                                    Our Story
                                </a>
                            </li><li>
                                <a href="/blogs/news" className="link link--text list-menu__item list-menu__item--link">
                                    Menu Item 1
                                </a>
                            </li><li>
                                <a href="/pages/contact" className="link link--text list-menu__item list-menu__item--link">
                                    Menu Item 2
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-block grid__item">
                        <div className="footer-block__details-content footer-block-image right">
                        </div>
                    </div>
                    <div className="footer-block grid__item">
                        <h2 className="footer-block__heading">Our mission</h2>
                        <div className="footer-block__details-content rte">
                            <p>We curate affordably priced pieces from the most exciting up-and-coming artists.</p>
                        </div>
                    </div>
                </div>
            </div><div className="footer__content-bottom">
                <div className="footer__content-bottom-wrapper page-width">
                    <div className="footer__column footer__localization isolate"></div>
                    <div className="footer__column footer__column--info">
                        <div className="footer__copyright caption">
                            <small className="copyright__content">© 2023 MYSA & CO. Sydney, Australia</small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
