/**@jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../theme";

const StyledSection = styled.section`
    grid-area: content;
    position: relative;

    background-color: ${(props) => props.theme.backgroundColor.primary};

    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    align-items: center;

    height: 60rem;

    article {
        grid-column: 2 / span 12;
        text-transform: capitalize;

        .article-p-white {
            text-transform: uppercase;
            font-weight: bold;
            color: ${(props) => props.theme.color.white};
            font-size: ${(props) => props.theme.fontSize.fs12};
            letter-spacing: 0.2rem;
        }
        .article-h3 {
            font-size: ${(props) => props.theme.fontSize.fs40};

            padding: 2rem 0;
        }
        .article-p-developer {
            text-transform: uppercase;
            font-size: ${(props) => props.theme.fontSize.fs20};
        }

        .article-p-about {
            font-size: ${(props) => props.theme.fontSize.fs12};
            padding-top: 1.5rem;
        }

        .article-button {
            border: none;
            border-radius: 2.5rem;
            width: 16rem;
            text-transform: uppercase;

            margin-top: 1.5rem;
            padding: 1.6rem 2rem;

            font-size: ${(props) => props.theme.fontSize.fs12};

            font-weight: bold;
            letter-spacing: 0.4rem;

            background-color: green;
        }
    }
`;

export function Intro() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <StyledSection>
                    <article>
                        <p className="article-p-white">hi, I&apos;m</p>
                        <h3 className="article-h3">mritunjay</h3>
                        <p className="article-p-developer">developer</p>
                        <p className="article-p-about">
                            I&apos;m a frontend developer based in Assam, India
                        </p>
                        <button className="article-button">hire me</button>
                    </article>
                </StyledSection>
            </ThemeProvider>
        </>
    );
}
