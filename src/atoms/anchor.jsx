/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Anchor({ link, fontWeight, content }) {
    return (
        // <Link  passHref={passHref}>
        <a
            target="_blank"
            href={link || "#"}
            css={css`
                color: inherit;
                text-decoration: none;
                font-weight: ${fontWeight || "normal"};
                cursor: pointer;
            `}
            rel="noopener noreferrer"
        >
            {content}
        </a>
        // </Link>
    );
}
