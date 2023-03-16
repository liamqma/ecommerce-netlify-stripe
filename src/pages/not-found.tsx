import { css } from '@emotion/css'

function NotFound() {
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
        Page not found
      </h1>
      <a href="/" className={css({
        marginTop: '1rem',
        fontSize: '1.5rem',
        border: '0',
        padding: '1.5rem 3rem',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'var(--color-2)',
        backgroundColor: 'var(--color-3)',
        borderRadius: 'var(--buttons-radius-outset)',
        "media screen and (min-width: 750px)": {
          marginTop: '2rem',
        }
      })}>
        Continue shopping
      </a>
    </div>
  );
}

export default NotFound;