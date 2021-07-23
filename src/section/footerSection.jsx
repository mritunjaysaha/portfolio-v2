/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Footer } from "../components/footer";
import { mediaQueries, style } from "../../styles/style";

export function FooterSection() {
    return (
        <section
            css={css`
                padding: 4rem 0;

                ${mediaQueries[3]} {
                    grid-column: 1 / span 12;
                }
                /* display: none; */
            `}
        >
            <Footer />
        </section>
    );
}
