/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ImageSlider } from "../components/imageSlider";
import { mediaQueries, style } from "../../styles/style";

export function IntroSection() {
    return (
        <section
            css={css`
                padding: 0;
                margin: 0;

                z-index: 0;

                ${mediaQueries[3]} {
                    padding: 20rem 0;
                    grid-column: 1 / span 12;
                    display: flex;
                    justify-content: space-between;
                }
            `}
        >
            <header
                css={css`
                    padding: 8rem 0;
                `}
            >
                <h1
                    css={css`
                        font-size: 3rem;
                        padding-bottom: 1rem;

                        ${mediaQueries[3]} {
                            font-size: 5rem;
                            padding-bottom: 4rem;
                        }
                    `}
                >
                    Hey, I'm{" "}
                    <span
                        css={css`
                            color: ${style.color.textColor};
                            text-decoration: underline;
                        `}
                    >
                        Mritunjay
                    </span>
                </h1>
                <p
                    css={css`
                        line-height: 3rem;
                        ${mediaQueries[3]} {
                            font-size: 2.5rem;
                        }
                    `}
                >
                    <p>Aspiring Front-end developer</p>
                    <p>Final year CSE at NERIST</p>
                </p>
            </header>
            <ImageSlider />
        </section>
    );
}
