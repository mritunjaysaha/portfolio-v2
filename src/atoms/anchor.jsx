/**jsxImportSource @emotion/react */
import { css } from "@emotion/react";
/**
 *
 * @param {href} href link
 * @returns
 */
export const Anchor = ({ children, href }) => {
    return (
        <a
            css={css`
                cursor: pointer;
                z-index: 1000;
            `}
            target="_blank"
            rel="noopener noreferrer"
            href={href ? href : ""}
        >
            {children}
        </a>
    );
};

/**
 *
 * @param {href} url
 * @param {reading_time_minutes} read time
 * @param {title} title of the blog
 * @returns
 */
export const BlogAnchor = ({ href, reading_time_minutes, title }) => (
    <li key={href}>
        <Anchor href={href}>{title}</Anchor>
        {/* <span>{reading_time_minutes} mins read</span> */}
    </li>
);
