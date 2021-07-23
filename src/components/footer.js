/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { UilEnvelopeAlt } from "@iconscout/react-unicons";
import { mediaQueries } from "../../styles/style";

export function Footer() {
    return (
        <footer
            css={css`
                display: flex;
                text-align: center;
                justify-content: center;

                ${mediaQueries[3]} {
                    grid-column: 1 / span 12;
                }
            `}
        >
            <p
                css={css`
                    display: flex;
                `}
            >
                <span
                    css={css`
                        padding-right: 1rem;
                    `}
                >
                    <UilEnvelopeAlt />
                </span>
                mritunjaysaha@outlook.com
            </p>
        </footer>
    );
}
