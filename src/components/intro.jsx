/**@jsxImportSource @emotion/react */
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { theme, mediaQueries, bp } from "../../theme.config";
import { IconsContainer } from "./iconsContainer";

const StyledSection = styled.section`
    position: relative;

    background-color: ${(props) => props.theme.backgroundColor.primary};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;

    ${mediaQueries(bp.desktop)} {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-template-rows: 1fr;

        height: 60rem;
    }

    article {
        grid-row: 1;
        grid-column: 1 / span 4;
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
            font-family: "Roboto", sans-serif;
            padding: 2rem 0;
        }
        .article-p-developer {
            text-transform: uppercase;
            font-size: ${(props) => props.theme.fontSize.fs20};
            font-weight: bold;
            font-family: "Roboto", sans-serif;

            color: ${(props) => props.theme.color.blue};
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

            margin-top: 4rem;
            padding: 1.6rem 2rem;

            font-size: ${(props) => props.theme.fontSize.fs12};

            font-weight: bold;
            letter-spacing: 0.4rem;

            background-color: ${(props) =>
                props.theme.backgroundColor.primaryBlue};

            cursor: pointer;
        }
    }
`;
const StyledIconsContainer = styled.section`
    ${mediaQueries(bp.desktop)} {
        grid-row: 1;
        grid-column: 6 / span 12;
        display: block;
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
                            Front-end developer who aims to write quality code
                        </p>
                        {/* <button className="article-button">hire me</button> */}
                    </article>

                    <StyledIconsContainer>
                        <IconsContainer />
                    </StyledIconsContainer>
                </StyledSection>
            </ThemeProvider>
        </>
    );
}
