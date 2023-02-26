import { css } from '@emotion/css'
import { IconArrow } from "../icons/arrow";

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
            <IconArrow className={css({
                marginLeft: '.4rem',
                verticalAlign: 'middle',
                width: '1.5rem'
            })} />
        </a>
    );
}

export default SectionAnnouncementBar;
