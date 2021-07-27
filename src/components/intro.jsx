/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledSection = styled.section`
    grid-area: content;
    position: relative;

    background-color: yellow;

    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    align-items: center;

    height: 60rem;

    article {
        grid-column: 2 / span 12;
        text-transform: capitalize;
    }
`;

export function Intro() {
    return (
        <>
            <StyledSection>
                <article>
                    <p
                        css={css`
                            text-transform: uppercase;
                            font-weight: bold;
                            color: white;
                            font-size: 1.4rem;
                            letter-spacing: 0.2rem;
                        `}
                    >
                        hi, I&apos;m
                    </p>
                    <h3
                        css={css`
                            font-size: 4rem;
                            padding: 2rem 0;
                        `}
                    >
                        mritunjay
                    </h3>
                    <p
                        css={css`
                            text-transform: uppercase;
                            font-size: 2rem;
                        `}
                    >
                        developer
                    </p>
                    <p
                        css={css`
                            font-size: 1.2rem;
                            padding-top: 1.5rem;
                        `}
                    >
                        I&apos;m a frontend developer based in Assam, India
                    </p>
                    <button
                        css={css`
                            border: none;
                            border-radius: 2.5rem;
                            width: 16rem;
                            text-transform: uppercase;

                            margin-top: 1.5rem;
                            padding: 1.6rem 2rem;

                            font-size: 1.2rem;
                            font-weight: bold;
                            letter-spacing: 0.4rem;

                            background-color: green;
                        `}
                    >
                        hire me
                    </button>
                </article>
            </StyledSection>
        </>
    );
}
