import { useLocation } from "react-router-dom";
import { css, keyframes } from '@emotion/css'

const fadeIn = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 }
});

const FullBackgroundImage = () => {
    const location = useLocation();

    return location.pathname === '/' ? <div className={css({
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://cdn.shopify.com/s/files/1/0581/5792/4544/files/KnowtheRose_dried-flowers-australia-2.jpg)',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        textAlign: 'center',
    })}>
        <span className={css({
            animation: `${fadeIn} 2s ease-in alternate`,
            fontFamily: 'var(--font-heading-family)',
            color: 'white',
            lineHeight: '100vh',
            fontSize: '16vw',
            "@media screen and (min-width: 750px)": {
                fontSize: '10vw',
            },
        })}>
            MYSA & CO.
        </span>
    </div> : null
}

export default FullBackgroundImage;