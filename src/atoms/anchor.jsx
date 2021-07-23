/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Anchor({ href, content }) {
    return (
        // <Link  passHref={passHref}>
        <a
            target="_blank"
            href={href || "#"}
            css={css`
                color: inherit;
                text-decoration: none;
                cursor: pointer;
            `}
            rel="noopener noreferrer"
        >
            {content}
        </a>
        // </Link>
    );
}
