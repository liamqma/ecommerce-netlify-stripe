import { css } from '@emotion/css'

function SectionAnnouncementBar() {
    return (
        <a href="/collections/leia-bryans" className={css({
            backgroundColor: "var(--color-1)",
            display: 'block',
            padding: '1rem 2rem',
            textDecoration: 'none',
            color: 'white',
            fontSize: '1.4rem',
            textAlign: 'center'
        })}>
            A very important announcement
            <svg className={css({
                marginLeft: '.4rem',
                verticalAlign: 'middle',
                width: '1.5rem'
            })} viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor">
                </path>
            </svg>
        </a>
    );
}

export default SectionAnnouncementBar;
