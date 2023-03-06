import { css } from '@emotion/css'

const linkStyle = css({
    fontSize: '1.4rem',
    color: 'var(--color-1)',
})

const ulStyle = css({
    margin: 0,
    marginBottom: '4rem',
    padding: '0',
    listStyle: 'none',
    "@media screen and (min-width: 750px)": {
        marginBottom: '0'
    }
});

const h2Style = css({
    marginBottom: '2rem',
    marginTop: '0',
    fontSize: 'calc(var(--font-heading-scale) * 1.6rem)',
    "@media screen and (min-width: 990px)": {
        fontSize: 'calc(var(--font-heading-scale) * 1.8rem)'
    }
})

function Footer() {
    return (
        <footer className={css({
            padding: '33px 25px 24px 25px',
            "@media screen and (min-width: 750px)": {
                paddingBottom: '32px',
                paddingTop: '44px'
            }
        })}>
            <div className={css({
                maxWidth: 'var(--page-width)',
                margin: '0 auto',
                padding: '0 1.5rem 5rem 1.5rem',
                "@media screen and (min-width: 750px)": {
                    padding: '0 5rem 5rem 5rem',
                },
            })}>
                <div className={css({
                    display: 'grid',
                    marginBottom: '2rem',
                    gridTemplateColumns: '1fr 1fr',
                    "@media screen and (min-width: 750px)": {
                        gridTemplateColumns: '1fr 1fr 2fr'
                    },
                })}>
                    <div className={css({
                        gridColumnStart: 1,
                        gridColumnEnd: 2,
                        gridRowStart: 1,
                        gridRowEnd: 2,
                    })}>
                        <h2 className={h2Style}>Shop</h2>
                        <ul className={ulStyle}>
                            <li>
                                <a href="/collections/prints" className={linkStyle}>
                                    Menu Item 1
                                </a>
                            </li>
                            <li>
                                <a href="/collections/originals" className={linkStyle}>
                                    Menu Item 2
                                </a>
                            </li>
                            <li>
                                <a href="/collections/art-objects" className={linkStyle}>
                                    Menu Item 3
                                </a>
                            </li>
                            <li>
                                <a href="/products/gift-card" className={linkStyle}>
                                    Menu Item 4
                                </a>
                            </li>
                            <li>
                                <a href="/search" className={linkStyle}>
                                    Menu Item 5
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={css({
                        gridColumnStart: 2,
                        gridColumnEnd: 3,
                        gridRowStart: 1,
                        gridRowEnd: 2,
                    })}>
                        <h2 className={h2Style}>Info</h2>
                        <ul className={ulStyle}>
                            <li>
                                <a href="/pages/about-us" className={linkStyle}>
                                    Our Story
                                </a>
                            </li><li>
                                <a href="/blogs/news" className={linkStyle}>
                                    Menu Item 1
                                </a>
                            </li><li>
                                <a href="/pages/contact" className={linkStyle}>
                                    Menu Item 2
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={css({
                        gridColumnStart: 1,
                        gridColumnEnd: 3,
                        gridRowStart: 2,
                        gridRowEnd: 3,
                        "@media screen and (min-width: 750px)": {
                            gridColumnStart: 3,
                            gridColumnEnd: 5,
                            gridRowStart: 1,
                            gridRowEnd: 2,
                        },
                    })}>
                        <h2 className={h2Style}>Our mission</h2>
                        <p>We curate affordably priced pieces from the most exciting up-and-coming artists.</p>
                    </div>
                </div>
            </div>
            <div className={css({
                borderTop: 'solid 0.1rem var(--color-4)',
                paddingTop: '3rem', fontSize: '1.2rem',
                textAlign: 'center',
                width: '100%'
            })}>

                <small>© 2023 MYSA & CO. Sydney, Australia</small>
            </div>
        </footer >
    );
}

export default Footer;
